import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icon from "@expo/vector-icons";

import Home from '../screens/Home';
import Search from '../screens/Search';

const Stack = createBottomTabNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0D0D0D",
          borderTopWidth: 0,
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            const isFocused = focused ? "#5E60CE" : color
            return <Icon.AntDesign name="home" size={size} color={isFocused} />
          }
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            const isFocused = focused ? "#5E60CE" : color
            return <Icon.AntDesign name="search1" size={size} color={isFocused} />
          }
        }}
      />
    </Stack.Navigator>
  );
}