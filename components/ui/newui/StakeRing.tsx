import React from "react";
import Svg, { Circle, LinearGradient, Stop } from "react-native-svg";
import { View, Text } from "react-native";

interface StakeRingProps {
  amount: number;
  ringSize?: number;
  strokeWidth?: number;
  activeColor?: string;
  lightShade?: string;
  label?: string;
  suffix?: string;
}

export const StakeRing = ({
  amount,
  ringSize = 100,
  strokeWidth = 10,
  activeColor = "#8EFFA3",
  lightShade = "#FFFFFF",
  label = "STAKE",
  suffix = "$",
}: StakeRingProps) => {
  const outerRadius = ringSize / 2; // Outer circle radius
  const innerRadius = outerRadius - strokeWidth; // Inner circle radius

  // Function to get gradient stops based on activeColor
  const getGradientStops = (color: string) => {
    switch (color) {
      case "#DF1A31": // Red
        return [
          { offset: "0%", color: "#930112" },
          { offset: "23.5%", color: "#DF1A31" },
          { offset: "47.5%", color: "#FFA8B2" },
          { offset: "75.5%", color: "#DF1A31" },
          { offset: "100%", color: "#930112" },
        ];
      case "#8EFFA3": // Light green
        return [
          { offset: "0%", color: "#559962" },
          { offset: "29%", color: "#8EFFA3" },
          { offset: "47.5%", color: "#E6FFEB" },
          { offset: "65%", color: "#8EFFA3" },
          { offset: "100%", color: "#559962" },
        ];
      case "#00FFBB": // Brand
        return [
          { offset: "0%", color: "#016248" },
          { offset: "29%", color: "#00FFBB" },
          { offset: "47.5%", color: "#DCFFF6" },
          { offset: "65%", color: "#00FFBB" },
          { offset: "100%", color: "#016248" },
        ];
      case "#FFD34C": // Yellow
        return [
          { offset: "0%", color: "#CA9800" },
          { offset: "29%", color: "#FFD34C" },
          { offset: "47.5%", color: "#FFEFBF" },
          { offset: "65%", color: "#FFD34C" },
          { offset: "100%", color: "#CA9800" },
        ];
      default:
        return [
          { offset: "0%", color: activeColor },
          { offset: "25%", color: activeColor },
          { offset: "50%", color: lightShade },
          { offset: "75%", color: activeColor },
          { offset: "100%", color: activeColor },
        ];
    }
  };

  const gradientStops = getGradientStops(activeColor);

  return (
    <View>
      <Svg
        width={ringSize}
        height={ringSize}
        viewBox={`0 0 ${ringSize} ${ringSize}`}
        fill='none'>
        <Circle
          cx={outerRadius}
          cy={outerRadius}
          r={outerRadius} // Black background circle
          fill='black' // Black background
        />

        <LinearGradient id='strokeGradient' x1='0%' y1='100%' x2='0%' y2='0%'>
          {gradientStops.map((stop, index) => (
            <Stop key={index} offset={stop.offset} stopColor={stop.color} />
          ))}
        </LinearGradient>
        <Circle
          cx={outerRadius}
          cy={outerRadius}
          r={innerRadius} // Inner circle radius
          stroke='url(#strokeGradient)' // Active color for the inner ring
          strokeWidth={strokeWidth} // Use strokeWidth prop
          fill='none'
        />
      </Svg>
      <View
        style={{
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          width: ringSize,
          height: ringSize,
        }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: -10,
          }}>
          {suffix === "$" ? (
            // Dollar display
            <>
              <Text className='text-white text-xl font-rift-demi mt-2'>$</Text>
              <Text
                className='text-white text-5xl font-rift-demi'
                style={{ marginLeft: 0, marginTop: 10 }}>
                {amount}
              </Text>
            </>
          ) : (
            // Percentage display
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Text
                className='text-white text-5xl font-rift-demi'
                style={{ marginTop: 10 }}>
                {amount}
              </Text>
              <Text className='text-white text-xl font-rift-demi mt-2'>
                {suffix}
              </Text>
            </View>
          )}
        </View>
        <Text
          className='text-white text-[10px] text-center font-rift-demi pl-1'
          style={{ marginTop: -8 }}>
          {label}
        </Text>
      </View>
    </View>
  );
};
