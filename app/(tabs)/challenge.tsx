import React, { useRef, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ImprovementSlider } from "../slider-improvement";
import { LeaderBoard } from "../slider-leader-board";
import { ChallengeSlider } from "../slider-challenge";
import { BeatFriendSlider } from "../slider-beat-friend";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const windowHeight = Dimensions.get("window").height;

const options = ["IMPROVEMENT", "LEADER BOARD", "CHALLENGE", "BEAT FRIEND"];

const Challenge = () => {
  const refRBSheet: any = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const renderContent = useMemo(() => {
    switch (selectedIndex) {
      case 0:
        return <ImprovementSlider />;
      case 1:
        return <LeaderBoard />;
      case 2:
        return <ChallengeSlider />;
      case 3:
        return <BeatFriendSlider />;
      default:
        return (
          <View style={styles.content}>
            <Text style={styles.text}>SELECT AN OPTION</Text>
          </View>
        );
    }
  }, [selectedIndex]);

  const handlePress = (index: number) => {
    setSelectedIndex(index);
    refRBSheet.current.open();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handlePress(index)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}

        <RBSheet
          ref={refRBSheet}
          height={windowHeight - 100}
          customStyles={{
            container: styles.RBContainer,
          }}
        >
          <View style={styles.headerView}>
            <TouchableOpacity
              style={styles.closeView}
              onPress={() => refRBSheet.current.close()}
            >
              <FontAwesome name="close" size={24} />
            </TouchableOpacity>
          </View>
          {renderContent}
        </RBSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  headerView: { backgroundColor: "#1A1A1A" },
  RBContainer: { borderTopLeftRadius: 30, borderTopRightRadius: 30 },
  closeView: {
    height: 38,
    width: 38,
    borderRadius: 30,
    alignSelf: "flex-end",
    marginRight: 16,
    marginTop: 16,
    backgroundColor: "#7A7777",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "bold" },
  content: { alignItems: "center", padding: 20 },
  text: { fontSize: 18, fontWeight: "bold" },
});

export default Challenge;
