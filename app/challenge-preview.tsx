import { FeedbackModal } from "@/components";
import { SafeAreaView, StatusBar } from "react-native";

const ChallengePreview = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar barStyle="light-content" />
      <FeedbackModal />
    </SafeAreaView>
  );
};

export default ChallengePreview;
