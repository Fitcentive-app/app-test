import React from "react";
import { StyleSheet, View, Text } from "react-native";
import User from "../../assets/images/landing-page/user.svg";
import Message from "../../assets/images/landing-page/message.svg";
import HeaderLogo from "../../assets/images/landing-page/header-logo.svg";

const Header = () => {
  const styles = createStyles();

  return (
    <View style={styles.header}>
      <User />
      <HeaderLogo />
      <View style={styles.notificationBadge}>
        <Message />
        <Text style={styles.notificationText}>4</Text>
      </View>
    </View>
  );
};

export default Header;

const createStyles = () =>
  StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
    },
    notificationBadge: {
      width: 63,
      height: 32,
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#00FFBB",
      borderRadius: 32,
      marginLeft: -30,
    },
    notificationText: {
      fontWeight: "bold",
      color: "#000",
    },
  });
