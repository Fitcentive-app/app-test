import React from "react";
import { Tabs } from "expo-router";
import { View, Text, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HomeSvg } from "../../components/icons/homeSvg";
import { InviteSvg } from "../../components/icons/inviteSvg";
import { SocializeSvg } from "../../components/icons/socializeSvg";
import { GoalSvg } from "../../components/icons/goalsvg";

const TabsLayout = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.5)",
        tabBarStyle: {
          position: "absolute",
          bottom: height * 0.04,
          left: width * 0.04,
          right: width * 0.04,
          backgroundColor: "transparent",
          borderTopWidth: 1,
          borderTopColor: "rgba(132, 132, 132, 1)",
          height: 76,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "rgba(132, 132, 132, 1)",
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={["#2A2A2A", "#2A2A2A"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              borderRadius: 21,
            }}
          />
        ),
        tabBarItemStyle: {
          height: 43,
          marginTop: 16,
        },
      }}>
      <Tabs.Screen
        name='home'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: "center" }}>
              <HomeSvg width={24} height={21} fill={color} />
              <Text style={{ color, fontSize: 12, marginTop: 4 }}>Home</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name='challenge'
        options={{
          title: "Challenges",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: "center" }}>
              {/* <Feather name='target' size={24} color={color} /> */}
              <GoalSvg
                width={24}
                height={24}
                fill={color}
                showBackgroundColor={false}
              />
              <Text style={{ color, fontSize: 12, marginTop: 4 }}>
                Challenges
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name='invite'
        options={{
          title: "Invite",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: "center" }}>
              <InviteSvg width={24} height={24} fill={color} />
              <Text style={{ color, fontSize: 12, marginTop: 4 }}>Invite</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name='users'
        options={{
          title: "Socialize",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: "center" }}>
              <SocializeSvg width={24} height={24} fill={color} />
              <Text style={{ color, fontSize: 12, marginTop: 4 }}>
                Socialize
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
