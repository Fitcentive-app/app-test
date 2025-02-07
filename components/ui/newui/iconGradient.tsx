import React from "react";
import Svg, { Circle, SvgProps } from "react-native-svg";
import {
  // Image ,
  View,
} from "react-native";
import { Image } from "expo-image";
import { ShinyRing } from "./shinyRing";

interface IconComponentProps {
  activeColor?: string;
  size?: number;
  strokeSize?: number;
  circleSize?: number;
  bgColor?: string;
  left?: number;
  marginBottom?: number; // Added marginBottom prop
  IconSvg?: React.FC<SvgProps>; // Accept SVG icon as prop
  isImage?: boolean;
  imageSource?: string;
  isBlackBackground?: boolean;
  imageTop?: number;
  imageLeft?: number;
}

const IconGradient: React.FC<IconComponentProps> = ({
  size = 100,
  strokeSize = 10,
  circleSize = 50,
  marginBottom = 50, // Default marginBottom value
  left = 5,
  IconSvg, // Destructure IconSvg prop
  isImage = false,
  imageSource,
  isBlackBackground,
  imageTop,
  imageLeft,
}) => {
  const outerRadius = size / 2; // Outer circle radius
  const innerRadius = outerRadius - strokeSize; // Inner circle radius

  return (
    <View style={{ alignItems: "center" }}>
      <ShinyRing
        size={circleSize}
        strokeWidth={strokeSize}
        bgColor='#1a1a1a'
        isBlackBackground={isBlackBackground}
      />
      {isImage ? (
        <Image
          source={{ uri: imageSource }}
          style={{
            position: "absolute",
            // width: size - strokeSize * 2,
            // height: size - strokeSize * 2,
            borderRadius: size / 2,
            top: imageTop,
            left: imageLeft,
            borderWidth: 0.5,
            borderColor: "black",
            width: size,
            height: size,
          }}
        />
      ) : (
        IconSvg && (
          <IconSvg
            width={size}
            height={size}
            fill={"#fff"}
            style={{
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              left: left,

              bottom: outerRadius - innerRadius + marginBottom, // Adjust position to center the icon
            }}
          />
        )
      )}
    </View>
  );
};

export default IconGradient;
