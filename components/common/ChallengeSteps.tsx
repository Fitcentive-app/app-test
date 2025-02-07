import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { SvgProps } from "react-native-svg";
import { GoalSvg } from "../icons/goalsvg";
import { AwardSvg } from "../icons/awardSvg";
import { FriendSvg } from "../icons/friendsSvg";
import { MoneySvg } from "../icons/moneySvg";
import { SmallLogo } from "../icons/smallLogo";
import { ConnectWatch } from "../icons/connectWatch";
import GreenGradient from "../ui/newui/greenGradient";

const ChallengeChecklist = ({
  stepTitle,
  onPress,
  onPressSecondary,
  buttonTitle,
  selectedItem,
  isGroupChallenge,
  isIntro,
}: {
  stepTitle: string;
  onPress: () => void;
  onPressSecondary?: () => void;
  buttonTitle: string;
  selectedItem: number;
  isGroupChallenge?: boolean;
  isIntro?: boolean;
}) => {
  const { height } = Dimensions.get("window");
  return (
    <View className='flex-1 w-full'>
      <View className='my-8 px-4'>
        <View className='flex-row items-center mb-2 justify-center'>
          <SmallLogo />
        </View>
        <Text className='text-5xl font-rift-demi text-center text-brandprimary'>
          {isIntro ? "GETTING STARTED" : "CONGRATS !"}
        </Text>
        <Text className='text-5xl -mt-[6px] font-rift-demi text-center text-white'>
          {isIntro
            ? "IS EASY!"
            : `YOUR ${isGroupChallenge ? "GROUP" : "HEALTH"} GOALS`}
        </Text>
      </View>

      <View className='flex-1 '>
        <View className='w-full flex items-center justify-center px-4 gap-y-1'>
          <CheckListItem
            isSelected={selectedItem === 1}
            title='CONNECT YOUR DEVICE'
            SVGIcon={ConnectWatch}
            index={1}
          />
          <CheckListItem
            isSelected={selectedItem === 2}
            title={isGroupChallenge ? "INVITE FRIENDS" : "COMPLETE CHALLENGE"}
            SVGIcon={isGroupChallenge ? FriendSvg : AwardSvg}
            index={2}
          />
          <CheckListItem
            isSelected={selectedItem === 3}
            title={
              isGroupChallenge ? "START CHALLENGE" : "ADD MONEY & SPONSORS"
            }
            SVGIcon={isGroupChallenge ? AwardSvg : FriendSvg}
            index={3}
          />
          <CheckListItem
            isSelected={selectedItem === 4}
            title='EARN MONEY'
            SVGIcon={MoneySvg}
            index={4}
          />
        </View>
      </View>

      {!isIntro && (
        <View className={`px-8 mt-8 ${height < 700 ? "flex-row gap-x-4" : ""}`}>
          <TouchableOpacity
            onPress={onPress}
            className={`bg-brandprimary flex items-center justify-center rounded-full mt-4 ${
              height < 700 ? "flex-1 py-2" : "w-full p-4"
            }`}>
            <Text
              className={`text-black justify-center items-center font-monteserrat text-center ${
                height < 700 ? "text-[11px]" : "text-md"
              } font-bold`}>
              {buttonTitle}
            </Text>
          </TouchableOpacity>

          {selectedItem === 1 && (
            <TouchableOpacity
              onPress={onPressSecondary}
              className={`bg-brandprimary flex justify-center items-center  rounded-full mt-4 ${
                height < 700 ? "flex-1 py-2" : "w-full p-4"
              }`}>
              <Text
                className={`text-black justify-center items-center font-monteserrat text-center ${
                  height < 700 ? "text-[11px]" : "text-md"
                } font-bold`}>
                SHARE CHALLENGE
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const CheckListItem = ({
  isSelected,
  title,
  SVGIcon,
  index,
}: {
  isSelected: boolean;
  title: string;
  SVGIcon: React.FC<SvgProps>;
  index: number;
}) => {
  const Icon = SVGIcon;

  return (
    <View className='w-[80%] max-w-2xl flex-row items-center py-2 justify-between mt-2'>
      <View
        className={`w-10 h-10 rounded-full border ${
          isSelected
            ? "bg-brandprimary"
            : "bg-transparent border-gray-400 border-2"
        } flex items-center justify-center`}>
        <Text
          className={`text-xl font-monteserrat font-bold ${
            isSelected ? "text-black" : "text-white"
          }`}>
          {index}
        </Text>
      </View>
      {isSelected ? (
        <View className='mx-6'>
          <GreenGradient
            size={65}
            circleSize={50}
            strokeSize={8}
            IconSvg={Icon}
            marginBottom={18}
            left={5}
          />
        </View>
      ) : (
        <View className='mx-6 bg-transparent rounded-full p-4 border-2 border-gray-400'>
          <Icon width={40} height={40} fill='#d8d8d8' />
        </View>
      )}
      <View className='flex-1'>
        <Text
          className={`text-start text-3xl font-rift-demi uppercase ${
            isSelected ? "text-brandprimary" : "text-gray-400"
          }`}
          numberOfLines={2}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default ChallengeChecklist;
