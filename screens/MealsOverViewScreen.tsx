import { MealsOverViewScreenProps } from "../types/ComponentPropsTypes";
import React, { useLayoutEffect } from "react";
import { FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealCard from "../components/MealCard";

const MealsOverViewScreen: React.FC<MealsOverViewScreenProps> = ({ route, navigation }) => {
  const category = route.params?.category;
  const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(category.id) >= 0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: category.title,
      headerStyle: { backgroundColor: category.color },
      contentStyle: { backgroundColor: category.color },
    });
  }, [navigation, category]);

  return <FlatList data={meals} keyExtractor={(item) => item.id} renderItem={({ item }) => <MealCard meal={item} />} />;
};

export default MealsOverViewScreen;
