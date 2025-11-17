import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from "@react-navigation/native";
import { createRef } from "react";

export const navigationRef = createRef<NavigationContainerRef<any>>();

export function navigate(
  name: string,
  params?: Record<string, any>,
  needChecks = true
) {
  const nav = navigationRef.current;
  if (!nav) {
    console.warn("Навигация не инициализирована");
    return;
  }

  const tryNavigateToMain = (target?: string) => {
    if (!target) {
      nav.navigate("MainStack");
      return;
    }

    const finalScreen = target.charAt(0).toUpperCase() + target.slice(1);
    try {
      nav.navigate("MainStack", {
        screen: "MainTabs",
        params: { screen: finalScreen, params },
      });
    } catch (error) {
      console.warn(
        `Экран ${finalScreen} не найден, переходим на главную`,
        error
      );
      nav.navigate("MainStack", {
        screen: "MainTabs",
        params: { screen: "Welcome" },
      });
    }
  };

  if (needChecks && typeof name === "string" && name.includes("/")) {
    const parts = name.split("/");
    const namespace = parts[1];
    const target = parts[2];

    const handlers: Record<string, () => void> = {
      main: () => tryNavigateToMain(target),
      sign: () => {
        const screenName = target === "up" ? "SignUp" : "SignIn";
        nav.navigate("SignStack", { screen: screenName, params });
      },
    };

    const handler = handlers[namespace];
    if (handler) {
      handler();
      return;
    }
  }

  if (params) nav.navigate(name, params);
  else nav.navigate(name);
}

export function navigateBack(count: number = 1) {
  if (navigationRef.current) {
    navigationRef.current.dispatch((state) => {
      const steps = Math.max(1, count);
      const routes = state.routes;

      const newIndex = Math.max(0, state.index - steps);

      return CommonActions.reset({
        ...state,
        routes,
        index: newIndex,
      });
    });
  } else {
    console.warn("Навигация не инициализирована");
  }
}

export function goBack() {
  if (navigationRef.current) {
    navigationRef.current.goBack();
  } else {
    console.warn("Навигация не инициализирована");
  }
}

export function replace(name: string, params?: object) {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.replace(name, params));
  } else {
    console.warn("Навигация не инициализирована");
  }
}

export function reset(name: string, params?: object) {
  if (navigationRef.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name, params }],
      })
    );
  } else {
    console.warn("Навигация не инициализирована");
  }
}

export function getCurrentRoute() {
  if (navigationRef.current) {
    return navigationRef.current.getCurrentRoute();
  }
  return null;
}

export function getRouteParams() {
  const currentRoute = getCurrentRoute();
  if (!currentRoute) return {};

  return currentRoute.params || {};
}

export function getProfileId() {
  const params = getRouteParams() as { id?: string };
  return params.id || null;
}
