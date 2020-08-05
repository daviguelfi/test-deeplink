import { StatusBar } from "expo-status-bar";
import React from "react";
import { Linking } from "expo";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { WebView } from "react-native-webview";

export default class Home extends React.Component {
  render() {
    return (
      <WebView
        originWhitelist={["*"]}
        source={{ uri: "http://guelflix.vercel.app/" }}
        // source={{ html: '<h1>Hello world</h1>' }}
        // style={{ marginTop: 20 }}Details
      />
    );
  }
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
