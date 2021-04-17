import React from "react";
import { StyleSheet, FlatList, Text, View, ListRenderItem } from "react-native";

interface Todo {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

const Item = (item: Todo) => (
  <View style={styles.itemWrapper}>
    <Text style={styles.titleText}>{item.title}</Text>
    <Text style={styles.descText}>Description: {item.description}</Text>
  </View>
);

const TodoList = () => {
  const todoList: Todo[] = [
    {
      id: "1",
      title: "Groceries",
      description: "Go to Walmart buy some bananas.",
      done: false,
    },
    {
      id: "2",
      title: "Car Wash",
      description: "Ask Joe to wash the carpets.",
      done: false,
    },
  ];

  const renderItem: ListRenderItem<Todo> = ({ item }) => {
    return (
      <Item
        id={item.id}
        title={item.title}
        description={item.description}
        done={item.done}
      />
    );
  };

  return (
    <View style={styles.todoWrapper}>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoWrapper: {
    display: "flex",
    alignItems: "center",
    margin: 30,
  },
  titleText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  descText: {
    color: "#ffffff",
    fontSize: 14,
  },
  itemWrapper: {
    backgroundColor: "#3d3d3d",
    padding: 10,
    margin: 10,
    width: 250,
  },
});

export default TodoList;
