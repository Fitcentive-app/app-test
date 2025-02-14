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
import Trophy from "../assets/images/sliders-icon/trophy.svg";
import FIcon from "../assets/images/sliders-icon/f-icon.svg";
import CIcon from "../assets/images/sliders-icon/c-icon.svg";
import GArrrow from "../assets/images/sliders-icon/green-arrow.svg";
import GRightArrrow from "../assets/images/sliders-icon/green-right-arrow.svg";
import { Svg, Defs, RadialGradient, Circle, Stop } from "react-native-svg";

export const ImprovementSlider = () => {
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
        {/* IMPROVEMENT */}
        <View style={styles.container}>
          <Text style={styles.headerText}>IMPROVEMENT</Text>
          <LinearGradient
            colors={["#393939", "#393939", "#707070"]}
            style={styles.linearView}
          >
            <View style={styles.subContainer}>
              <Text style={styles.topHeader}>
                <Text style={styles.greenText}>ELLIS OSBORN</Text> FINISHED HIS
                FIRST CHALLENGE
              </Text>
              <LinearGradient
                colors={["#008360", "#00FFBB", "#C7FFF0", "#00FFBB", "#008360"]}
                style={styles.roundView}
              >
                <View style={styles.subRoundView}>
                  <Svg height="200" width="200">
                    <Defs>
                      <RadialGradient
                        id="blackRadial"
                        cx="50%"
                        cy="50%"
                        r="50%"
                      >
                        <Stop offset="60%" stopColor="black" stopOpacity="1" />
                        <Stop offset="100%" stopColor="black" stopOpacity="0" />
                      </RadialGradient>
                    </Defs>
                    <Circle
                      cx="100"
                      cy="100"
                      r="100"
                      fill="url(#blackRadial)"
                    />
                  </Svg>
                  <View style={styles.textView}>
                    <Text style={styles.text1}>I FINISHED MY</Text>
                    <Text style={styles.text2}>FIRST</Text>
                    <Text style={styles.text3}>FITCENTIVE CHALlENGE</Text>
                    <Trophy />
                  </View>
                </View>
              </LinearGradient>
            </View>
            <View style={styles.halfView}>
              <View style={styles.subHalfView}>
                <LinearGradient
                  colors={[
                    "#008360",
                    "#00FFBB",
                    "#C7FFF0",
                    "#00FFBB",
                    "#008360",
                  ]}
                  style={styles.imageRoundView}
                >
                  <View style={styles.imageView}>
                    <Image
                      source={{
                        uri: "https://s3-alpha-sig.figma.com/img/a16b/b3cc/89541ce3c27b79db09431b7accb58abc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mwCpG-ucj1HL2yJgPgyxabSiDeD57GgStzceUIdM4hEj47HsN2dX12oR1QhzRHW4O7D1gR~wCzo4vqE2fztQseoSy0RYcRsT2TtV9GjFjE-9XTay8blC6THhO1eC7O6UtoNLVUtKkhHiG0~EWTU2KnsCq9jdRgQes4oj6Q85QJYE427vyndsRqM6vCOYTTAK4fLJ5OOCIPlQPPns77SGTCIXV1YYkQKiJHP1q99ot4plxLGy7Fot~m4D-ddbXfCOKQUUVpMtt0y372Uqf-nQN98Ce81b3YwVmgp6OkU7mr1i-7juSP1sc0iktLqjsi2Eiv4iS4s3BjFiUck04ts2uQ__",
                      }}
                      resizeMode="stretch"
                      style={styles.image}
                    />
                  </View>
                </LinearGradient>
              </View>
            </View>
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
          </LinearGradient>
        </View>
        {/* 2rd Slide */}
        <View style={styles.container}>
          <Text style={styles.headerText}>CHALLENGE MONEY</Text>
          <LinearGradient
            colors={["#393939", "#393939", "#707070"]}
            style={styles.linearView}
          >
            <View style={styles.subContainer}>
              <Text style={styles.topHeader}>
                <Text style={styles.greenText}>ELLIS OSBORN</Text> IMPROVED BY
                INVESTING IN HEALTH
              </Text>
              <LinearGradient
                colors={["#008360", "#00FFBB", "#C7FFF0", "#00FFBB", "#008360"]}
                style={styles.roundView}
              >
                <View style={styles.subRoundView}>
                  <Svg height="200" width="200">
                    <Defs>
                      <RadialGradient
                        id="blackRadial"
                        cx="50%"
                        cy="50%"
                        r="50%"
                      >
                        <Stop offset="60%" stopColor="black" stopOpacity="1" />
                        <Stop offset="100%" stopColor="black" stopOpacity="0" />
                      </RadialGradient>
                    </Defs>
                    <Circle
                      cx="100"
                      cy="100"
                      r="100"
                      fill="url(#blackRadial)"
                    />
                  </Svg>
                  <View style={{ position: "absolute", bottom: 0, left: 4 }}>
                    <GRightArrrow />
                    <View
                      style={{
                        width: 185,
                        flexDirection: "row",
                        top: -85,
                        marginLeft: -8,
                        justifyContent: "center",
                        position: "absolute",
                      }}
                    >
                      <Text style={styles.priceText}>2</Text>
                      <Text style={styles.dollorText}>%</Text>
                      <View style={{ marginTop: 10, marginLeft: 4 }}>
                        <Text style={styles.betterText}>BETTER</Text>
                        <Text style={styles.betterText}>SLEEP</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
            <View style={styles.halfView}>
              <View style={styles.subHalfView}>
                <LinearGradient
                  colors={[
                    "#008360",
                    "#00FFBB",
                    "#C7FFF0",
                    "#00FFBB",
                    "#008360",
                  ]}
                  style={styles.imageRoundView}
                >
                  <View style={styles.imageView}>
                    <Image
                      source={{
                        uri: "https://s3-alpha-sig.figma.com/img/a16b/b3cc/89541ce3c27b79db09431b7accb58abc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mwCpG-ucj1HL2yJgPgyxabSiDeD57GgStzceUIdM4hEj47HsN2dX12oR1QhzRHW4O7D1gR~wCzo4vqE2fztQseoSy0RYcRsT2TtV9GjFjE-9XTay8blC6THhO1eC7O6UtoNLVUtKkhHiG0~EWTU2KnsCq9jdRgQes4oj6Q85QJYE427vyndsRqM6vCOYTTAK4fLJ5OOCIPlQPPns77SGTCIXV1YYkQKiJHP1q99ot4plxLGy7Fot~m4D-ddbXfCOKQUUVpMtt0y372Uqf-nQN98Ce81b3YwVmgp6OkU7mr1i-7juSP1sc0iktLqjsi2Eiv4iS4s3BjFiUck04ts2uQ__",
                      }}
                      resizeMode="stretch"
                      style={styles.image}
                    />
                  </View>
                </LinearGradient>
              </View>
            </View>
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
          </LinearGradient>
        </View>
        {/* 3rd Slide */}
        <View style={styles.container}>
          <Text style={styles.headerText}>CHALLENGE MONEY</Text>
          <LinearGradient
            colors={["#393939", "#393939", "#707070"]}
            style={styles.linearView}
          >
            <View style={styles.subContainer}>
              <Text style={styles.topHeader}>
                <Text style={styles.greenText}>ELLIS OSBORN</Text> EARNED MONEY
                INVESTING IN HIS HEALTH
              </Text>
              <LinearGradient
                colors={["#008360", "#00FFBB", "#C7FFF0", "#00FFBB", "#008360"]}
                style={styles.roundView}
              >
                <View style={styles.subRoundView}>
                  <Svg height="200" width="200">
                    <Defs>
                      <RadialGradient
                        id="blackRadial"
                        cx="50%"
                        cy="50%"
                        r="50%"
                      >
                        <Stop offset="60%" stopColor="black" stopOpacity="1" />
                        <Stop offset="100%" stopColor="black" stopOpacity="0" />
                      </RadialGradient>
                    </Defs>
                    <Circle
                      cx="100"
                      cy="100"
                      r="100"
                      fill="url(#blackRadial)"
                    />
                  </Svg>
                  <View style={{ position: "absolute", bottom: 0, left: 4 }}>
                    <GArrrow />
                    <View
                      style={{
                        width: 185,
                        flexDirection: "row",
                        top: -85,
                        justifyContent: "center",
                        position: "absolute",
                      }}
                    >
                      <Text style={styles.dollorText}>$</Text>
                      <View>
                        <Text style={styles.priceText}>25</Text>
                        <Text style={styles.dateText}>DEC 24, 2024</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
            <View style={styles.halfView}>
              <View style={styles.subHalfView}>
                <LinearGradient
                  colors={[
                    "#008360",
                    "#00FFBB",
                    "#C7FFF0",
                    "#00FFBB",
                    "#008360",
                  ]}
                  style={styles.imageRoundView}
                >
                  <View style={styles.imageView}>
                    <Image
                      source={{
                        uri: "https://s3-alpha-sig.figma.com/img/a16b/b3cc/89541ce3c27b79db09431b7accb58abc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mwCpG-ucj1HL2yJgPgyxabSiDeD57GgStzceUIdM4hEj47HsN2dX12oR1QhzRHW4O7D1gR~wCzo4vqE2fztQseoSy0RYcRsT2TtV9GjFjE-9XTay8blC6THhO1eC7O6UtoNLVUtKkhHiG0~EWTU2KnsCq9jdRgQes4oj6Q85QJYE427vyndsRqM6vCOYTTAK4fLJ5OOCIPlQPPns77SGTCIXV1YYkQKiJHP1q99ot4plxLGy7Fot~m4D-ddbXfCOKQUUVpMtt0y372Uqf-nQN98Ce81b3YwVmgp6OkU7mr1i-7juSP1sc0iktLqjsi2Eiv4iS4s3BjFiUck04ts2uQ__",
                      }}
                      resizeMode="stretch"
                      style={styles.image}
                    />
                  </View>
                </LinearGradient>
              </View>
            </View>
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
          </LinearGradient>
        </View>
        {/* 4th Slide */}
        <View style={styles.container}>
          <Text style={styles.headerText}>TOTAL MONEY EARNED</Text>
          <LinearGradient
            colors={["#393939", "#393939", "#707070"]}
            style={styles.linearView}
          >
            <View style={styles.subContainer}>
              <Text style={styles.topHeader}>
                <Text style={styles.greenText}>ELLIS OSBORN</Text> EARNED MONEY
                INVESTING IN HIS HEALTH
              </Text>
              <LinearGradient
                colors={["#008360", "#00FFBB", "#C7FFF0", "#00FFBB", "#008360"]}
                style={styles.roundView}
              >
                <View style={styles.subRoundView}>
                  <Svg height="200" width="200">
                    <Defs>
                      <RadialGradient
                        id="blackRadial"
                        cx="50%"
                        cy="50%"
                        r="50%"
                      >
                        <Stop offset="60%" stopColor="black" stopOpacity="1" />
                        <Stop offset="100%" stopColor="black" stopOpacity="0" />
                      </RadialGradient>
                    </Defs>
                    <Circle
                      cx="100"
                      cy="100"
                      r="100"
                      fill="url(#blackRadial)"
                    />
                  </Svg>
                  <View style={{ position: "absolute", bottom: 0, left: 4 }}>
                    <GArrrow />
                    <View
                      style={{
                        width: 185,
                        flexDirection: "row",
                        top: -85,
                        justifyContent: "center",
                        position: "absolute",
                      }}
                    >
                      <Text style={styles.dollorText}>$</Text>
                      <View>
                        <Text style={styles.priceText}>225</Text>
                        <Text style={styles.dateText}>LIFETIME EARNINGS</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
            <View style={styles.halfView}>
              <View style={styles.subHalfView}>
                <LinearGradient
                  colors={[
                    "#008360",
                    "#00FFBB",
                    "#C7FFF0",
                    "#00FFBB",
                    "#008360",
                  ]}
                  style={styles.imageRoundView}
                >
                  <View style={styles.imageView}>
                    <Image
                      source={{
                        uri: "https://s3-alpha-sig.figma.com/img/a16b/b3cc/89541ce3c27b79db09431b7accb58abc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mwCpG-ucj1HL2yJgPgyxabSiDeD57GgStzceUIdM4hEj47HsN2dX12oR1QhzRHW4O7D1gR~wCzo4vqE2fztQseoSy0RYcRsT2TtV9GjFjE-9XTay8blC6THhO1eC7O6UtoNLVUtKkhHiG0~EWTU2KnsCq9jdRgQes4oj6Q85QJYE427vyndsRqM6vCOYTTAK4fLJ5OOCIPlQPPns77SGTCIXV1YYkQKiJHP1q99ot4plxLGy7Fot~m4D-ddbXfCOKQUUVpMtt0y372Uqf-nQN98Ce81b3YwVmgp6OkU7mr1i-7juSP1sc0iktLqjsi2Eiv4iS4s3BjFiUck04ts2uQ__",
                      }}
                      resizeMode="stretch"
                      style={styles.image}
                    />
                  </View>
                </LinearGradient>
              </View>
            </View>
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
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomLeftRadius: 140,
      borderBottomRightRadius: 140,
      alignItems: "center",
    },
    topHeader: {
      fontSize: 28,
      fontFamily: "RiftSoft-Bold",
      color: "#FFFFFF",
      textAlign: "center",
      marginHorizontal: 20,
      marginTop: 16,
      paddingVertical: 10,
      lineHeight: 26,
    },
    greenText: {
      color: "#00FFBB",
    },
    roundView: {
      height: 237,
      width: 237,
      borderRadius: 237,
      position: "absolute",
      bottom: 20,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "#00FFBB",
    },
    subRoundView: {
      height: 200,
      width: 200,
      borderRadius: 193,
      borderWidth: 4,
      borderColor: "#232323",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#00A77B",
      overflow: "hidden",
    },
    priceText: {
      color: "#FFFFFF",
      fontFamily: "RiftSoft-Bold",
      fontSize: 110,
      textShadowColor: "#000",
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 5,
    },
    dollorText: {
      color: "#FFFFFF",
      fontFamily: "RiftSoft-Bold",
      fontSize: 50,
      top: 20,
      textShadowColor: "#000",
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 5,
    },
    betterText: {
      color: "#FFFFFF",
      fontFamily: "RiftSoft-Bold",
      fontSize: 16,
      top: 20,
      textShadowColor: "#000",
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 5,
    },
    textView: {
      position: "absolute",
      alignItems: "center",
    },
    text1: {
      color: "#00FFBB",
      fontFamily: "RiftSoft-Demi",
      fontSize: 18,
      marginTop: 8,
      textShadowColor: "#000",
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 5,
    },
    text2: {
      color: "#FFFFFF",
      fontFamily: "RiftSoft-Bold",
      fontSize: 75,
      marginVertical: -13,
      textShadowColor: "#000",
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 5,
    },
    dateText: {
      color: "#FFFFFF",
      fontFamily: "RiftSoft-Demi",
      fontSize: 18,
      marginTop: -22,
      marginLeft: 4,
      textShadowColor: "#000",
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 5,
    },
    text3: {
      color: "#FFFFFF",
      fontFamily: "RiftSoft-Demi",
      marginBottom: 8,
      fontSize: 18,
      textShadowColor: "#000",
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 5,
    },
    halfView: {
      width: 86,
      height: 40,
      backgroundColor: "#7A7777",
      borderTopLeftRadius: 44,
      borderTopRightRadius: 44,
      bottom: 75,
      right: -2,
      position: "absolute",
      transform: [{ rotate: "134deg" }],
    },
    subHalfView: {
      width: 82,
      height: 40,
      backgroundColor: "#1A1A1A",
      borderTopLeftRadius: 44,
      borderTopRightRadius: 44,
      bottom: 0,
      top: 2,
      right: 2,
      position: "absolute",
    },
    imageRoundView: {
      height: 65,
      width: 65,
      borderRadius: 65,
      backgroundColor: "red",
      position: "absolute",
      left: 8,
      top: 18,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "#00FFBB",
    },
    imageView: {
      height: 51,
      width: 51,
      borderRadius: 51,
      borderWidth: 3,
      borderColor: "#1A1A1A",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      height: 45,
      width: 45,
      borderRadius: 45,
      transform: [{ rotate: "220deg" }],
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
