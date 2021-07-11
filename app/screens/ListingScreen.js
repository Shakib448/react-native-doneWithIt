import React from "react";
import Screen from "./../components/Screen";
import { FlatList } from "react-native";
import Card from "../components/Card";

const listing = [
  {
    id: 1,
    title: "Red Jacket for sell",
    price: 100,
    image: require("../assets/jacket.png"),
  },
  {
    id: 2,
    title: "Couch in a great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

const ListingScreen = () => {
  const renderItem = ({ item }) => (
    <Card title={item.title} subTitle={"$" + item.price} image={item.image} />
  );

  return (
    <Screen>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={renderItem}
      />
    </Screen>
  );
};

export default ListingScreen;
