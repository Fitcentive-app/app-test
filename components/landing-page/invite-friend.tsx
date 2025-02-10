import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Sleep from "../../assets/images/landing-page/sleep.svg";
import BottomSleep from "../../assets/images/landing-page/bottom-sleep.svg";
import Copy from "../../assets/images/landing-page/copy.svg";
import { LinearGradient } from "expo-linear-gradient";
import {
  earning,
  girlImage,
  headerSlider,
  logo,
  pending,
  qrCode,
} from "../../assets/images";
import { ScreenWidth } from "@/utils";

export const InviteFriend = () => {
  const styles = createStyles();
  const [firstTimeUser] = useState(true);

  return (
    <ScrollView style={styles.scrollView}>
      {firstTimeUser ? (
        <LinearGradient
          colors={["#393939", "#393939", "#646464"]}
          style={styles.promoCard}
        >
          <Image
            source={headerSlider}
            style={styles.imageHeaderSlider}
            resizeMode="stretch"
          />
          <View style={styles.lineView} />
          <View style={styles.promoIcon}>
            <Sleep />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.promoSubtitle}>LIMITED TIME OFFER</Text>
            <Text style={styles.promoTitle}>
              WANT TO GET 20 FREE FITCENTIVE DOLLARS FOR EVERY REFERRAL?
            </Text>
            <TouchableOpacity style={styles.copyButton}>
              <Text style={styles.copyButtonText}>COPY REFERRAL LINK</Text>
              <Copy />
            </TouchableOpacity>

            {/* Share Buttons */}
            <View style={styles.shareContainer}>
              <TouchableOpacity style={styles.shareButton}>
                <Feather name="message-circle" size={20} color={"#00FFBB"} />
                <Text style={styles.shareButtonText}>TEXT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.shareButton, { flex: 1.5 }]}>
                <FontAwesome name="whatsapp" size={20} color={"#00FFBB"} />
                <Text style={styles.shareButtonText}>WHATSAPP</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareButton}>
                <MaterialIcons name="ios-share" size={20} color={"#00FFBB"} />
                <Text style={styles.shareButtonText}>SHARE</Text>
              </TouchableOpacity>
            </View>
            {/* QR Code */}
            <View style={styles.qrContainer}>
              <Image source={qrCode} style={styles.qrCode} />
              <Image source={logo} style={styles.qrLogo} />
            </View>

            {/* Reward Info Cards */}
            <View style={styles.rewardCard}>
              <View style={styles.rewardIcon}>
                <Ionicons name="gift-outline" size={43} color={"#00FFBB"} />
              </View>
              <View style={styles.rewardContent}>
                <Text style={styles.rewardLabel}>YOU GET</Text>
                <Text style={styles.rewardAmount}>
                  20 FREE FITCENTIVE DOLLARS
                </Text>
                <Text style={styles.rewardDescription}>
                  For each friend you successfully invite to join the app and
                  fund their wallet, you will receive 20 Fitcentive dollars.
                </Text>
              </View>
            </View>

            <View style={styles.rewardCard}>
              <View style={styles.rewardIcon}>
                <Ionicons name="mail-outline" size={43} color={"#00FFBB"} />
              </View>
              <View style={styles.rewardContent}>
                <Text style={styles.rewardLabel}>YOUR FRIENDS GET</Text>
                <Text style={styles.rewardAmount}>
                  10 FREE FITCENTIVE DOLLARS
                </Text>
                <Text style={styles.rewardDescription}>
                  Once your friend funds their Fitcentive wallet, they will get
                  10 free Fitcentive dollars instantly.
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      ) : (
        <>
          <LinearGradient
            colors={["#393939", "#393939", "#646464"]}
            style={styles.promoCard2}
          >
            <View style={[styles.subContainer, styles.topSpace]}>
              <TouchableOpacity style={styles.copyButton}>
                <Text style={styles.copyButtonText}>COPY REFERRAL LINK</Text>
                <Copy />
              </TouchableOpacity>

              {/* Share Buttons */}
              <View style={styles.shareContainer}>
                <TouchableOpacity style={styles.shareButton}>
                  <Feather name="message-circle" size={20} color={"#00FFBB"} />
                  <Text style={styles.shareButtonText}>TEXT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.shareButton, { flex: 1.5 }]}>
                  <FontAwesome name="whatsapp" size={20} color={"#00FFBB"} />
                  <Text style={styles.shareButtonText}>WHATSAPP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton}>
                  <MaterialIcons name="ios-share" size={20} color={"#00FFBB"} />
                  <Text style={styles.shareButtonText}>SHARE</Text>
                </TouchableOpacity>
              </View>
              {/* QR Code */}
              <View style={styles.qrContainer}>
                <Image source={qrCode} style={styles.qrCode} />
                <Image source={logo} style={styles.qrLogo} />
              </View>

              <Text style={styles.promoSubtitle}>LIMITED TIME OFFER</Text>
              <Text style={styles.promoTitle}>
                WANT TO GET 20 FREE FITCENTIVE DOLLARS FOR EVERY REFERRAL?
              </Text>
              <Text style={styles.rewardDescription2}>
                For each friend you successfully invite to join the app and fund
                their wallet, you will receive 20 Fitcentive dollars.
              </Text>

              {/* Reward Info Cards */}
              <View style={styles.rewardCard}>
                <View style={styles.rewardIcon}>
                  <Ionicons name="gift-outline" size={43} color={"#00FFBB"} />
                </View>
                <View style={styles.rewardContent}>
                  <Text style={styles.rewardLabel}>YOU GET</Text>
                  <Text style={styles.rewardAmount}>
                    20 FREE FITCENTIVE DOLLARS
                  </Text>
                  <Text style={styles.rewardDescription}>
                    For each friend you successfully invite to join the app and
                    fund their wallet, you will receive 20 Fitcentive dollars.
                  </Text>
                </View>
              </View>

              <View style={styles.rewardCard}>
                <View style={styles.rewardIcon}>
                  <Ionicons name="mail-outline" size={43} color={"#00FFBB"} />
                </View>
                <View style={styles.rewardContent}>
                  <Text style={styles.rewardLabel}>YOUR FRIENDS GET</Text>
                  <Text style={styles.rewardAmount}>
                    10 FREE FITCENTIVE DOLLARS
                  </Text>
                  <Text style={styles.rewardDescription}>
                    Once your friend funds their Fitcentive wallet, they will
                    get 10 free Fitcentive dollars instantly.
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>

          <View style={styles.leftTopImage}>
            <Image source={earning} style={styles.leftTopImage2} />
          </View>

          <Image source={pending} style={styles.rightTopImage} />
        </>
      )}

      <View style={styles.bottomHeader}>
        <Image
          source={girlImage}
          style={styles.imageHeaderSlider}
          resizeMode="stretch"
        />
        <View style={styles.lineView} />
        <View style={styles.subContainer}>
          <View style={styles.bottomPromoIcon}>
            <BottomSleep />
          </View>
          <Text style={styles.promoSubtitle2}>DON’T MISS A PAYOUT</Text>
          <Text style={styles.promoTitle}>
            ENABLE PUSH NOTIFICATIONS SO YOU NEVER MISS A PAYOUT!
          </Text>
          <TouchableOpacity style={styles.enableButton}>
            <Text style={styles.enableButtonText}>ENABLE NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default InviteFriend;

const createStyles = () =>
  StyleSheet.create({
    scrollView: {
      flexGrow: 1,
    },
    imageHeaderSlider: {
      flex: 1,
      width: ScreenWidth - 32,
      marginTop: -1,
      alignSelf: "center",
    },
    subContainer: {
      flex: 1,
      padding: 16,
    },
    topSpace: { marginTop: 134 },
    promoCard: {
      marginHorizontal: 16,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: "#7A7777",
    },
    promoCard2: {
      marginHorizontal: 16,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: "#7A7777",
      marginTop: 50,
    },
    bottomHeader: {
      marginHorizontal: 16,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: "#7A7777",
      marginVertical: 16,
    },
    promoSubtitle: {
      color: "#00FFBB",
      fontFamily: "RiftSoft-Bold",
      fontSize: 26,
    },
    promoSubtitle2: {
      color: "#00FFBB",
      fontFamily: "RiftSoft-Bold",
      fontSize: 13,
    },
    promoTitle: {
      color: "#fff",
      marginTop: 4,
      fontFamily: "RiftSoft-Bold",
      fontSize: 26,
    },
    lineView: {
      height: 10,
      backgroundColor: "#00FFBB",
    },
    promoIcon: {
      position: "absolute",
      top: 105,
      right: 12,
      borderRadius: 20,
    },
    bottomPromoIcon: {
      position: "absolute",
      top: -95,
      right: 12,
      borderRadius: 20,
    },
    copyButton: {
      backgroundColor: "#00FFBB",
      height: 43,
      borderRadius: 30,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 16,
      gap: 8,
      marginBottom: 16,
    },
    copyButtonText: {
      color: "#000",
      fontFamily: "Montserrat-Medium",
      fontSize: 12,
    },
    shareContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 16,
      gap: 8,
    },
    shareButton: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: 44,
      borderRadius: 44,
      borderWidth: 1,
      borderColor: "#00FFBB",
    },
    shareButtonText: {
      color: "#00FFBB",
      marginLeft: 8,
      fontFamily: "Montserrat-Medium",
      fontSize: 11,
    },
    qrContainer: {
      height: 270,
      width: 270,
      marginBottom: 16,
      padding: 16,
      backgroundColor: "#000",
      borderWidth: 2,
      borderRadius: 12,
      borderColor: "#7A7777",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 8,
    },
    qrCode: {
      height: 232,
      width: 232,
    },
    qrLogo: {
      position: "absolute",
      top: 110,
      height: 41,
      width: 41,
      borderRadius: 41,
      alignSelf: "center",
    },
    rewardCard: {
      marginBottom: 16,
      borderRadius: 12,
      flexDirection: "row",
    },
    rewardIcon: {
      borderRadius: 20,
      marginRight: 12,
    },
    rewardContent: {
      flex: 1,
    },
    rewardLabel: {
      color: "#00FFBB",
      fontFamily: "RiftSoft-Bold",
      fontSize: 26,
    },
    rewardAmount: {
      color: "white",
      fontFamily: "RiftSoft-Bold",
      fontSize: 26,
      marginVertical: 4,
    },
    rewardDescription: {
      color: "#DFDFDF",
      fontSize: 14,
      fontFamily: "Roboto-Regular",
      lineHeight: 18,
    },
    rewardDescription2: {
      color: "#DFDFDF",
      fontSize: 14,
      fontFamily: "Roboto-Regular",
      lineHeight: 18,
      marginBottom: 16,
    },
    enableButton: {
      backgroundColor: "#00FFBB",
      height: 31,
      width: 155,
      borderRadius: 10,
      justifyContent: "center",
      marginTop: 12,
    },
    enableButtonText: {
      fontFamily: "Montserrat-Medium",
      color: "#000",
      fontSize: 9,
      textAlign: "center",
    },
    leftTopImage: {
      height: 203,
      width: 192,
      borderRadius: 200,
      left: 32,
      position: "absolute",
      backgroundColor: "#393939",
      borderWidth: 2,
      borderColor: "#7A7777",
    },
    leftTopImage2: {
      height: 200,
      width: 200,
      top: 3,
      left: -6,
      position: "absolute",
    },
    rightTopImage: {
      height: 140,
      width: 140,
      top: 60,
      right: 32,
      position: "absolute",
    },
  });
