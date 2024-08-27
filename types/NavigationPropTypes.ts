import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Category from "../models/category";
/**
 * Defines the root stack parameter list for the application's navigation.
 * The `MealsOverViewScreen` screen is defined with a `category` parameter of type `Category`.
 * Additional screens and their parameters can be added to this type.
 */
export type RootStackParamList = {
  Drawer: undefined;
  MealsOverViewScreen: {
    category: Category;
  };
  FavoritesScreen: undefined;
};

/**
 * Defines the drawer parameter list for the application's navigation.
 * Additional screens and their parameters can be added to this type.
 */
export type DrawerParamList = {
  Categories: undefined;
  FavoritesScreen: undefined;
};

/**
 * The navigation prop type for the `MealsOverViewScreen` screen.
 * This type can be used to access the navigation functionality for this screen.
 */
export type MealsOverViewScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "MealsOverViewScreen">;
