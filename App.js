import React from "react";
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  Button,
} from "react-native";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Image
    //     source={require("./assets/background.jpg")}
    //     style={styles.bgImage}
    //     blurRadius={2}
    //   />
    //   <Image source={require("./assets/logo-red.png")} style={styles.logoImg} />
    //   <Text style={styles.text}>Hello React Native</Text>
    //   <View
    //     style={{
    //       backgroundColor: "gold",
    //       width: "100%",
    //       height: 100,
    //     }}
    //   ></View>
    //   <View
    //     style={{ backgroundColor: "tomato", width: "100%", height: 100 }}
    //   ></View>
    // </View>

    <View style={styles.container}>
      {/* <Image
        source={require("./assets/background.jpg")}
        style={styles.bgImage}
        blurRadius={2}
      />
      <Image source={require("./assets/logo-red.png")} style={styles.logoImg} />
      <Text style={styles.text}>Hello React Native</Text> */}
      <View
        style={{
          backgroundColor: "#000",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingLeft: 15,
            paddingRight: 15,
            position: "absolute",
            top: 25,
          }}
        >
          <Button title="delete" color="#FF0000"></Button>
          <Button title="save" color="#00ff00"></Button>
        </View>
        <Image source={require("./assets/chair.jpg")} style={styles.bgImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#fff",
  //   flex: 1,
  //   flexDirection: "row",
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexDirection: "column",
  // },
  // bgImage: {
  //   width: "100%",
  //   height: "73.6%",
  // },
  // logoImg: {
  //   width: 100,
  //   height: 100,
  //   position: "absolute",
  //   top: "30%",
  // },
  // text: {
  //   position: "absolute",
  //   top: "45%",
  // },

  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  bgImage: {
    width: "100%",
    height: "70%",
  },
  logoImg: {
    width: 100,
    height: 100,
    position: "absolute",
    top: "30%",
  },
  text: {
    position: "absolute",
    top: "45%",
  },
});
