import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "./../components/Screen";
import ListIemSeparator from "./../components/ListIemSeparator";
import ListItemDeleteAction from "./../components/ListItemDeleteAction";

const initialMessage = [
  {
    id: 1,
    title: "Muktadir",
    description: "Hey This Item is available",
    image: require("../assets/mosh.png"),
  },
  {
    id: 2,
    title: "Mosh Hamadani",
    description: "You are the boss",
    image: require("../assets/mosh.png"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessage] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessage(messages.filter((msg) => msg.id !== message.id));
  };

  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      subTitle={item.description}
      image={item.image}
      onPress={() => console.log("message selected", item)}
      renderRightActions={() => (
        <ListItemDeleteAction onPress={() => handleDelete(item)} />
      )}
    />
  );

  return (
    <Screen>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={ListIemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessage([
            {
              id: 1,
              title: "Muktadir",
              description: "Hey This Item is available",
              image: require("../assets/mosh.png"),
            },
            {
              id: 2,
              title: "Mosh Hamadani",
              description: "You are the boss",
              image: require("../assets/mosh.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
