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
import FIcon from "../assets/images/share-slider/f-icon.svg";
import CIcon from "../assets/images/share-slider/c-icon.svg";

const LeaderBoard = () => {
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

                    <View style={styles.topView}>
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
                    <View style={[styles.bottomViewLine, { marginLeft: 22 }]} />

                    <View style={[styles.topView, { marginLeft: 65 }]}>
                    <Text style={styles.numberTop}>13</Text>
                      <View style={styles.subTopView}>
                        <View style={styles.topLine} />
                        <View style={styles.topRoundView}>
                          <Text style={styles.topText}>78</Text>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.subBottomView, { marginLeft: -41 }]}>
                      <Text style={styles.bottomText}>BRETT OSBORN</Text>
                    </View>
                  </>
                  <>
                    <View style={[styles.bottomViewLine, { marginLeft: 21 }]} />

                    <View style={[styles.topView, { marginLeft: 130 }]}>
                    <Text style={styles.numberTop}>32</Text>
                      <View style={styles.subTopView}>
                        <View style={styles.topLine} />
                        <View style={styles.topRoundView}>
                          <Text style={styles.topText}>65</Text>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.subBottomView, { marginLeft: -41 }]}>
                      <Text style={styles.bottomText}>ELLIS OSBORN</Text>
                    </View>
                  </>
                  <>
                    <View style={[styles.bottomViewLine, { marginLeft: 20 }]} />

                    <View style={[styles.topView, { marginLeft: 195 }]}>
                    <Text style={styles.numberTop}>48</Text>
                      <View style={styles.subTopView}>
                        <View style={styles.topLine} />
                        <View style={styles.topRoundView}>
                          <Text style={styles.topText}>61</Text>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.subBottomView, { marginLeft: -41 }]}>
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
                <CIcon />
                <Text style={styles.leftText}>FITCENTIVE.app</Text>
              </View>
              <Text style={styles.rightText}>HEALTH IS WEALTH</Text>
            </View>
          </LinearGradient>
        </View>
        <View style={{ flex: 1, backgroundColor: "green" }}></View>
      </Swiper>
    </SafeAreaPage>
  );
};

export default LeaderBoard;

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
      justifyContent: "center",
      marginTop: -50,
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
    roundView: {
      height: 237,
      width: 237,
      borderRadius: 237,
      position: "absolute",
      bottom: 22,
      alignItems: "center",
      justifyContent: "center",
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
      marginHorizontal: 18,
    },
    bottomViewLine: {
      height: 140,
      width: 44,
      marginLeft: 40,
      marginTop: 60,
      borderWidth: 0.75,
      borderColor: "#8E8D8D",
      borderStyle: "dashed",
      transform: [{ rotate: "138deg" }],
    },
    topView: {
      height: 80,
      width: 56,
      borderWidth: 0.75,
      borderColor: "#8E8D8D",
      borderStyle: "dashed",
      position: "absolute",
      bottom: 112,
    },
    numberTop: {
      marginTop: -20,
      color: "#FFFFFF",
      fontSize: 18,
      fontFamily: "RiftSoft-Medium",
      textAlign: "center",
    },
    subTopView: {
      height: 82,
      width: 54.5,
      backgroundColor: "#232323",
      bottom: -1,
      position: "absolute",
    },
    topLine: {
      height: 15,
      backgroundColor: "#1A1A1A",
      borderBottomWidth: 1,
      borderBottomColor: "#8E8D8D",
    },
    topRoundView: {
      height: 31,
      width: 31,
      borderRadius: 31,
      backgroundColor: "#1A1A1A",
      alignSelf: "center",
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    topText: {
      color: "#E8E8E8",
      fontSize: 20,
      fontFamily: "RiftSoft-Bold",
    },
    subBottomView: {
      height: 140,
      width: 42,
      marginLeft: -41,
      transform: [{ rotate: "138deg" }],
      marginTop: 62,
      backgroundColor: "#232323",
    },
    bottomText: {
      transform: [{ rotate: "270deg" }],
      width: 150,
      marginLeft: -54,
      top: 35,
      color: "#A6A6A6",
      fontSize: 12,
      fontFamily: "RiftSoft-Bold",
    },
  });
