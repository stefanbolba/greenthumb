import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import HomeHeader from "../components/HomeHeader";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <HomeHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
