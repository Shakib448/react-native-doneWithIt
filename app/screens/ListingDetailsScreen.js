import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import { ListItem } from "../components/lists";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: listing.images[0].url }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText color="secondary" style={styles.price}>
          ${listing.price}
        </AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Muktadir Ahamed"
            image={require("../assets/mosh.png")}
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
