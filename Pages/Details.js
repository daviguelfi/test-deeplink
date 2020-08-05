import React from "react";
import { Linking } from "expo";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>OI</Text>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://picsum.photos/1200/800?blur",
          }}
        />
        <Button
          title="Go to More Page"
          onPress={() => navigation.navigate("details")}
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
