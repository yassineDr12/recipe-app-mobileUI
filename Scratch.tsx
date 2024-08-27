import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CategoriesScreen, FavoritesScreen, MealsOverViewScreen } from "./screens";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="MealsOverViewScreen" component={MealsOverViewScreen} />
    </Stack.Navigator>
  );
};

const Scratch: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="All Categories" component={StackNavigator} />
        <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} options={{ title: "Favorites" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Scratch;
