import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My TODO app</Text>
      <Text style={styles.text}>Test!</Text>
      <TodoList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 50,
    backgroundColor: "#303030",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
  },
  heading: {
    color: "#ffffff",
    fontSize: 24,
  },
});
