import { StatusBar } from "expo-status-bar";
import React from "react";
import { Linking } from "expo";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>HOMEEEEE</Text>
      <View style={styles.container}>
        {/* <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://picsum.photos/1200/800",
          }}
        /> */}
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rZGi1SCj1fU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 500,
    height: 500,
  },
});
