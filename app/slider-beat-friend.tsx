import SafeAreaPage from "@/components/common/safearea-page";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import FIcon from "../assets/images/sliders-icon/f-icon.svg";
import CIcon from "../assets/images/sliders-icon/c-icon.svg";

export const BeatFriendSlider = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const styles = createStyles();

  const { height, width } = Dimensions.get("window");

  const handleIndexChanged = async (index: number) => {
    setActiveIndex(index);
  };

  return (
    <SafeAreaPage>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <>
            <View
              className="w-3 h-3 mx-1.5 border border-white rounded-full "
              style={{
                marginBottom: Platform.OS === "ios" && height > 800 ? 100 : 0,
              }}
            />
            <TouchableOpacity style={styles.buttonView}>
              <Text style={styles.buttonText}>SHARE</Text>
            </TouchableOpacity>
          </>
        }
        activeDot={
          activeIndex !== 4 ? (
            <View
              className="w-3 h-3 mx-1.5 bg-[#00ffbb] rounded-full "
              style={{
                marginBottom: Platform.OS === "ios" && height > 800 ? 100 : 0,
              }}
            />
          ) : (
            <></>
          )
        }
        onIndexChanged={handleIndexChanged}
      >
        {/* JOIN ME */}
        <View style={styles.container}>
          <Text style={styles.headerText}>JOIN ME</Text>
          <LinearGradient
            colors={["#707070", "#393939", "#393939"]}
            style={styles.linearView}
          >
            <View style={styles.bottomView}>
              <View style={styles.leftTextView}>
                <FIcon />
                <View style={styles.fcView}>
                  <CIcon />
                </View>
                <Text style={styles.leftText}>FITCENTIVE.app</Text>
              </View>
              <Text style={styles.rightText}>HEALTH IS WEALTH</Text>
            </View>
            <View style={styles.subContainer}>
              <LinearGradient
                colors={["#008360","#008360", "#00FFBB","#00FFBB", "#C7FFF0", "#00FFBB", "#008360"]}
                style={styles.roundView}
              >
                <View style={styles.innerBorderView}></View>
                <View style={styles.subRoundView}>
                  <Image
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/a16b/b3cc/89541ce3c27b79db09431b7accb58abc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mwCpG-ucj1HL2yJgPgyxabSiDeD57GgStzceUIdM4hEj47HsN2dX12oR1QhzRHW4O7D1gR~wCzo4vqE2fztQseoSy0RYcRsT2TtV9GjFjE-9XTay8blC6THhO1eC7O6UtoNLVUtKkhHiG0~EWTU2KnsCq9jdRgQes4oj6Q85QJYE427vyndsRqM6vCOYTTAK4fLJ5OOCIPlQPPns77SGTCIXV1YYkQKiJHP1q99ot4plxLGy7Fot~m4D-ddbXfCOKQUUVpMtt0y372Uqf-nQN98Ce81b3YwVmgp6OkU7mr1i-7juSP1sc0iktLqjsi2Eiv4iS4s3BjFiUck04ts2uQ__",
                    }}
                    resizeMode="stretch"
                    style={styles.centerImage}
                  />
                </View>
                <LinearGradient
                  colors={["#008360","#008360", "#00FFBB"]}
                  style={styles.topLabel}
                >
                  <Text style={styles.textLoser}>LOSER</Text>
                </LinearGradient>
              </LinearGradient>
              <Text style={styles.topHeader}>
                I BEAT<Text style={styles.greenText}> ELLIS OSBORN </Text>IN A
                FITCENTIVE CHALLENGE
              </Text>
              <Text style={styles.subText}>
                WANT TO BEAT HIM TOO? JOIN ME NOW ON FITCENTIVE
              </Text>
            </View>
          </LinearGradient>
        </View>
      </Swiper>
    </SafeAreaPage>
  );
};

const createStyles = () =>
  StyleSheet.create({
    buttonView: {
      height: 58,
      width: 135,
      borderRadius: 50,
      backgroundColor: "#00FFBB",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      bottom: 20,
    },
    buttonText: {
      color: "#000",
      fontSize: 15,
      fontFamily: "Montserrat-Medium",
    },

    headerText: {
      color: "#FFFFFF",
      fontSize: 20,
      fontFamily: "RiftSoft-Bold",
      textAlign: "center",
      marginBottom: 20,
    },
    container: {
      flex: 1,
      backgroundColor: "rgba(31, 31, 31, 0.8)",
      paddingTop: 30,
    },
    linearView: {
      marginHorizontal: 45,
      borderRadius: 20,
      padding: 10,
      borderWidth: 2,
      borderColor: "#7A7777",
    },
    subContainer: {
      height: 370,
      borderWidth: 2,
      borderColor: "#7A7777",
      backgroundColor: "#1A1A1A",
      borderTopLeftRadius: 140,
      borderTopRightRadius: 140,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      alignItems: "center",
    },
    topHeader: {
      fontSize: 28,
      fontFamily: "RiftSoft-Bold",
      color: "#FFFFFF",
      textAlign: "center",
      marginHorizontal: 20,
      marginTop: 8,
      paddingVertical: 10,
      lineHeight: 26,
    },
    greenText: {
      color: "#00FFBB",
    },
    subText: {
      fontSize: 16,
      lineHeight: 18,
      marginTop: -8,
      marginHorizontal: 65,
      color: "#CFCFCF",
      textAlign: "center",
      fontFamily: "RiftSoft-Demi",
    },
    roundView: {
      height: 225,
      width: 225,
      borderRadius: 237,
      marginTop: 22,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "#00FFBB",
    },
    innerBorderView: {
      height: 195,
      width: 195,
      borderRadius: 195,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#00FFBB",
    },
    subRoundView: {
      height: 193,
      width: 193,
      borderRadius: 193,
      borderWidth: 4,
      borderColor: "#232323",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#00A77B",
      position: "absolute",
    },
    centerImage: {
      height: "100%",
      width: "100%",
      borderRadius: 193,
    },
    topLabel: {
      width: 70,
      height: 35,
      position: "absolute",
      top: 0,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomWidth: 1,
      borderColor: "#00FFBB",
      alignItems: "center",
      justifyContent: "center",
    },
    textLoser: {
      color: "#FFFFFF",
      fontFamily: "RiftSoft-Demi",
      fontSize: 18,
    },
    textView: {
      position: "absolute",
      alignItems: "center",
    },
    text1: {
      color: "#00FFBB",
      fontFamily: "RiftSoft-Bold",
      fontSize: 18,
      marginTop: 8,
    },
    text2: {
      color: "#FFFFFF",
      fontFamily: "RiftSoft-Bold",
      fontSize: 75,
      marginVertical: -13,
    },
    text3: {
      color: "#FFFFFF",
      fontFamily: "RiftSoft-Bold",
      marginBottom: 8,
      fontSize: 18,
    },
    halfView: {
      width: 94,
      height: 44,
      backgroundColor: "#7A7777",
      borderTopLeftRadius: 44,
      borderTopRightRadius: 44,
      bottom: 60,
      right: 0,
      position: "absolute",
      transform: [{ rotate: "138deg" }],
    },
    subHalfView: {
      width: 90,
      height: 44,
      backgroundColor: "#1A1A1A",
      borderTopLeftRadius: 44,
      borderTopRightRadius: 44,
      bottom: 0,
      top: 2,
      right: 2,
      position: "absolute",
    },
    imageRoundView: {
      height: 58,
      width: 58,
      borderRadius: 58,
      backgroundColor: "red",
      position: "absolute",
      right: 30,
      bottom: 120,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "#00FFBB",
    },
    image: {
      height: 52,
      width: 52,
      borderRadius: 52,
    },
    bottomView: {
      flexDirection: "row",
      marginHorizontal: 11,
      alignItems: "center",
      marginTop: 10,
    },
    leftTextView: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    fcView: { marginTop: 4, marginLeft: -4 },
    leftText: {
      marginLeft: 8,
      fontSize: 18,
      fontFamily: "RiftSoft-Medium",
    },
    rightText: {
      marginLeft: 8,
      fontSize: 18,
      fontFamily: "RiftSoft-Bold",
      color: "#00FFBB",
    },
  });
