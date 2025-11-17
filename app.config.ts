import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: "StudyIt",
    slug: "SI-frontend",
    scheme: "sifrontend",
    jsEngine: "hermes",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icons/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    owner: "awesomely0",
    splash: {
      image: "./assets/icons/icon.png",
      resizeMode: "contain",
      backgroundColor: "#000",
    },
    plugins: [
      [
        "expo-splash-screen",
        {
          image: "./assets/icons/icon.png",
          resizeMode: "contain",
          backgroundColor: "#000",
          imageWidth: 200,
        },
      ],
      [
        "expo-build-properties",
        {
          ios: {
            deploymentTarget: "16.0",
          },
        },
      ],
    ],
    ios: {
      supportsTablet: true,
      jsEngine: "hermes",
      bundleIdentifier: "com.awesomely0.SIfrontend",
      buildNumber: "5",
      icon: "./assets/icons/icon.png",
      infoPlist: {
        NSPhotoLibraryUsageDescription:
          "This app requires access to your photo library to select images for posts.",
        NSCameraUsageDescription:
          "This app requires access to your camera to take photos for posts.",
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      icon: "./assets/icons/icon.png",
      package: "com.awesomely0.SIfrontend",
      softwareKeyboardLayoutMode: "pan",
      adaptiveIcon: {
        foregroundImage: "./assets/icons/adaptive-icon.png",
        backgroundColor: "#000",
      },
    },

    extra: {
      eas: {
        projectId: "b2aadd8d-b71c-40db-bdfc-04ca6162c6bb",
      },
    },
  };
};
