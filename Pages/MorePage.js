import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function MorePage({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Text>MAIS UMA PAGINA</Text>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://picsum.photos/1200/800?grayscale",
          }}
        />
         <Button
          title="Back to home"
          onPress={() => navigation.navigate("Home")}
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
