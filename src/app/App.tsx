import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NotifierWrapper } from "react-native-notifier";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { navigationRef } from "@shared/lib/navigate";
import { FontProvider } from "./providers";
import { AppNavigator } from "./router/AppNavigator";

SplashScreen.preventAutoHideAsync();

export const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <SafeAreaProvider>
        <NotifierWrapper>
          <NavigationContainer ref={navigationRef}>
            <FontProvider>
              <AppNavigator />
            </FontProvider>
          </NavigationContainer>
          <StatusBar style="light" />
        </NotifierWrapper>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
