import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { ResizeMode, Video } from "expo-av";
import WalkingMensVideo from "../../assets/videos/MensRunning.mp4";
import WommenListening from "../../assets/videos/WommenListening.mp4";
import DrBackground from "../../assets/images/DrBackground.png";
import ActivePreview from "../../assets/images/ActivePreview.png";
import GraphBanner from "../../assets/images/GraphBanner.png";
import { PrimaryButton } from "../../components/ui/primaryBtn";
import GetStarted from "../../components/common/GetStarted";
import { OnboardingSvg } from "../../components/icons/onboardingSvg";
import ChallengeChecklist from "../../components/common/ChallengeSteps";

const { height, width } = Dimensions.get("window");

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const videoRef = useRef<Video>(null);
  const videoRef2 = useRef<Video>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexChanged = async (index: number) => {
    setActiveIndex(index);
    if (index === 2) {
      try {
        if (videoRef.current) {
          await videoRef.current.playAsync();
        }
      } catch (error) {
        console.log("Error playing video 1:", error);
      }
    } else if (index === 3) {
      try {
        if (videoRef2.current) {
          await videoRef2.current.playAsync();
        }
      } catch (error) {
        console.log("Error playing video 2:", error);
      }
    }
  };

  return (
    <LinearGradient
      colors={["rgb(0, 0, 0)", "rgb(0, 122, 90)"]}
      start={{ x: 0, y: 0.7 }}
      end={{ x: 0, y: 1.2 }}
      style={{ flex: 1, height: "100%" }}>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View
            className='w-3 h-3 mx-1.5 border border-white rounded-full '
            style={{
              display: activeIndex === 4 ? "none" : "flex",
              marginBottom: Platform.OS === "ios" && height > 800 ? 65 : 0,
            }}
          />
        }
        activeDot={
          <View
            className='w-3 h-3 mx-1.5 bg-[#00ffbb] rounded-full '
            style={{
              display: activeIndex === 4 ? "none" : "flex",
              marginBottom: Platform.OS === "ios" && height > 800 ? 65 : 0,
            }}
          />
        }
        onIndexChanged={handleIndexChanged}
        paginationStyle={{ bottom: "8%" }}>
        {/* Zero Slide */}
        <GetStarted />

        {/* First Slide - How it Works */}
        <View className='flex-1'>
          <SafeAreaView className='flex-1'>
            <ChallengeChecklist
              stepTitle='CONNECT YOUR DEVICE'
              onPress={() => {
                router.push("/(tabs)/home");
              }}
              buttonTitle='CONNECT'
              selectedItem={1}
              isIntro={true}
            />
          </SafeAreaView>
        </View>

        {/* Second Slide - Challenge */}
        <View className='flex-1 bg-black'>
          <Video
            ref={videoRef}
            source={WalkingMensVideo}
            resizeMode={ResizeMode.COVER}
            shouldPlay={activeIndex === 2}
            isLooping
            isMuted
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              transform: [{ translateY: -10 }],
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
            <View className='flex-1 justify-end items-center px-6'>
              <Image
                source={ActivePreview}
                className='w-[205px] h-[186px] absolute'
                style={{
                  top: height < 700 ? height * 0.3 : height * 0.25,
                }}
                resizeMode='contain'
              />

              <View
                className='flex justify-center items-center absolute'
                style={{
                  top: height < 700 ? height * 0.62 : height * 0.5,
                }}>
                <Text className='text-brandprimary font-rift-demi text-4xl'>
                  CHALLENGE YOUR
                </Text>
                <Text className='text-white  -mt-2 font-rift-demi text-4xl mb-2 w-full'>
                  FRIENDS AND CO-WORKERS
                </Text>
                <Text className='text-white font-roboto-medium -mt-2  text-center text-[14px] w-80'>
                  Compete with others in personalized fitness challenges, adding
                  motivation to your workouts.
                </Text>
              </View>
            </View>
          </SafeAreaView>
        </View>

        {/* Third Slide - Health is Wealth */}
        <View className='flex-1'>
          <Video
            ref={videoRef2}
            source={WommenListening}
            resizeMode={ResizeMode.COVER}
            shouldPlay={activeIndex === 3}
            isLooping
            isMuted
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              transform: [{ translateY: 10 }],
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
            <View className='flex-1 justify-end items-center px-6'>
              <Image
                source={GraphBanner}
                className='w-[205px] h-[186px] absolute'
                style={{
                  top: height < 700 ? height * 0.31 : height * 0.27,
                }}
                resizeMode='contain'
              />

              <View
                className='flex justify-center items-center absolute'
                style={{
                  top: height < 700 ? height * 0.6 : height * 0.5,
                }}>
                <Text className='text-[#00ffbb] font-rift-demi text-4xl'>
                  HEALTH
                </Text>
                <Text className='text-white -mt-2 font-rift-demi text-4xl '>
                  IS WEALTH
                </Text>
                <Text className='text-white text-center  font-roboto-medium  text-[14px] font-roboto w-80'>
                  Complete in challenges to earn money.{"\n"}Get healthy and
                  stay healthy.
                </Text>
              </View>
            </View>
          </SafeAreaView>
        </View>

        {/* Fourth Slide - Dr. Brett Osborn */}
        <View className='flex-1'>
          <ImageBackground
            source={DrBackground}
            className='flex-1 w-full h-full'
            resizeMode='cover'
            style={{
              transform: [{ translateY: -2 }],
            }}>
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
              <View className='flex-1 justify-end items-center px-6'>
                <View
                  className='absolute'
                  style={{
                    top: height < 700 ? height * 0.3 : height * 0.25,
                    left: width * 0.05,
                  }}>
                  <OnboardingSvg
                    background='#00FFBB'
                    height={height * 0.18}
                    width={width * 0.36}
                    textFill='#000'
                  />
                </View>

                <View
                  className='flex justify-center items-center absolute px-6'
                  style={{
                    top: height < 700 ? height * 0.62 : height * 0.5,
                  }}>
                  <Text
                    className='text-[#00ffbb] font-rift-demi'
                    style={{ fontSize: height * 0.05 }}>
                    INSIGHTS BY
                  </Text>
                  <Text
                    className='text-white font-rift-demi text-center mb-2'
                    style={{
                      fontSize: height * 0.05,
                      marginTop: -height * 0.01,
                    }}>
                    DR. BRETT OSBORN
                  </Text>
                  <Text
                    className='text-white font-roboto-medium text-center'
                    style={{ fontSize: height * 0.018 }}>
                    A pioneer in longevity medicine and{"\n"}neurosurgery
                  </Text>
                </View>
              </View>
            </SafeAreaView>
          </ImageBackground>
        </View>
      </Swiper>
      <View
        className='absolute w-full items-center'
        style={{
          display: activeIndex === 4 ? "flex" : "none",
          bottom: Platform.OS === "ios" && height > 800 ? "12%" : "5%",
        }}>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/home")}
          className='bg-brandprimary w-[280px] h-[56px] rounded-full shadow-sm flex-row items-center justify-center'>
          <Text className='text-black font-montserrat font-bold text-center uppercase'>
            GET STARTED
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style='light' />
    </LinearGradient>
  );
};

export default Welcome;
