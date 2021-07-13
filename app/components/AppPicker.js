import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  placeholder,
  items,
  onSelectItem,
  selectedItem,
  PickerItemComponent = PickerItem,
  width = "100%",
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <PickerItemComponent
      label={item.label}
      onPress={() => {
        setModalVisible(false);
        onSelectItem(item);
      }}
    />
  );

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icons}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>
              {selectedItem ? selectedItem.label : placeholder}
            </AppText>
          ) : (
            <AppText style={styles.placeholder} color="medium">
              {selectedItem ? selectedItem.label : placeholder}
            </AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icons}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen style={styles.screen}>
          <Button
            title="close"
            onPress={() => setModalVisible(false)}
            color={defaultStyles.colors.medium}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={renderItem}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",

    padding: 15,
    marginVertical: 15,
  },

  icons: {
    marginRight: 10,
    marginTop: 4,
  },
  text: {
    flex: 1,
  },
  screen: {
    paddingTop: 0,
  },
  placeholder: {
    flex: 1,
  },
});
