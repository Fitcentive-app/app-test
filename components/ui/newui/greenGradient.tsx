import React from "react";
import Svg, { Circle, SvgProps } from "react-native-svg";
import { View, Text } from "react-native";
import { GlowingRing } from "./glowingRing";

interface IconComponentProps {
  activeColor?: string;
  size?: number;
  strokeSize?: number;
  circleSize?: number;
  bgColor?: string;
  left?: number;
  marginBottom?: number;
  IconSvg?: React.FC<SvgProps>;
  text?: {
    top: string;
    bottom: string;
    isPercentage?: boolean;
  };
}

const GreenGradient: React.FC<IconComponentProps> = ({
  size = 100,
  strokeSize = 10,
  marginBottom = 50,
  left = 5,
  IconSvg,
  text,
}) => {
  const outerRadius = size / 2;
  const innerRadius = outerRadius - strokeSize;

  return (
    <View style={{ alignItems: "center" }}>
      <GlowingRing size={size} strokeWidth={strokeSize} />
      {IconSvg && (
        <IconSvg
          width={size}
          height={size}
          fill={"#fff"}
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            left: left,
            bottom: outerRadius - innerRadius + marginBottom,
          }}
        />
      )}
      {text && (
        <View className='absolute top-[15px]'>
          {text.isPercentage ? (
            <View className='flex-row items-start'>
              <Text className='text-[32px] font-rift-demi text-white'>
                {text.top.replace("%", "")}
              </Text>
              <Text className='text-[20px] font-rift-demi text-white mt-[2px]'>
                %
              </Text>
            </View>
          ) : (
            <Text className='text-[32px] font-rift-demi text-white'>
              {text.top}
            </Text>
          )}
          <Text className='text-[16px] font-rift-medium text-white mt-[-8px]'>
            {text.bottom}
          </Text>
        </View>
      )}
    </View>
  );
};

export default GreenGradient;
