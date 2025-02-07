import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { SpokeMeter } from "../../components/common/SpokeMeter";
import Svg, { Path } from "react-native-svg";
import { Share } from "lucide-react-native";
import { StakeRing } from "@/components/ui/newui/StakeRing";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: "#000000",
      }}>
      <ScrollView className='pb-5 ' showsVerticalScrollIndicator={false}>
        <View className='px-4'>
          <View className='flex justify-center items-center bg-black border border-[#7a7777] rounded-xl w-full max-w-[500px] self-center'>
            <View className='flex flex-row w-full justify-between items-start z-10'>
              <View className='flex justify-start ml-4 my-2'>
                <Text className='text-white font-rift-demi text-3xl self-start pb-1'>
                  YOUR HEALTH
                </Text>
              </View>
              {isExpanded && (
                <TouchableOpacity
                  onPress={() => {
                    setIsExpanded(!isExpanded);
                  }}
                  className='flex flex-row items-center justify-center px-4 py-2'>
                  <Text className='text-white font-rift-demi text-xs'>
                    COLLAPSE
                  </Text>
                  <Svg
                    width={10}
                    height={6}
                    viewBox='0 0 12 8'
                    style={{ marginLeft: 4 }}>
                    <Path d={"M6 0L0 8L12 8L6 0Z"} fill={"white"} />
                  </Svg>
                </TouchableOpacity>
              )}
            </View>
            <View className='flex w-[320px] h-[280px]'>
              <SpokeMeter
                showAllSections={isExpanded}
                overallScore={78}
                firstTitle='RECOVERY'
                firstTitleScore={25}
                firstTitleValue={25}
                firstTitleIsPercentage={true}
                secondTitle='SLEEP'
                secondTitleScore={55}
                secondTitleValue={55}
                secondTitleIsPercentage={true}
                thirdTitle='EXERCISE'
                thirdTitleScore={62}
                thirdTitleValue={62}
                thirdTitleIsPercentage={true}
                onBoarding={false}
              />
            </View>

            {isExpanded && (
              <View className='flex flex-row justify-end items-center w-full mr-10 -mt-8'>
                <TouchableOpacity className='p-2 flex flex-row justify-center items-center bg-[#393939] rounded-full'>
                  <Share color='#9C9C9C' size={15} />
                </TouchableOpacity>
              </View>
            )}

            <View
              className={`flex justify-start w-full mb-2 ${
                isExpanded ? "-mt-0" : "-mt-36"
              } `}>
              <TouchableOpacity
                className={`flex flex-row justify-center items-center border ${
                  isExpanded
                    ? "mt-5 mb-2 bg-brandaccent/20  mx-14"
                    : "m-2 bg-brandaccent/20  mx-12"
                }  border-brandStroke  rounded-2xl `}
                onPress={() => setIsExpanded(!isExpanded)}>
                <View className='flex flex-row items-center justify-center px-4 py-1 '>
                  <Text
                    className={`${
                      isExpanded ? "text-white" : "text-white"
                    } font-montserrat text-[10px] font-bold py-[2px]`}>
                    {isExpanded ? "HEALTH DETAILS" : "HEALTH DETAILS"}
                  </Text>
                  <Svg
                    width={10}
                    height={6}
                    viewBox='0 0 12 8'
                    style={{ marginLeft: 8 }}>
                    <Path
                      d={
                        isExpanded ? "M6 0L0 8L12 8L6 0Z" : "M6 8L0 0L12 0L6 8Z"
                      }
                      fill={isExpanded ? "white" : "white"}
                    />
                  </Svg>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* <StakeRing
          amount={Number(20)}
          strokeWidth={10}
          ringSize={110}
          activeColor={"#00FFBB"}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
