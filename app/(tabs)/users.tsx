import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconGradient from "@/components/ui/newui/iconGradient";
import Svg, {
  Defs,
  Filter,
  FeColorMatrix,
  Image as SvgImage,
} from "react-native-svg";
import { ScreenWidth } from "@/utils";

const Friends = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: "#000",
      }}
    >
      <View className="w-[393px] h-[300px] -mt-12 bg-[red]">
        <Svg
          width={ScreenWidth}
          height={300}
          style={{
            position: "absolute",
            width: ScreenWidth,
            height: 300,
            backgroundColor: "yellow",
          }}
        >
          <Defs>
            <Filter id="grayscale">
              <FeColorMatrix
                type="matrix"
                values="0.33 0.33 0.33 0 0  
                                                 0.33 0.33 0.33 0 0  
                                                 0.33 0.33 0.33 0 0  
                                                 0    0    0    1 0"
              />
            </Filter>
          </Defs>

          {/* Grayscale Image */}
          <SvgImage
            width={ScreenWidth}
            height={405}
            href={{
              uri: "https://s3-alpha-sig.figma.com/img/a16b/b3cc/89541ce3c27b79db09431b7accb58abc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mwCpG-ucj1HL2yJgPgyxabSiDeD57GgStzceUIdM4hEj47HsN2dX12oR1QhzRHW4O7D1gR~wCzo4vqE2fztQseoSy0RYcRsT2TtV9GjFjE-9XTay8blC6THhO1eC7O6UtoNLVUtKkhHiG0~EWTU2KnsCq9jdRgQes4oj6Q85QJYE427vyndsRqM6vCOYTTAK4fLJ5OOCIPlQPPns77SGTCIXV1YYkQKiJHP1q99ot4plxLGy7Fot~m4D-ddbXfCOKQUUVpMtt0y372Uqf-nQN98Ce81b3YwVmgp6OkU7mr1i-7juSP1sc0iktLqjsi2Eiv4iS4s3BjFiUck04ts2uQ__",
            }}
            filter="url(#grayscale)"
          />
        </Svg>
        <View
          className="absolute w-full h-full bg-black opacity-10"
          style={{ width: ScreenWidth }}
        />
        <LinearGradient
          colors={[
            "rgba(0, 0, 0, 0.9)",
            "rgba(0, 0, 0, 0.4)",
            "rgba(0, 0, 0, 0.2)",
          ]}
          locations={[0, 0.8]}
          style={{ width: ScreenWidth, height: 300 }}
        />

        <View className="absolute top-[170px] -left-[100px] w-full h-full z-50">
          <TouchableOpacity className="relative">
            <IconGradient
              size={124}
              strokeSize={10}
              circleSize={120}
              marginBottom={0}
              left={0}
              isImage={true}
              imageSource={
                "https://s3-alpha-sig.figma.com/img/a16b/b3cc/89541ce3c27b79db09431b7accb58abc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mwCpG-ucj1HL2yJgPgyxabSiDeD57GgStzceUIdM4hEj47HsN2dX12oR1QhzRHW4O7D1gR~wCzo4vqE2fztQseoSy0RYcRsT2TtV9GjFjE-9XTay8blC6THhO1eC7O6UtoNLVUtKkhHiG0~EWTU2KnsCq9jdRgQes4oj6Q85QJYE427vyndsRqM6vCOYTTAK4fLJ5OOCIPlQPPns77SGTCIXV1YYkQKiJHP1q99ot4plxLGy7Fot~m4D-ddbXfCOKQUUVpMtt0y372Uqf-nQN98Ce81b3YwVmgp6OkU7mr1i-7juSP1sc0iktLqjsi2Eiv4iS4s3BjFiUck04ts2uQ__"
              }
              isBlackBackground={false}
              imageTop={18}
              imageLeft={135}
            />
          </TouchableOpacity>
        </View>

        <View className="absolute top-[190px] left-[190px] w-full h-full z-50">
          <Text className="text-white text-[36px] font-rift-demi">
            {"ELLIS"}
          </Text>
          <Text className="text-white text-[36px] font-rift-demi -mt-3">
            {"OSBORN"}
          </Text>
          <Text className="text-[#DBDBDB] text-[16px] font-rift-demi -mt-1">
            MEMBER SINCE 2019
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Friends;