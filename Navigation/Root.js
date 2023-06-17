import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Screens/Home";
import Users from "../Screens/users";
import styles from "../common/styles";
import routes from "../common/routes";
import Details from "../Screens/details";

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.home}
        component={Home}
        options={{
          title: "Home Page",
          headerStyle: styles.navbar,
          headerTintColor: "#F2ECFF",
        }}
      />
      <Stack.Screen
        name={routes.users}
        component={Users}
        options={{
          title: "Users Page",
          headerStyle: styles.navbar,
          headerTintColor: "#F2ECFF",
        }}
      />
      <Stack.Screen
        name={routes.details}
        component={Details}
        options={{
          title: "User Details",
          headerStyle: styles.navbar,
          headerTintColor: "#F2ECFF",
        }}
      />
    </Stack.Navigator>
  );
};

export default Root;
