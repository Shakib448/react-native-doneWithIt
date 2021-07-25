import React, { useState, useEffect } from "react";
import Screen from "./../components/Screen";
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import AppText from "./../components/AppText";
import AppButton from "../components/AppButton";

const ListingScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const loadListings = async () => {
    setLoading(true);
    const { data, ok } = await listingsApi.getListings();
    setError(false);

    if (!ok) return setError(true);

    setLoading(false);
    setListings(data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  const renderItem = ({ item }) => (
    <Card
      title={item.title}
      subTitle={"$" + item?.price}
      imageUrl={item.images[0].url}
      onPress={() => navigation.navigate("ListingDetails", item)}
    />
  );

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator animating={true} size="large" />
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
