import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Icon from "@expo/vector-icons/Feather"; // Using Feather icons
import { LinearGradient } from "expo-linear-gradient";
import BackHeader from "@/components/common/back-header";

// FAQ Data
const FAQ_ITEMS = [
  {
    id: "1",
    question: "How do I give feedback on Fitcentive?",
    answer: "You can give feedback in the app settings under 'Feedback'.",
  },
  {
    id: "2",
    question: "How do I setup a new payment method?",
    answer:
      "We calculate your recovery score by analyzing key physiological metrics, including heart rate variability (HRV), resting heart rate (RHR), and sleep performance. These data points are collected and processed to measure how well your body has recovered from previous strain and how ready it is to perform. The score provides a personalized assessment, helping you optimize training, activity, and rest.",
  },
  {
    id: "3",
    question: "How do I remove a friend?",
    answer:
      "Visit your friends list and tap 'Remove' on the user you want to remove.",
  },
  {
    id: "4",
    question: "What is a Strain Score?",
    answer:
      "Strain Score is calculated based on your physical exertion levels and activities.",
  },
  {
    id: "5",
    question: "What is a Recovery Score?",
    answer:
      "We calculate your recovery score by analyzing key physiological metrics, including heart rate variability (HRV), resting heart rate (RHR), and sleep performance. These data points are collected and processed to measure how well your body has recovered from previous strain and how ready it is to perform. The score provides a personalized assessment, helping you optimize training, activity, and rest.",
  },
];

const FAQScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <View style={styles.faqItem}>
      <TouchableOpacity
        style={styles.faqHeader}
        onPress={() => toggleExpand(index)}
      >
        <Text style={styles.question}>{item.question}</Text>
        <Icon
          name={expandedIndex === index ? "x-circle" : "plus-circle"}
          size={24}
          color="#00FFBB"
        />
      </TouchableOpacity>
      {expandedIndex === index && (
        <Text style={styles.answer}>{item.answer}</Text>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader title={"FAQ"} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={["#393939", "#646464"]}
          style={styles.linearForm}
        >
          <View style={styles.subContainer}>
            <FlatList
              data={FAQ_ITEMS}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
          </View>
        </LinearGradient>

        {/* Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>STILL NEED HELP?</Text>
          <Text style={styles.footerText}>
            Send us a message and we will get back to you as soon as we can.
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactText}>CONTACT US</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  subContainer: {
    padding: 24,
    borderWidth: 1,
    borderColor: "#7A7777",
    borderRadius: 12,
  },
  faqItem: {
    marginVertical: 10,
    borderRadius: 10,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 24,
  },
  linearForm: {
    borderRadius: 12,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: { color: "#fff", fontSize: 14, fontFamily: "Roboto-Medium" },
  answer: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    lineHeight: 20,
    marginRight: 25,
    fontFamily: "Roboto-Regular",
  },
  footer: { alignItems: "center", marginTop: 50 },
  footerTitle: {
    color: "#fff",
    fontSize: 36,
    fontFamily: "RiftSoft-Bold",
    marginBottom: 10,
  },
  footerText: {
    color: "#aaa",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    marginHorizontal: 40,
    fontFamily: "Roboto-Medium",
  },
  contactButton: {
    width: 292,
    backgroundColor: "#00FFBB",
    borderRadius: 44,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  contactText: {
    color: "#000",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
});
