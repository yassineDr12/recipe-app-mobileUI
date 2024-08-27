import { type MealsOverViewScreenNavigationProp } from "../types/NavigationPropTypes";
import React, { useState } from "react";
import { FlatList, ListRenderItem, StyleSheet, Dimensions, Pressable } from "react-native";
import { Card, Text } from "@gluestack-ui/themed";
import { CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import Category from "../models/category";

const deviceHeight = Dimensions.get("screen").height;
const deviceWidth = Dimensions.get("screen").width;

const CategoriesScreen: React.FC = () => {
  const [pressedId, setPressedId] = useState<string | null>(null);
  const navigation = useNavigation<MealsOverViewScreenNavigationProp>();

  const onPressHandler = (category: Category) => {
    navigation.navigate("MealsOverViewScreen", { category });
  };

  const renderItem: ListRenderItem<Category> = ({ item }) => (
    <Pressable
      style={{
        flex: 1,
      }}
      onPressIn={() => setPressedId(item.id)}
      onPressOut={() => setPressedId(null)}
      onPress={() => onPressHandler(item)}
    >
      <Card size="sm" style={[styles.box, { backgroundColor: pressedId === item.id ? "white" : item.color }]}>
        <Text style={styles.text}>{item.title}</Text>
      </Card>
    </Pressable>
  );

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={{ padding: 10 }}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    margin: "5%",
    height: 120 * (deviceHeight / 640),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 6.8 * (deviceWidth / 160),
    fontWeight: "bold",
    color: "#000",
  },
});
