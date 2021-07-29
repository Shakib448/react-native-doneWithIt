import React, { useContext } from "react";
import Screen from "./../components/Screen";
import { ListItem } from "../components/lists";
import { StyleSheet, View, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "./../components/Icon";
import ListItemSeparatorComponent from "../components/lists/ListIemSeparator";
import AuthContext from "./../context/context";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      IconComponent={
        <Icon
          name={item.icon.name}
          backgroundColor={item.icon.backgroundColor}
        />
      }
      onPress={() => navigation.navigate(item.targetScreen)}
    />
  );

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/mosh.png")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={renderItem}
          ItemSeparatorComponent={ListItemSeparatorComponent}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => setUser(null)}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
