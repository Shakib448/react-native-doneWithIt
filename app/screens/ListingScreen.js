import React, { useEffect } from "react";
import Screen from "./../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import AppText from "./../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "./../hooks/useApi";
import listingsApi from "../api/listings";

const ListingScreen = ({ navigation }) => {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  const renderItem = ({ item }) => (
    <Card
      title={item.title}
      subTitle={"$" + item?.price}
      imageUrl={item.images[0].url}
      thumbnailUrl={item.images[0].thumbnailUrl}
      onPress={() => navigation.navigate("ListingDetails", item)}
    />
  );

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />

      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={getListingsApi.request} />
          </>
        )}

        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={renderItem}
        />
      </Screen>
    </>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});
