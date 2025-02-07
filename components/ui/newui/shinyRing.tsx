import React from "react";
import Svg, { Circle, LinearGradient, Stop } from "react-native-svg";
import { View } from "react-native";

interface ShinyRingProps {
  size: number;
  strokeWidth?: number; // Added strokeWidth prop
  activeColor?: string;
  lightShade?: string;
  bgColor?: string; // Added bgColor prop
  isBlackBackground?: boolean;
}

export const ShinyRing = ({
  size,
  strokeWidth = 8,
  activeColor = "#00FFBB",
  lightShade = "#FFFFFF",
  bgColor = "#7a7a7a", // Default bgColor
  isBlackBackground = true,
}: ShinyRingProps) => {
  const outerRadius = size / 2; // Outer circle radius
  const innerRadius = outerRadius - strokeWidth; // Inner circle radius
  const padding = 10; // Padding for the background circle
  const backgroundRadius = outerRadius + padding; // Background circle radius
  const extraPadding = 10; // Additional padding for the black circle
  const totalSize = size + (padding + extraPadding) * 2; // New total size calculation

  return (
    <View>
      <Svg
        width={totalSize}
        height={totalSize}
        viewBox={`0 0 ${totalSize} ${totalSize}`}
        fill='none'>
        {isBlackBackground && (
          <Circle
            cx={totalSize / 2}
            cy={totalSize / 2}
            r={outerRadius + padding + extraPadding}
            fill='black'
          />
        )}

        <Circle
          cx={totalSize / 2}
          cy={totalSize / 2}
          r={outerRadius + padding}
          fill={bgColor}
        />

        <LinearGradient id='strokeGradient' x1='0%' y1='100%' x2='0%' y2='0%'>
          <Stop offset='0%' stopColor='#016248' />
          <Stop offset='29%' stopColor='#00FFBB' />
          <Stop offset='47.5%' stopColor='#DCFFF6' />
          <Stop offset='65%' stopColor='#00FFBB' />
          <Stop offset='100%' stopColor='#016248' />
        </LinearGradient>
        <Circle
          cx={totalSize / 2}
          cy={totalSize / 2}
          r={outerRadius + padding}
          stroke='url(#strokeGradient)'
          strokeWidth={strokeWidth}
          fill='none'
        />
      </Svg>
      <View
        style={{
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          width: totalSize,
          height: totalSize,
        }}>
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}></View>
      </View>
    </View>
  );
};
