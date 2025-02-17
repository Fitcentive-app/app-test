import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  RadialGradient,
  G,
  Text as SvgText,
} from "react-native-svg";

interface SpokeProps {
  size?: number;
  value?: number;
  activeColor?: string;
  inactiveColor?: string;
  title?: string;
  titleFontSize?: number;
  number?: number;
  numberFontSize?: number;
  subtitle?: string;
  angle?: number;
  rotation?: number;
  backgroundColor?: string;
  onDetailsPress?: () => void;
  totalDots?: number;
  showPercentage?: boolean;
  onBoarding?: boolean;
  onboardingStep?: number;
  isFilledSectorVisible?: boolean;
}

const SpokeComponent: React.FC<SpokeProps> = ({
  size = 300,
  value = 100,
  activeColor = "#FFB753",
  inactiveColor = "#393939",
  title = "You",
  titleFontSize,
  number = 100,
  numberFontSize,
  subtitle = "",
  angle = 45,
  rotation = 0,
  backgroundColor = "#8EFFA3",
  totalDots = 5,
  showPercentage = false,
  onBoarding = false,
  onboardingStep = 0,
  isFilledSectorVisible = true,
}) => {
  const normalizedValue = Math.min(Math.max(value, 0), 100);
  backgroundColor = `${activeColor}33`;

  // Adjust these measurements for better spacing
  const strokeWidth = size * 0.035; // Reduced slightly
  const padding = size * 0.1;
  const outerRadius = (size - strokeWidth * 2 - padding * 2) * 0.35;
  const innerRadius = outerRadius - 20;
  const center = size / 2;

  const shouldReverseDirection =
    title === "RECOVERY" || title === "SLEEP" || title === "EXERCISE";

  // Modify the generateArc function to add gaps between arcs
  const generateArc = (endAngle: number) => {
    const angleReduction = angle === 180 ? angle * 0.05 : angle * 0.09;

    let startAngle, endAngle2;
    if (shouldReverseDirection && endAngle !== 100) {
      // For progress arc in bottom components
      startAngle = angle / 2 - angleReduction;
      endAngle2 = startAngle - (endAngle * (angle - 3 * angleReduction)) / 100;
    } else {
      // For background arc and OVERALL
      startAngle = -angle / 2 + angleReduction;
      endAngle2 =
        endAngle === 100
          ? angle / 2 - angleReduction
          : startAngle + (endAngle * (angle - 2 * angleReduction)) / 100;
    }

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle2 * Math.PI) / 180;

    const startX = center + outerRadius * Math.cos(startRad);
    const startY = center + outerRadius * Math.sin(startRad);
    const endX = center + outerRadius * Math.cos(endRad);
    const endY = center + outerRadius * Math.sin(endRad);

    const largeArcFlag = endAngle <= 100 ? "0" : "1";

    return `M ${startX} ${startY} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} ${
      shouldReverseDirection && endAngle !== 100 ? 0 : 1
    } ${endX} ${endY}`;
  };

  // Modify generateSectorPath to create smaller consistent gaps
  const generateSectorPath = (
    percentage: number,
    isBackground: boolean = false
  ) => {
    const sectionGap = angle === 180 ? 0.5 : 0.3; // Reduced to 0.3 degree gap for bottom sections
    const totalGapsAngle = angle === 180 ? 2 * sectionGap : 6 * sectionGap; // Account for gaps between sections

    let startAngle, endAngle;
    if (isBackground) {
      startAngle = -angle / 2 + sectionGap;
      endAngle = startAngle + angle - 2 * sectionGap;
    } else if (shouldReverseDirection) {
      endAngle = angle / 2 - sectionGap;
      startAngle = endAngle - (percentage * (angle - totalGapsAngle)) / 100;
    } else {
      startAngle = -angle / 2 + sectionGap;
      endAngle = startAngle + (percentage * (angle - totalGapsAngle)) / 100;
    }

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const startX =
      angle !== 180
        ? center + innerRadius * Math.cos(startRad)
        : center + innerRadius * Math.cos(startRad);
    const startY =
      angle !== 180
        ? center + innerRadius * Math.sin(startRad)
        : center + innerRadius * Math.sin(startRad);
    const endX =
      angle !== 180
        ? center + innerRadius * Math.cos(endRad)
        : center + innerRadius * Math.cos(endRad);
    const endY =
      angle !== 180
        ? center + innerRadius * Math.sin(endRad)
        : center + innerRadius * Math.sin(endRad);

    return `
      M ${center} ${center}
      L ${startX} ${startY}
      A ${innerRadius} ${innerRadius} 0 ${
      isBackground && angle > 180 ? 1 : 0
    } 1 ${endX} ${endY}
      L ${center} ${center}
    `;
  };

  // Generate dots along the arc with custom angle
  const generateDots = () => {
    const dots = [];
    const angleReduction = angle === 180 ? angle * 0.05 : angle * 0.09;
    const effectiveStartAngle = -angle / 2 + angleReduction;
    const effectiveEndAngle = angle / 2 - angleReduction;

    for (let i = 0; i < totalDots; i++) {
      // Skip middle dots if onboardingStep is 0
      if (
        !isFilledSectorVisible &&
        onBoarding &&
        i !== 0 &&
        i !== totalDots - 1
      ) {
        continue;
      }

      const dotAngle =
        effectiveStartAngle +
        ((effectiveEndAngle - effectiveStartAngle) * i) / (totalDots - 1);
      const rad = (dotAngle * Math.PI) / 180;

      // Calculate base position
      const x = center + outerRadius * Math.cos(rad);
      const y = center + outerRadius * Math.sin(rad);

      const isActive = (i / (totalDots - 1)) * 100 <= normalizedValue;

      dots.push(
        <Circle
          key={i}
          cx={x}
          cy={y}
          r={(size * 0.01) / 1.2}
          fill={isActive ? "black" : "black"}
          stroke={isActive ? "#7A7A7A" : "#7A7A7A"}
        />
      );
    }
    return dots;
  };

  const calculateTextPosition = () => {
    // Special handling for the "OVERALL" section (180° angle)
    if (angle === 180) {
      const textDistance = innerRadius * 0.2; // Increased distance for better centering
      const textAngle = -90; // Fixed angle for the overall section (-90 degrees puts it at the top)
      const textRad = (textAngle * Math.PI) / 180;
      return {
        x: center + textDistance * Math.cos(textRad),
        y: center + textDistance * Math.sin(textRad),
      };
    }

    // Original calculation for other sections
    const textAngle = rotation;
    const textDistance = innerRadius * 0.68;
    const textRad = (textAngle * Math.PI) / 180;
    return {
      x: center + textDistance * Math.cos(textRad),
      y: center + textDistance * Math.sin(textRad),
    };
  };

  // Add this new function to generate the end border path
  const generateEndBorderPath = (percentage: number) => {
    const sectionGap = angle === 180 ? 0.5 : 0.3;
    const totalGapsAngle = angle === 180 ? 2 * sectionGap : 6 * sectionGap;

    let endAngle;
    if (shouldReverseDirection) {
      // For bottom components, calculate from right side
      const rightEdge = angle / 2 - sectionGap;
      endAngle = rightEdge - (percentage * (angle - totalGapsAngle)) / 100;
    } else {
      // For OVERALL, keep original calculation
      const startAngle = -angle / 2 + sectionGap;
      endAngle = startAngle + (percentage * (angle - totalGapsAngle)) / 100;
    }

    const endRad = (endAngle * Math.PI) / 180;
    const endX = center + innerRadius * Math.cos(endRad);
    const endY = center + innerRadius * Math.sin(endRad);

    return `M ${endX} ${endY} L ${center} ${center}`;
  };

  // Add this function to determine border color
  const getBorderColor = (value: number) => {
    if (value >= 75) return "#C3FFCE"; // Green
    if (value >= 50) return "#FFB753"; // Yellow
    return "#FF8E8E"; // Red
  };

  const styles = StyleSheet.create({
    container: {
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
    },
    textContainer: {
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      transform: [{ translateY: -50 }],
    },
  });

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Defs>
          <LinearGradient id='sectorGradient' x1='0%' y1='110%' x2='0%' y2='0%'>
            <Stop offset='0.2' stopColor={activeColor} stopOpacity='0.6' />
            <Stop offset='1' stopColor={activeColor} stopOpacity='0.2' />
          </LinearGradient>
          <LinearGradient
            id='activeGradient'
            x1={shouldReverseDirection ? "100%" : "0%"}
            y1='0%'
            x2={shouldReverseDirection ? "0%" : "100%"}
            y2='0%'>
            <Stop offset='0' stopColor={activeColor} />
            <Stop offset='0.3' stopColor='white' stopOpacity='0.8' />
            <Stop offset='0.5' stopColor={activeColor} />
            <Stop offset='1' stopColor={activeColor} stopOpacity='0.3' />
          </LinearGradient>
        </Defs>

        <G rotation={rotation} origin={`${center}, ${center}`}>
          {/* Background arc */}
          <Path
            d={generateArc(100)}
            stroke={inactiveColor}
            strokeWidth={strokeWidth + 8}
            strokeLinecap='round'
            fill='none'
          />

          {/* Background sector */}
          <Path
            d={generateSectorPath(100, true)}
            fill={backgroundColor}
            strokeLinecap='round'
            strokeLinejoin='round'
          />

          {/* Filled sector */}
          {(isFilledSectorVisible || !onBoarding) && (
            <>
              <Path
                d={generateSectorPath(normalizedValue)}
                fill='url(#sectorGradient)'
                strokeLinecap='round'
                strokeLinejoin='round'
              />

              {/* Add shiny border with dynamic color */}
              <Path
                d={generateEndBorderPath(normalizedValue)}
                stroke={getBorderColor(normalizedValue)}
                strokeWidth={1}
                strokeLinecap='round'
                opacity={0.8}
              />
            </>
          )}

          {/* Base arc with black border */}
          {(isFilledSectorVisible || !onBoarding) && (
            <Path
              d={generateArc(100)}
              stroke='black'
              strokeWidth={strokeWidth + 3}
              strokeLinecap='round'
              fill='none'
            />
          )}

          {/* Base arc */}
          <Path
            d={generateArc(100)}
            stroke={inactiveColor}
            strokeWidth={strokeWidth - 1}
            strokeLinecap='round'
            fill='none'
          />

          {/* Progress arc */}
          {(isFilledSectorVisible || !onBoarding) && (
            <Path
              d={generateArc(normalizedValue)}
              stroke='url(#activeGradient)'
              strokeWidth={strokeWidth}
              strokeLinecap='round'
              fill='none'
            />
          )}

          {generateDots()}
        </G>

        {/* Text elements positioned in section centers */}
        <G>
          {/* Number and percentage with shadow effect */}
          {(isFilledSectorVisible || !onBoarding) && (
            <>
              <SvgText
                x={calculateTextPosition().x}
                y={calculateTextPosition().y}
                fill='black'
                textAnchor='middle'
                fontSize={numberFontSize}
                fontFamily='RiftSoft-Demi'
                dx={1}
                dy={1}>
                {number}
              </SvgText>
              {showPercentage && (
                <SvgText
                  x={calculateTextPosition().x + (number === 100 ? 22 : 18)}
                  y={calculateTextPosition().y - 10}
                  fill='black'
                  textAnchor='start'
                  fontSize={numberFontSize ? numberFontSize * 0.4 : 12}
                  fontFamily='RiftSoft-Demi'
                  dx={1}
                  dy={1}>
                  %
                </SvgText>
              )}

              {/* Number and percentage in white */}
              <SvgText
                x={calculateTextPosition().x}
                y={calculateTextPosition().y}
                fill='white'
                textAnchor='middle'
                fontSize={numberFontSize}
                fontFamily='RiftSoft-Demi'>
                {number}
              </SvgText>
              {showPercentage && (
                <SvgText
                  x={calculateTextPosition().x + (number === 100 ? 22 : 18)}
                  y={calculateTextPosition().y - 10}
                  fill='white'
                  textAnchor='start'
                  fontSize={numberFontSize ? numberFontSize * 0.4 : 12}
                  fontFamily='RiftSoft-Demi'>
                  %
                </SvgText>
              )}
            </>
          )}

          {/* Title with shadow effect */}
          {title === "OVERALL" ? (
            <>
              {isFilledSectorVisible || !onBoarding ? (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={
                      angle === 180
                        ? calculateTextPosition().y - 60
                        : calculateTextPosition().y + 15
                    }
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"OVERALL"}
                  </SvgText>
                </>
              ) : (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y - 30}
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"YOUR OVERALL"}
                  </SvgText>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y - 10}
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"HEALTH SCORE"}
                  </SvgText>
                </>
              )}
            </>
          ) : title === "RECOVERY" ? (
            <>
              {isFilledSectorVisible || !onBoarding ? (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={
                      angle === 180
                        ? calculateTextPosition().y - 60
                        : calculateTextPosition().y + 15
                    }
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"RECOVERY"}
                  </SvgText>
                </>
              ) : (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y - 5}
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"RECOVERY"}
                  </SvgText>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y + 8}
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"PERCENTAGE"}
                  </SvgText>
                </>
              )}
            </>
          ) : title === "SLEEP" ? (
            <>
              {isFilledSectorVisible || !onBoarding ? (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={
                      angle === 180
                        ? calculateTextPosition().y - 60
                        : calculateTextPosition().y + 15
                    }
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"SLEEP"}
                  </SvgText>
                </>
              ) : (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y - 5}
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"SLEEP"}
                  </SvgText>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y + 10}
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"PERCENTAGE"}
                  </SvgText>
                </>
              )}
            </>
          ) : title === "STRAIN" ? (
            <>
              {isFilledSectorVisible || !onBoarding ? (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={
                      angle === 180
                        ? calculateTextPosition().y - 60
                        : calculateTextPosition().y + 15
                    }
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"STRAIN"}
                  </SvgText>
                </>
              ) : (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y - 5}
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"STRAIN"}
                  </SvgText>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().x}
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"PERCENTAGE"}
                  </SvgText>
                </>
              )}
            </>
          ) : title === "EXERCISE" ? (
            <>
              {isFilledSectorVisible || !onBoarding ? (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={
                      angle === 180
                        ? calculateTextPosition().y - 60
                        : calculateTextPosition().y + 15
                    }
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"EXERCISE"}
                  </SvgText>
                </>
              ) : (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y - 5}
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"EXERCISE"}
                  </SvgText>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y + 10}
                    fill='black'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"PERCENTAGE"}
                  </SvgText>
                </>
              )}
            </>
          ) : (
            <SvgText
              x={calculateTextPosition().x}
              y={
                angle === 180
                  ? calculateTextPosition().y - 60
                  : calculateTextPosition().y + 15
              }
              fill='black'
              textAnchor='middle'
              fontSize={titleFontSize}
              fontFamily='RiftSoft-Medium'
              dx={1}
              dy={1}>
              {title}
            </SvgText>
          )}

          {/* Title in white */}
          {title === "OVERALL" ? (
            <>
              {isFilledSectorVisible || !onBoarding ? (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={
                      angle === 180
                        ? calculateTextPosition().y - 60
                        : calculateTextPosition().y + 15
                    }
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"OVERALL"}
                  </SvgText>
                </>
              ) : (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y - 30}
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"YOUR OVERALL"}
                  </SvgText>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y - 10}
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"HEALTH SCORE"}
                  </SvgText>
                </>
              )}
            </>
          ) : title === "RECOVERY" ? (
            <>
              {isFilledSectorVisible || !onBoarding ? (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={
                      angle === 180
                        ? calculateTextPosition().y - 60
                        : calculateTextPosition().y + 15
                    }
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"RECOVERY"}
                  </SvgText>
                </>
              ) : (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y - 5}
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"RECOVERY"}
                  </SvgText>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y + 10}
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"PERCENTAGE"}
                  </SvgText>
                </>
              )}
            </>
          ) : title === "SLEEP" ? (
            <>
              {isFilledSectorVisible || !onBoarding ? (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={
                      angle === 180
                        ? calculateTextPosition().y - 60
                        : calculateTextPosition().y + 15
                    }
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"SLEEP"}
                  </SvgText>
                </>
              ) : (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y - 5}
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"SLEEP"}
                  </SvgText>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y + 10}
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"PERCENTAGE"}
                  </SvgText>
                </>
              )}
            </>
          ) : title === "STRAIN" ? (
            <>
              {isFilledSectorVisible || !onBoarding ? (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={
                      angle === 180
                        ? calculateTextPosition().y - 60
                        : calculateTextPosition().y + 15
                    }
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"STRAIN"}
                  </SvgText>
                </>
              ) : (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y - 5}
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"STRAIN"}
                  </SvgText>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().x}
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'
                    dx={1}
                    dy={1}>
                    {"PERCENTAGE"}
                  </SvgText>
                </>
              )}
            </>
          ) : title === "EXERCISE" ? (
            <>
              {isFilledSectorVisible || !onBoarding ? (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={
                      angle === 180
                        ? calculateTextPosition().y - 60
                        : calculateTextPosition().y + 15
                    }
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"EXERCISE"}
                  </SvgText>
                </>
              ) : (
                <>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y - 5}
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"EXERCISE"}
                  </SvgText>
                  <SvgText
                    x={calculateTextPosition().x}
                    y={calculateTextPosition().y + 10}
                    fill='white'
                    textAnchor='middle'
                    fontSize={titleFontSize}
                    fontFamily='RiftSoft-Demi'>
                    {"PERCENTAGE"}
                  </SvgText>
                </>
              )}
            </>
          ) : (
            <SvgText
              x={calculateTextPosition().x}
              y={
                angle === 180
                  ? calculateTextPosition().y - 60
                  : calculateTextPosition().y + 15
              }
              fill='white'
              textAnchor='middle'
              fontSize={titleFontSize}
              fontFamily='RiftSoft-Medium'>
              {title}
            </SvgText>
          )}
        </G>
      </Svg>
    </View>
  );
};

export default SpokeComponent;
