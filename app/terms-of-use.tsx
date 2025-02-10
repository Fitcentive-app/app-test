import BackHeader from "@/components/common/back-header";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";

const TermsScreen = () => {
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    setAgreed(true);
    Alert.alert("Success", "You have accepted the terms.");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Scrollable Terms of Use */}
        <BackHeader title="TERNS OF USE" />
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.termsText}>
            PLEASE READ THE FOLLOWING TERMS OF USE ("AGREEMENT") CAREFULLY
            BEFORE USING THE SERVICES (AS DEFINED BELOW) OFFERED BY Fitcentive,
            INC. ("US", "WE", "OUR" or "Fitcentive"). THIS AGREEMENT SETS FORTH
            THE LEGALLY BINDING TERMS AND CONDITIONS FOR YOUR USE OF THE
            Fitcentive SOFTWARE EMBEDDED WITHIN THE Fitcentive DEVICE, THE
            Fitcentive SUBSCRIPTION SERVICE(S) USED IN CONJUNCTION WITH THE
            Fitcentive DEVICE(S) ("SUBSCRIPTION" OR "MEMBERSHIP"), AND THE
            SERVICES, FEATURES, CONTENT, WEBSITES (OR OTHER LINKED PAGES) OR
            APPLICATIONS OFFERED, FROM TIME TO TIME, BY Fitcentive IN CONNECTION
            THEREWITH (COLLECTIVELY, THE "SERVICE(S)"). THESE TERMS COVER
            IMPORTANT INFORMATION ABOUT SERVICES PROVIDED TO YOU AND ANY CHARGES
            AND AMOUNTS WE BILL YOU. THESE TERMS INCLUDE INFORMATION ABOUT
            FUTURE CHANGES TO THESE TERMS AND AUTOMATIC RENEWALS.
            {"\n\n"}"YOU" AND "YOUR" REFER TO THE PERSON ACCESSING OR USING THE
            SERVICES, OR IF YOU CREATE AN ACCOUNT ON BEHALF OF AN EMPLOYER,
            COMPANY, ORGANIZATION, OR OTHER ENTITY, THEN (I) ALL REFERENCES TO
            "YOU" HEREIN INCLUDES YOU AND THAT ENTITY, (II) YOU REPRESENT AND
            WARRANT THAT YOU ARE AN AUTHORIZED REPRESENTATIVE OF THE ENTITY WITH
            THE AUTHORITY TO BIND THE ENTITY TO THIS AGREEMENT, AND (III) YOU
            AGREE TO THIS AGREEMENT ON THE ENTITY'S BEHALF.
            {"\n\n"}BY ACCESSING AND USING THE SERVICE IN ANY MANNER, YOU
            ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY
            THIS AGREEMENT AND THE Fitcentive PRIVACY POLICY
            (WWW.Fitcentive.COM/PRIVACY) (THE "PRIVACY POLICY"), WHICH IS
            INCORPORATED INTO THIS AGREEMENT BY THIS REFERENCE. IF YOU DO NOT
            ACCEPT THIS AGREEMENT AND THE PRIVACY POLICY, YOU ARE NOT AUTHORIZED
            TO USE THE SERVICES.
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TermsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Dark background
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 24,
  },
  termsText: {
    color: "#FFF",
    lineHeight: 22,
    textAlign: "justify",
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
  },
  button: {
    backgroundColor: "aqua",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
  },
});
