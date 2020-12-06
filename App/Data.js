import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import FetchData from "./FetchData";

export default function Data() {
  const [value, setValue] = useState();
  useEffect(() => {
    let data = async () => {
      setValue(await FetchData());
    };
    data();
  }, []);
  if (!value) {
    return (
      <ActivityIndicator
        size="large"
        animating={true}
        color="rgba(137,232,207,100)"
      />
    );
  }
  return (
    <ScrollView>
      {value.map((files, index) => (
        <Card key={index} style={styles.container}>
          <Card.Title
            title={!files[1] ? "Not Provided" : files[1]}
            left={() => <Ionicons name="md-person" size={50} color="#fff" />}
          />
          <Card.Content style={styles.content}>
            <Text style={styles.title}>S.No:</Text>
            <Text style={styles.paragraph}>
              {!files[0] ? "Not Given" : files[0]}
            </Text>
          </Card.Content>
          <Card.Content style={styles.content}>
            <Text style={styles.title}>Class:</Text>
            <Text style={styles.paragraph}>
              {!files[3] ? "Not Provided" : files[2]}
            </Text>
          </Card.Content>
          <Card.Content style={styles.content}>
            <Text style={styles.title}>Subject:</Text>
            <Text style={styles.paragraph}>
              {!files[4] ? "Not Provided" : files[3]}
            </Text>
          </Card.Content>
          <Card.Content style={styles.content}>
            <Text style={styles.title}>Grade:</Text>
            <Text style={styles.paragraph}>
              {!files[2] ? "Not Provided" : files[4]}
            </Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 4,
    borderRadius: 20,
    backgroundColor: "rgba(137,232,207,100)",
    borderColor: "rgba(137,232,207,100)",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 15,
  },
  paragraph: {
    fontSize: 18,
  },
});
