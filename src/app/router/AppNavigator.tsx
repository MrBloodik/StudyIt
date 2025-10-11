import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Welcome } from "@pages/Sign";
import { Splash } from "@pages/Sign/Splash";

export type RootStackParamList = {
  SignStack: undefined;
  MainStack: undefined;
};

export type SignStackParamList = {
  Welcome: undefined;
  Splash: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ExternalLogin: undefined;
};

export type MainStackParamList = {};

export type MainTabsParamList = {};

export const RootStack = createNativeStackNavigator<RootStackParamList>();
export const SignStack = createNativeStackNavigator<SignStackParamList>();
export const MainStack = createNativeStackNavigator<MainStackParamList>();
export const MainTabs = createBottomTabNavigator<MainTabsParamList>();

const SignNavigator = () => {
  return (
    <SignStack.Navigator
      id={undefined}
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flex: 1,
        },
        gestureEnabled: false,
        fullScreenGestureEnabled: true,
      }}
    >
      <SignStack.Screen name="Welcome" component={Welcome} />
      <SignStack.Screen name="Splash" component={Splash} />
    </SignStack.Navigator>
  );
};

export const AppNavigator = () => {
  const initialRouteName = "SignStack";

  return (
    <RootStack.Navigator
      id={undefined}
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flex: 1,
        },
        gestureEnabled: false,
        fullScreenGestureEnabled: true,
      }}
    >
      <RootStack.Screen name="SignStack" component={SignNavigator} />
    </RootStack.Navigator>
  );
};
