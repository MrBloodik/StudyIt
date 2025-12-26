import { AppleIcon, GoogleIcon, MaxIcon } from "@shared/assets/icons/socials";
import { Image, Text, View } from "react-native";
import Animated from "react-native-reanimated";

import { smartNavigate } from "@shared/lib/navigate";
import s from "./SocialAuthFooterStyle";
import useSocialAuthFooterAnimations from "./useSocialAuthFooterAnimations";

type Props = {
  mode: "login" | "register";
};

export default function SocialAuthFooter({ mode }: Props) {
  const AnimatedS = useSocialAuthFooterAnimations();

  const isLogin = mode === "login";

  const mainText = isLogin ? "Или войти с помощью" : "Или зарегистрироваться с";
  const actionTextBeforeLink = isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?";
  const actionTextLink = isLogin ? "Зарегистрироваться!" : "Войти!";

  const handleActionPress = () => {
    const targetScreen = isLogin ? "SignUp" : "SignIn";
    smartNavigate(targetScreen);
  };

  const handleGooglePress = () => {
    console.log(`${mode} через Google`);
  };

  const handleApplePress = () => {
    console.log(`${mode} через Apple`);
  };

  const handleMaxPress = () => {
    console.log(`${mode} через Max`);
  };

  return (
    <View style={s.footer}>
      <Animated.Text style={[s.anotherSignText, AnimatedS.anotherSignText]}>
        {mainText}
      </Animated.Text>

      <View style={s.socialsContainer}>
        <Animated.View
          style={[s.social, AnimatedS.googleIcon]}
          onTouchEnd={handleGooglePress}
        >
          <Image style={s.socialIcon} source={GoogleIcon} />
        </Animated.View>
        <Animated.View
          style={[s.social, AnimatedS.maxIcon]}
          onTouchEnd={handleMaxPress}
        >
          <Image style={s.socialIcon} source={MaxIcon} />
        </Animated.View>
        <Animated.View
          style={[s.social, AnimatedS.appleIcon]}
          onTouchEnd={handleApplePress}
        >
          <Image style={s.socialIcon} source={AppleIcon} />
        </Animated.View>
      </View>

      <Animated.Text
        style={[s.signText, AnimatedS.signText]}
        onPress={handleActionPress}
      >
        {actionTextBeforeLink} <Text style={s.signLink}>{actionTextLink}</Text>
      </Animated.Text>
    </View>
  );
}
