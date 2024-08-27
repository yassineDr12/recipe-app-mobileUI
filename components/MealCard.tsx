import { IBadge } from "../types/dataTypes";
import { MealCardProps } from "../types/ComponentPropsTypes";
import React from "react";
import {
  VStack,
  Image,
  Text,
  Badge,
  BadgeText,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  Icon,
} from "@gluestack-ui/themed";
import { StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Star } from "lucide-react-native";
import MealStepsAccordion from "./MealStepsAccordion";
import { useFavoritesContext } from "../store/context/favorites-context";

const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  const { isFavorite, toggleFavorite } = useFavoritesContext();

  const badges: IBadge[] = [
    { label: meal.complexity, action: "info" },
    { label: meal.affordability, action: "info" },
    { label: "Gluten Free", action: "success", condition: meal.isGlutenFree },
    { label: "Vegan", action: "success", condition: meal.isVegan },
    { label: "Vegetarian", action: "success", condition: meal.isVegetarian },
    { label: "Lactose Free", action: "success", condition: meal.isLactoseFree },
  ];

  const filteredBadges = badges.filter((badge) => badge.condition !== false);

  return (
    <Accordion m="$5" width="90%" variant="filled" style={styles.accordion}>
      <AccordionItem value={meal.id}>
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <VStack space="xl" style={styles.header}>
                    <Image alt={meal.title} source={{ uri: meal.imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{meal.title}</Text>
                  </VStack>
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <VStack space="md" alignItems="center" style={styles.badgeContainer}>
            {filteredBadges.map((item, index) => (
              <Badge key={index} size="sm" variant="outline" borderRadius="$full" action={item.action}>
                <BadgeText>{item.label}</BadgeText>
              </Badge>
            ))}
            <TouchableOpacity onPress={() => toggleFavorite(meal.id)}>
              <Icon as={Star} size="lg" fill={isFavorite(meal.id) ? "black" : "transparent"} />
            </TouchableOpacity>
          </VStack>
          <VStack style={styles.content} space="lg">
            <Text>Duration: {meal.duration} minutes</Text>
            <Text fontSize="$lg" fontWeight="bold">
              Ingredients
            </Text>
            {meal.ingredients.map((ingredient, index) => (
              <Text key={index}>• {ingredient}</Text>
            ))}
          </VStack>
          <MealStepsAccordion meal={meal} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const styles = StyleSheet.create({
  accordion: {
    borderRadius: 10,
    overflow: "hidden",
  },
  header: {
    marginTop: -20,
    marginHorizontal: -20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 9,
  },
  title: {
    textAlign: "center",
    marginHorizontal: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  content: {
    margin: "3%",
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default MealCard;
