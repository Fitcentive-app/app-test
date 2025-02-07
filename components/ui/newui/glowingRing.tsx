import React from "react";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";
import { View } from "react-native";

interface GlowingRingProps {
  size: number;
  strokeWidth?: number;
}

export const GlowingRing = ({ size, strokeWidth = 4 }: GlowingRingProps) => {
  const padding = strokeWidth * 1;
  const totalSize = size + padding * 2;
  const center = totalSize / 2;

  // Calculate radiuses ensuring no gap between outer circles
  const outerMostRadius = size / 2;
  const outerRadius = outerMostRadius;
  const innerRadius1 = outerRadius - strokeWidth / 1.5;
  const innerRadius2 = innerRadius1 - strokeWidth / 10;
  const innerRadius3 = innerRadius2 - strokeWidth / 2;

  return (
    <View className='-ml-[7px]'>
      <Svg
        width={totalSize}
        height={totalSize}
        viewBox={`0 0 ${totalSize} ${totalSize}`}
        fill='none'>
        <Defs>
          <RadialGradient id='glowingRingGradient' cx='50%' cy='50%' r='50%'>
            <Stop offset='0' stopColor='#00FFBB' stopOpacity='1' />
            <Stop offset='1' stopColor='#00FFBB' stopOpacity='0.3' />
          </RadialGradient>
          <RadialGradient id='centerGlow' cx='50%' cy='50%' r='50%'>
            <Stop offset='0.4' stopColor='#000000' stopOpacity='1' />
            <Stop offset='0.7' stopColor='#044533' stopOpacity='0.6' />
            <Stop offset='1' stopColor='#044533' stopOpacity='0' />
          </RadialGradient>
        </Defs>

        {/* Outermost circle - border only with thicker stroke */}
        <Circle
          cx={center}
          cy={center}
          r={outerMostRadius}
          stroke='#00A277'
          strokeWidth={strokeWidth * 1.3}
          fill='transparent'
        />

        {/* Second outer circle - filled */}
        <Circle
          cx={center}
          cy={center}
          r={outerRadius}
          strokeWidth={strokeWidth / 2}
          fill='#00FFBB'
        />

        {/* First inner circle */}
        <Circle
          cx={center}
          cy={center}
          r={innerRadius1}
          stroke='#232323'
          strokeWidth={strokeWidth / 2}
          fill='transparent'
        />

        {/* Second inner circle */}
        <Circle
          cx={center}
          cy={center}
          r={innerRadius2}
          stroke='#0445335c'
          strokeWidth={strokeWidth}
          fill='transparent'
        />

        <Circle cx={center} cy={center} r={innerRadius3} fill='#222222' />

        {/* Center circle with glow effect */}
        <Circle
          cx={center}
          cy={center}
          r={innerRadius3 * 1.5}
          fill='url(#centerGlow)'
        />
      </Svg>
    </View>
  );
};
