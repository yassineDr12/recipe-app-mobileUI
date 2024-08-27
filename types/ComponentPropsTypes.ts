import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Meal from "../models/meal";
import { DrawerParamList, RootStackParamList } from "./NavigationPropTypes";
import { CompositeScreenProps } from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";
/**
 * Defines the props for a `MealCard` component.
 * @property {Meal} meal - The meal data to be displayed in the card.
 */
export type MealCardProps = {
  meal: Meal;
};

/**
 * Defines the props for a `MealStepsAccordion` component.
 * @property {Meal} meal - The meal data to be displayed in the accordion.
 */
export type MealStepsAccordionProps = {
  meal: Meal;
};

/**
 * Defines the props for the `MealsOverViewScreen` screen in the React Navigation stack.
 */
export type MealsOverViewScreenProps = NativeStackScreenProps<RootStackParamList, "MealsOverViewScreen">;

export type FavoritesScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, "FavoritesScreen">,
  NativeStackScreenProps<RootStackParamList>
>;
