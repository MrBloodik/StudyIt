import { Dimensions, Text, View } from "react-native";

import { SaladCatAnimation } from "@shared/assets/animations/Lottie/ui";

import { goBack } from "@shared/lib/navigate";
import { SimpleButton } from "@shared/ui/Button";
import s from "./BroWhoScreenPageStyle";

export const BroWhoScreen = () => {
  const { width, height } = Dimensions.get("window");
  const size = width * 0.9;

  return (
    <View style={s.container}>
      <View style={s.content}>
        <View style={s.header}>
          <SaladCatAnimation size={size} autoPlay loop />
        </View>
        <View style={s.body}>
          <Text style={s.title}>
            Вы уверены в своем выборе? Если да, то надеюсь вы передумаете!!!
          </Text>
          <Text style={s.subTitle}>
            Мы рекомендуем установить приложение скаМ!
          </Text>
        </View>
        <View style={s.footer}>
          <SimpleButton
            bgColor="#000"
            centered
            bRad={12}
            style={[s.btn, s.shadow]}
            onPress={goBack}
          >
            <Text style={s.btnText}>Вернуться назад</Text>
          </SimpleButton>
        </View>
      </View>
    </View>
  );
};
