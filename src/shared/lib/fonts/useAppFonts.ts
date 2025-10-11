import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

type FontsMap = Record<string, number>;

export const useAppFonts = (fonts: FontsMap) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(
    () => {
      let mounted = true;

      const load = async () => {
        try {
          await SplashScreen.preventAutoHideAsync();
        } catch (e) {
          // ignore
        }

        try {
          await Font.loadAsync(fonts);
          if (!mounted) return;
          setLoaded(true);
        } catch (err) {
          console.warn("useAppFonts: failed to load fonts", err);
          if (mounted) setLoaded(true);
        } finally {
          if (mounted) {
            try {
              await SplashScreen.hideAsync();
            } catch (e) {
              console.warn("useAppFonts: hideAsync failed", e);
            }
          }
        }
      };

      load();

      return () => {
        mounted = false;
      };
    },
    [
      /* fonts should be stable or memoized */
    ]
  );

  return loaded;
};
