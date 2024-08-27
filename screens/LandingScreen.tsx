import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MealsOverViewScreen, CategoriesScreen, FavoritesScreen } from ".";
import { FavoritesContextProvider } from "../store/context/favorites-context";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerParamList, RootStackParamList } from "../types/NavigationPropTypes";

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{ title: "All Categories" }} />
      <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} options={{ title: "Favorites" }} />
    </Drawer.Navigator>
  );
};

const LandingScreen: React.FC = () => {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverViewScreen" component={MealsOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
};

export default LandingScreen;
