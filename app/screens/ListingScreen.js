import React, { useState, useEffect } from "react";
import Screen from "./../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";

// const listing = [
//   {
//     id: 1,
//     title: "Red Jacket for sell",
//     price: 100,
//     image: require("../assets/jacket.png"),
//   },
//   {
//     id: 2,
//     title: "Couch in a great condition",
//     price: 1000,
//     image: require("../assets/couch.jpg"),
//   },
// ];

const ListingScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    const { data } = await listingsApi.getListings();
    setListings(data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  const renderItem = ({ item }) => (
    <Card
      title={item?.title}
      // subTitle={"$" + item?.price}
      // imageUrl={item.images[0].url}
      onPress={() => navigation.navigate("ListingDetails", item)}
    />
  );

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={renderItem}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});
