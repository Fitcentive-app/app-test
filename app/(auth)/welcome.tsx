import { useRef, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { Video } from "expo-av";
import { onboardingData } from "../../assets/utils/json";
import { onboardBackground } from "@/assets/images";
import SafeAreaPage from "@/components/common/safearea-page";

const { height, width } = Dimensions.get("window");

type OnboardingItem = {
  titleGreen: string;
  titleWhite: string;
  description: string;
  bgImage: any;
  topImage: any | null;
};

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const videoRef = useRef<Video>(null);
  const videoRef2 = useRef<Video>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const styles = createStyles();

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

  const clickOnStarted = () => {
    // router.push("/(tabs)/home");
  };

  const renderItem = (item: OnboardingItem, index: number) => (
    <ImageBackground
      style={styles.itemView}
      source={onboardBackground}
      resizeMode="stretch"
      key={`ImageBackground-${index}`}
    >
      <ImageBackground
        style={styles.innerImage}
        imageStyle={
          index === 1
            ? styles.innerImage1
            : index === 2
            ? styles.innerImage2
            : index === 3
            ? styles.innerImage3
            : {}
        }
        resizeMode="contain"
        source={index === 2 || index === 3 ? item?.topImage : item?.bgImage}
      >
        {item?.topImage && (
          <Image
            style={[
              styles.topImage,
              index === 2
                ? styles.topImage2
                : index === 3
                ? styles.topImage3
                : {},
            ]}
            source={index === 2 || index === 3 ? item?.bgImage : item?.topImage}
          />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.titleGreen}>{item?.titleGreen}</Text>
          <Text style={styles.titleWhite}>{item?.titleWhite}</Text>
          <Text style={styles.description}>{item?.description}</Text>
        </View>
      </ImageBackground>
    </ImageBackground>
  );

  return (
    <SafeAreaPage>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          activeIndex !== 4 ? (
            <View
              className="w-3 h-3 mx-1.5 border border-white rounded-full "
              style={{
                marginBottom: Platform.OS === "ios" && height > 800 ? 30 : 0,
              }}
            />
          ) : (
            <TouchableOpacity
              style={styles.buttonView}
              onPress={clickOnStarted}
            >
              <Text style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>
          )
        }
        activeDot={
          activeIndex !== 4 ? (
            <View
              className="w-3 h-3 mx-1.5 bg-[#00ffbb] rounded-full "
              style={{
                marginBottom: Platform.OS === "ios" && height > 800 ? 30 : 0,
              }}
            />
          ) : (
            <></>
          )
        }
        onIndexChanged={handleIndexChanged}
      >
        {onboardingData.map((item, index) => {
          return renderItem(item, index);
        })}
      </Swiper>
    </SafeAreaPage>
  );
};

const createStyles = () =>
  StyleSheet.create({
    container: { flex: 1 },
    itemView: {
      flex: 1,
      width,
      justifyContent: "center",
      marginTop: 50,
      marginBottom: 90,
    },
    innerImage: {
      height: "100%",
      width: "100%",
      alignItems: "center",
    },
    innerImage1: { paddingHorizontal: 30, paddingBottom: 130 },
    innerImage2: {
      paddingHorizontal: 70,
      paddingBottom: 310,
    },
    innerImage3: {
      paddingHorizontal: 70,
      paddingBottom: 140,
    },
    topImage: {
      marginTop: -20,
    },
    topImage2: {
      position: "absolute",
      bottom: 160,
    },
    topImage3: {
      position: "absolute",
      bottom: 190,
    },
    textContainer: {
      position: "absolute",
      bottom: 20,
      alignItems: "center",
    },
    titleGreen: {
      color: "#00FFBB",
      textAlign: "center",
      fontFamily: "RiftSoft-Bold",
      fontSize: 36,
    },
    titleWhite: {
      color: "#fff",
      textAlign: "center",
      fontFamily: "RiftSoft-Bold",
      fontSize: 36,
      marginTop: -4,
    },
    description: {
      color: "#fff",
      textAlign: "center",
      paddingHorizontal: 60,
      marginTop: 5,
      fontFamily: "Roboto-Medium",
      fontSize: 14,
      lineHeight: 18,
    },
    buttonView: {
      height: 58,
      width: 293,
      borderRadius: 50,
      backgroundColor: "#00FFBB",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      bottom: 0,
    },
    buttonText: {
      color: "#000",
    },
    dotMainView: {
      position: "absolute",
      width,
      bottom: -50,
      flexDirection: "row",
      justifyContent: "center",
      gap: 10,
    },
    dotView: {
      height: 12,
      width: 12,
      borderRadius: 10,
    },
  });

export default Welcome;
