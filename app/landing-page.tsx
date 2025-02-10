import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { GetSponsors, InviteFriend } from "@/components";
import Header from "@/components/common/header";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState<"invite" | "sponsors" | string>(
    "invite"
  );
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const tabs = [
    { key: "invite", label: "Invite friends" },
    { key: "sponsors", label: "Get sponsors" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.tabContainer}>
        {tabs.map(({ key, label }) => (
          <TouchableOpacity
            key={key}
            style={[
              styles.tabButton,
              activeTab === key
                ? activeTab === "invite"
                  ? styles.activeTab
                  : styles.activeTabLightGreen
                : null,
            ]}
            onPress={() => setActiveTab(key)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === key && styles.activeTabText,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {activeTab === "invite" ? <InviteFriend /> : <GetSponsors />}
    </SafeAreaView>
  );
};

export default LandingPage;

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
    },
    tabContainer: {
      flexDirection: "row",
      height: 32,
      marginHorizontal: 16,
      marginTop: 24,
      marginBottom: 16,
      borderRadius: 8,
      overflow: "hidden",
      backgroundColor: "#013220",
    },
    tabButton: {
      flex: 1,
      height: 32,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#013220",
    },
    activeTab: {
      backgroundColor: "#00FFBB",
      borderRadius: 8,
    },
    activeTabLightGreen: {
      backgroundColor: "#8EFFA3",
      borderRadius: 8,
    },
    tabText: {
      color: "#fff",
      fontWeight: "500",
      fontFamily: "Roboto-Medium",
    },
    activeTabText: {
      color: "#000",
    },
  });
