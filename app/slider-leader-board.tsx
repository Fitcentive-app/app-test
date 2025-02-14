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
import Svg, { Polygon } from "react-native-svg";

export const LeaderBoard = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const styles = createStyles();

  const { height } = Dimensions.get("window");

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
        {/* LEADERBOARD */}
        <View style={styles.container}>
          <Text style={styles.headerText}>LEADERBOARD</Text>
          <LinearGradient
            colors={["#393939", "#393939", "#707070"]}
            style={styles.linearView}
          >
            <View style={styles.borderContainer}>
              <View style={styles.subContainer}>
                <Text style={styles.topHeader}>
                  <Text style={styles.greenText}>ELLIS OSBORN</Text> EARNED 24TH
                  PLACE OUT OF 125 CHALLENGERS
                </Text>
                <Text style={styles.text1}>DEC 24, 2024</Text>
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
                  <Image
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/a16b/b3cc/89541ce3c27b79db09431b7accb58abc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mwCpG-ucj1HL2yJgPgyxabSiDeD57GgStzceUIdM4hEj47HsN2dX12oR1QhzRHW4O7D1gR~wCzo4vqE2fztQseoSy0RYcRsT2TtV9GjFjE-9XTay8blC6THhO1eC7O6UtoNLVUtKkhHiG0~EWTU2KnsCq9jdRgQes4oj6Q85QJYE427vyndsRqM6vCOYTTAK4fLJ5OOCIPlQPPns77SGTCIXV1YYkQKiJHP1q99ot4plxLGy7Fot~m4D-ddbXfCOKQUUVpMtt0y372Uqf-nQN98Ce81b3YwVmgp6OkU7mr1i-7juSP1sc0iktLqjsi2Eiv4iS4s3BjFiUck04ts2uQ__",
                    }}
                    resizeMode="stretch"
                    style={styles.image}
                  />
                </LinearGradient>
                <View style={styles.linesMainView}>
                  <>
                    <View style={styles.bottomViewLine} />

                    <View style={[styles.topView, { marginLeft: -2 }]}>
                      <Text style={styles.numberTop}>01</Text>
                      <View style={styles.subTopView}>
                        <View style={styles.topLine} />
                        <View style={styles.topRoundView}>
                          <Text style={styles.topText}>85</Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.subBottomView}>
                      <Text style={styles.bottomText}>STEPHEN GATES</Text>
                    </View>
                  </>
                  <>
                    <View
                      style={[
                        styles.bottomViewLine,
                        { marginLeft: 22, backgroundColor: "#000" },
                      ]}
                    />

                    <View style={[styles.topView, { marginLeft: 53 }]}>
                      <Text style={styles.numberTop}>13</Text>
                      <View
                        style={[styles.subTopView, { backgroundColor: "#000" }]}
                      >
                        <View style={styles.topLine} />
                        <View
                          style={[
                            styles.topRoundView,
                            { backgroundColor: "#393939" },
                          ]}
                        >
                          <Text style={styles.topText}>78</Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.subBottomView,
                        { backgroundColor: "#000" },
                      ]}
                    >
                      <Text style={styles.bottomText}>BRETT OSBORN</Text>
                    </View>
                  </>
                  <>
                    <View
                      style={[
                        styles.bottomViewLine,
                        { marginLeft: 21, backgroundColor: "#008360" },
                      ]}
                    />

                    <View style={[styles.topView, { marginLeft: 106 }]}>
                      <Text
                        style={[
                          styles.numberTop,
                          { marginTop: -32, fontSize: 30, color: "#00FFBB" },
                        ]}
                      >
                        3<Text style={styles.numberTopRD}>RD</Text>
                      </Text>
                      <View
                        style={[
                          styles.subTopView,
                          { backgroundColor: "#008360" },
                        ]}
                      >
                        <LinearGradient
                          colors={["#232323", "#008360"]}
                          style={[styles.linearTopLine, {}]}
                        />
                        <View style={{ alignSelf: "center", marginTop: -8 }}>
                          <Svg height="55" width="50" viewBox="0 0 100 100">
                            <Polygon
                              points="50,15 61,38 85,38 66,58 71,86 50,70 29,86 34,58 15,38 39,38"
                              fill="#00FFBB"
                              stroke="black"
                              strokeWidth="1"
                            />
                          </Svg>
                          <Text
                            style={[
                              styles.topText,
                              {
                                position: "absolute",
                                width: 50,
                                top: 19,
                                color: "#000",
                                fontSize: 16,
                                textAlign: "center",
                              },
                            ]}
                          >
                            74
                          </Text>
                        </View>
                      </View>
                    </View>
                    <LinearGradient
                      colors={["#232323", "#008360", "#008360"]}
                      style={styles.subBottomView}
                    >
                      <Text
                        style={[
                          styles.bottomText,
                          { color: "#FFFFFF", fontSize: 16 },
                        ]}
                      >
                        ELLIS OSBORN
                      </Text>
                    </LinearGradient>
                  </>
                  <>
                    <View
                      style={[
                        styles.bottomViewLine,
                        { marginLeft: 20, backgroundColor: "#000" },
                      ]}
                    />

                    <View style={[styles.topView, { marginLeft: 160 }]}>
                      <Text style={styles.numberTop}>48</Text>
                      <View
                        style={[styles.subTopView, { backgroundColor: "#000" }]}
                      >
                        <View style={styles.topLine} />
                        <View
                          style={[
                            styles.topRoundView,
                            { backgroundColor: "#393939" },
                          ]}
                        >
                          <Text style={styles.topText}>65</Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.subBottomView,
                        { backgroundColor: "#000" },
                      ]}
                    >
                      <Text style={styles.bottomText}>BRETT OSBORN</Text>
                    </View>
                  </>
                  <>
                    <View style={[styles.bottomViewLine, { marginLeft: 20 }]} />

                    <View style={[styles.topView, { marginLeft: 213 }]}>
                      <Text style={styles.numberTop}>48</Text>
                      <View style={styles.subTopView}>
                        <View style={styles.topLine} />
                        <View style={styles.topRoundView}>
                          <Text style={styles.topText}>61</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.subBottomView}>
                      <Text style={styles.bottomText}>BRETT OSBORN</Text>
                    </View>
                  </>
                </View>
                <View
                  style={{
                    height: 40,
                    width: 300,
                    backgroundColor: "#1A1A1A",
                    position: "absolute",
                    bottom: 0,
                  }}
                ></View>
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
        {/* LEADERBOARD */}
        <View style={styles.container}>
          <Text style={styles.headerText}>LEADERBOARD</Text>
          <LinearGradient
            colors={["#393939", "#393939", "#707070"]}
            style={styles.linearView}
          >
            <View style={styles.borderContainer}>
              <View style={styles.subContainer}>
                <Text style={styles.topHeader}>
                  <Text style={styles.greenText}>ELLIS OSBORN</Text> EARNED 2ND
                  PLACE IN HIS WORKOUT CHALLENGE
                </Text>
                <Text style={styles.text1}>DEC 24, 2024</Text>
                <LinearGradient
                  colors={[
                    "#008360",
                    "#00FFBB",
                    "#C7FFF0",
                    "#00FFBB",
                    "#008360",
                  ]}
                  style={styles.imageRoundView2}
                >
                  <Image
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/a16b/b3cc/89541ce3c27b79db09431b7accb58abc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mwCpG-ucj1HL2yJgPgyxabSiDeD57GgStzceUIdM4hEj47HsN2dX12oR1QhzRHW4O7D1gR~wCzo4vqE2fztQseoSy0RYcRsT2TtV9GjFjE-9XTay8blC6THhO1eC7O6UtoNLVUtKkhHiG0~EWTU2KnsCq9jdRgQes4oj6Q85QJYE427vyndsRqM6vCOYTTAK4fLJ5OOCIPlQPPns77SGTCIXV1YYkQKiJHP1q99ot4plxLGy7Fot~m4D-ddbXfCOKQUUVpMtt0y372Uqf-nQN98Ce81b3YwVmgp6OkU7mr1i-7juSP1sc0iktLqjsi2Eiv4iS4s3BjFiUck04ts2uQ__",
                    }}
                    resizeMode="contain"
                    style={styles.image2}
                  />
                </LinearGradient>

                <View
                  style={{
                    width: 284,
                    position: "absolute",
                    bottom: 80,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <LinearGradient
                    colors={["#00FFBB", "#009970"]}
                    style={{ height: 59, width: 82 }}
                  />
                  <View
                    style={{
                      height: 87,
                      width: 47,
                      borderWidth: 4,
                      borderColor: "#8E8D8D",
                    }}
                  />
                  <View
                    style={{
                      height: 33,
                      width: 47,
                      borderWidth: 4,
                      borderColor: "#8E8D8D",
                    }}
                  />
                </View>
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
    borderContainer: {
      height: 370,
      borderWidth: 2,
      borderColor: "#7A7777",
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomLeftRadius: 140,
      borderBottomRightRadius: 140,
    },
    subContainer: {
      height: 366,
      backgroundColor: "#1A1A1A",
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomLeftRadius: 140,
      borderBottomRightRadius: 140,
      overflow: "hidden",
    },
    topHeader: {
      fontSize: 28,
      fontFamily: "RiftSoft-Bold",
      color: "#FFFFFF",
      marginHorizontal: 20,
      marginTop: 16,
      paddingVertical: 10,
      lineHeight: 26,
    },
    greenText: {
      color: "#00FFBB",
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
    },
    circle: {
      width: 140, // Adjust size as needed
      height: 140,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderRadius: 140, // Half of width/height to make it a circle
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 5,
      elevation: 20, // Required for Android shadow
    },
    textView: {
      position: "absolute",
      alignItems: "center",
    },
    text1: {
      color: "#E8E8E8",
      fontFamily: "RiftSoft-Bold",
      fontSize: 16,
      marginTop: -13,
      marginHorizontal: 20,
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
      height: 43,
      width: 43,
      borderRadius: 43,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      borderWidth: 1,
      borderColor: "#00FFBB",
    },
    imageRoundView2: {
      height: 56,
      width: 56,
      borderRadius: 56,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      borderWidth: 1,
      marginRight: 92,
      marginTop: 40,
      borderColor: "#00FFBB",
    },
    imageView: {
      height: 51,
      width: 51,
      borderRadius: 51,
      borderColor: "#1A1A1A",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      height: 39,
      width: 39,
      borderRadius: 39,
    },
    image2: {
      height: 50,
      width: 50,
      borderRadius: 50,
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
    linesMainView: {
      flex: 1,
      flexDirection: "row",
      marginHorizontal: 16,
    },
    topView: {
      height: 58,
      width: 42,
      borderWidth: 0.75,
      borderColor: "#8E8D8D",
      borderStyle: "dashed",
      position: "absolute",
      bottom: 114,
    },
    numberTop: {
      marginTop: -18,
      color: "#FFFFFF",
      fontSize: 14,
      fontFamily: "RiftSoft-Bold",
      textAlign: "center",
    },
    numberTopRD: {
      color: "#00FFBB",
      fontSize: 15,
      fontFamily: "RiftSoft-Bold",
      textAlign: "center",
    },
    subTopView: {
      height: 60,
      width: 40.5,
      backgroundColor: "#232323",
      bottom: -1,
      position: "absolute",
    },
    topLine: {
      height: 10,
      backgroundColor: "#1A1A1A",
      borderBottomWidth: 1,
      borderBottomColor: "#8E8D8D",
    },
    linearTopLine: {
      height: 10,
      borderBottomColor: "#00FFBB",
      borderBottomWidth: 2,
    },
    topRoundView: {
      height: 31,
      width: 31,
      borderRadius: 31,
      backgroundColor: "#1A1A1A",
      alignSelf: "center",
      marginTop: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    topText: {
      color: "#E8E8E8",
      fontSize: 20,
      fontFamily: "RiftSoft-Bold",
    },
    bottomViewLine: {
      height: 140,
      width: 32,
      marginLeft: 40,
      marginTop: 60,
      borderWidth: 0.75,
      borderColor: "#8E8D8D",
      borderStyle: "dashed",
      transform: [{ rotate: "138deg" }],
      backgroundColor: "#232323",
      borderTopRightRadius: 30,
    },
    subBottomView: {
      height: 140,
      width: 30,
      marginLeft: -29,
      transform: [{ rotate: "138deg" }],
      marginTop: 62,
      backgroundColor: "#232323",
      borderRadius: 30,
    },
    bottomText: {
      transform: [{ rotate: "270deg" }],
      width: 150,
      marginLeft: -60,
      top: 35,
      color: "#A6A6A6",
      fontSize: 12,
      fontFamily: "RiftSoft-Bold",
    },
  });
