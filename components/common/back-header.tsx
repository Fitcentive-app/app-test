import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const BackHeader = ({ title }: { title: string }) => {
  const colors: any = useTheme().colors;
  const styles = createStyles(colors);

  return (
    <View style={styles.pageBackground}>
      <View style={styles.arrowBackground}>
        <Ionicons name="chevron-back-outline" size={24} color={"#000000"} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View></View>
    </View>
  );
};

const createStyles = (colors: any) =>
  StyleSheet.create({
    pageBackground: {
      backgroundColor: "#000",
      height: 40,
      marginBottom: 16,
      alignItems: "center",
      flexDirection: "row",
      marginHorizontal: 16,
    },
    title: {
      flex: 1,
      fontSize: 24,
      fontFamily: "RiftSoft-Bold",
      color: "#fff",
      textAlign: "center",
      marginRight: 30,
    },
    arrowBackground: {
      height: 30,
      width: 30,
      borderRadius: 30,
      backgroundColor: "#D9D9D9",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default BackHeader;
