import React from "react";
import { View, Image } from "react-native";
import SpokeComponent from "../common/Spoke";
import FCRounded from "../../assets/images/fc_rounded.png";

interface SpokeMeterProps {
  showAllSections: boolean;
  overallScore: number;
  firstTitle?: string;
  firstTitleScore?: number;
  firstTitleValue?: number;
  firstTitleIsPercentage?: boolean;
  secondTitle?: string;
  secondTitleScore?: number;
  secondTitleValue?: number;
  secondTitleIsPercentage?: boolean;
  thirdTitle?: string;
  thirdTitleScore?: number;
  thirdTitleValue?: number;
  thirdTitleIsPercentage?: boolean;
  onBoarding?: boolean;
  onboardingStep?: number;
  size?: number;
}

export const SpokeMeter: React.FC<SpokeMeterProps> = ({
  showAllSections,
  overallScore,
  thirdTitleScore,
  secondTitleScore,
  firstTitleScore,
  firstTitle,
  secondTitle,
  thirdTitle,
  firstTitleValue,
  secondTitleValue,
  thirdTitleValue,
  firstTitleIsPercentage,
  secondTitleIsPercentage,
  thirdTitleIsPercentage,
  onBoarding = false,
  onboardingStep = 4,
  size = 500,
}) => {
  return (
    <View className="w-full flex items-center justify-center">
      <View style={{ width: size, height: size }} className="-m-32">
        <View className="absolute -bottom-1 -right-3">
          <SpokeComponent
            title="OVERALL"
            number={overallScore}
            value={overallScore}
            titleFontSize={20}
            numberFontSize={75}
            size={size + 20}
            angle={180}
            rotation={-91}
            activeColor={
              overallScore >= 75
                ? "#8EFFA3"
                : overallScore >= 50 && overallScore <= 75
                ? "#FFB753"
                : "#FF3737"
            }
            totalDots={7}
            onBoarding={onBoarding}
            onboardingStep={onboardingStep}
            isFilledSectorVisible={
              onBoarding && onboardingStep >= 1 ? true : false
            }
          />
        </View>

        {showAllSections && (
          <>
            <View className="absolute left-1.5 top-0">
              <SpokeComponent
                title={thirdTitle}
                number={thirdTitleScore!}
                value={thirdTitleValue!}
                showPercentage={thirdTitleIsPercentage}
                titleFontSize={14}
                numberFontSize={45}
                size={size}
                angle={61}
                rotation={29}
                activeColor={
                  thirdTitleValue! >= 75
                    ? "#8EFFA3"
                    : thirdTitleValue! >= 50 && thirdTitleValue! <= 75
                    ? "#FFB753"
                    : "#FF3737"
                }
                totalDots={3}
                onBoarding={onBoarding}
                onboardingStep={onboardingStep}
                isFilledSectorVisible={
                  onBoarding && onboardingStep >= 4 ? true : false
                }
              />
            </View>
            <View className="absolute left-0 top-1">
              <SpokeComponent
                title={secondTitle}
                number={secondTitleScore!}
                value={secondTitleValue!}
                showPercentage={secondTitleIsPercentage}
                titleFontSize={15}
                numberFontSize={40}
                size={size}
                angle={61}
                rotation={89}
                activeColor={
                  secondTitleValue! >= 75
                    ? "#8EFFA3"
                    : secondTitleValue! >= 50 && secondTitleValue! <= 75
                    ? "#FFB753"
                    : "#FF3737"
                }
                totalDots={3}
                onBoarding={onBoarding}
                onboardingStep={onboardingStep}
                isFilledSectorVisible={
                  onBoarding && onboardingStep >= 3 ? true : false
                }
              />
            </View>
            <View className="absolute left-0 top-0 right-3">
              <SpokeComponent
                title={firstTitle}
                number={firstTitleScore!}
                value={firstTitleValue!}
                showPercentage={firstTitleIsPercentage}
                titleFontSize={15}
                numberFontSize={40}
                size={size}
                angle={61}
                rotation={149}
                activeColor={
                  firstTitleValue! >= 75
                    ? "#8EFFA3"
                    : firstTitleValue! >= 50 && firstTitleValue! <= 75
                    ? "#FFB753"
                    : "#FF3737"
                }
                totalDots={3}
                onBoarding={onBoarding}
                onboardingStep={onboardingStep}
                isFilledSectorVisible={
                  onBoarding && onboardingStep >= 2 ? true : false
                }
              />
            </View>
          </>
        )}

        {/* Center black circle */}
        <View
          className="absolute"
          style={{
            width: 25,
            height: 25,
            backgroundColor: "black",
            borderRadius: 12.5,
            top: "49.5%",
            left: "50%",
            transform: [{ translateX: -12.5 }, { translateY: -12.5 }],
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 8,
            elevation: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={FCRounded}
            style={{
              width: 22,
              height: 22,
              borderRadius: 100,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 1,
              shadowRadius: 20,
            }}
          />
        </View>
      </View>
    </View>
  );
};
