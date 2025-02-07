import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { ResizeMode, Video } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";
import WommenRunning from "../../assets/videos/WommenRunning.mp4";
import { useRouter } from "expo-router";
import { WordLogo } from "../../components/icons/wordLogo";

const getStarted = () => {
  const router = useRouter();
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  return (
    <View className='flex-1 bg-black'>
      <Video
        source={WommenRunning}
        resizeMode={ResizeMode.COVER}
        shouldPlay={true}
        isLooping
        isMuted
        onLoad={() => setIsVideoLoaded(true)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          opacity: isVideoLoaded ? 1 : 0,
        }}
      />
      <LinearGradient
        colors={["rgba(0, 122, 89, 0)", "rgba(0, 122, 90, 1)"]}
        start={{ x: 0, y: 0.7 }}
        end={{ x: 0, y: 1.2 }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          height: "100%",
        }}
      />
      <SafeAreaView className='flex-1'>
        <View className='flex-1 justify-between px-4'>
          <View className='flex-1 items-center justify-center'>
            <View className='items-center w-full max-w-md'>
              <WordLogo width='80%' height={65} style={{ maxWidth: 247 }} />
              <Text className='text-white text-base sm:text-xl text-center mb-4 mt-2 px-4'>
                GET HEALTHY. GET PAID.
              </Text>
            </View>
          </View>

          <View className='w-full items-center '>
            <Text className='text-[#C6C6C6] text-[12px]  text-center px-4 mb-2.5'>
              A WHOOP, FITBIT, OR APPLE WATCH IS REQUIRED
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style='light' />
    </View>
  );
};

export default getStarted;
