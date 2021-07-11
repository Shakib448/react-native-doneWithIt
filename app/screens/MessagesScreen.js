import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "./../components/Screen";
import ListIemSeparator from "./../components/ListIemSeparator";
import ListItemDeleteAction from "./../components/ListItemDeleteAction";

const initialMessage = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/mosh.png"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessage] = useState(initialMessage);

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
      />
    </Screen>
  );
};

export default MessagesScreen;
