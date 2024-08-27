import React from "react";
import { FlatList, View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealCard from "../components/MealCard";
import { useFavoritesContext } from "../store/context/favorites-context";
import { VStack, Heading, Button, ButtonText } from "@gluestack-ui/themed";
import { FavoritesScreenProps } from "../types/ComponentPropsTypes";

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({ navigation }) => {
  const { isFavorite } = useFavoritesContext();
  const meals = MEALS.filter((meal) => isFavorite(meal.id));

  const handleButtonPress = () => {
    // navigate to the catgeories screen
    navigation.navigate("Categories");
  };

  if (meals.length === 0) {
    return (
      <VStack flex={1} justifyContent="center" alignItems="center" space="md">
        <Heading size="xl">No Favorites Yet</Heading>
        <Text>Start adding some meals to your favorites!</Text>

        <Button size="lg" variant="solid" action="primary" onPress={handleButtonPress}>
          <ButtonText>Check Meal Categories</ButtonText>
        </Button>
      </VStack>
    );
  }

  return <FlatList data={meals} keyExtractor={(item) => item.id} renderItem={({ item }) => <MealCard meal={item} />} />;
};

export default FavoritesScreen;
