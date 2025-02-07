import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import IconGradient from "@/components/ui/newui/iconGradient";

const Friends = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: "#000",
      }}>
      <View className='h-[200px]' />
      <View className='w-[393px] h-[200px] -mt-12'>
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/a16b/b3cc/89541ce3c27b79db09431b7accb58abc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mwCpG-ucj1HL2yJgPgyxabSiDeD57GgStzceUIdM4hEj47HsN2dX12oR1QhzRHW4O7D1gR~wCzo4vqE2fztQseoSy0RYcRsT2TtV9GjFjE-9XTay8blC6THhO1eC7O6UtoNLVUtKkhHiG0~EWTU2KnsCq9jdRgQes4oj6Q85QJYE427vyndsRqM6vCOYTTAK4fLJ5OOCIPlQPPns77SGTCIXV1YYkQKiJHP1q99ot4plxLGy7Fot~m4D-ddbXfCOKQUUVpMtt0y372Uqf-nQN98Ce81b3YwVmgp6OkU7mr1i-7juSP1sc0iktLqjsi2Eiv4iS4s3BjFiUck04ts2uQ__",
          }}
          className='w-full h-full absolute'
          style={{
            opacity: 0.2,
            overlayColor: "black",
            backgroundColor: "#000000",
            width: 393,
            height: 200,
          }}
        />
        <View className='absolute w-full h-full bg-black opacity-10' />
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.95)", "rgba(0, 0, 0, 0)"]}
          locations={[0, 0.8]}
          style={{ width: "100%", height: "100%" }}
        />

        <View className='absolute top-[60px] -left-[100px] w-full h-full z-50'>
          <TouchableOpacity
            // onPress={handleImagePick}
            // disabled={isUploading || isRemoving}
            className='relative'>
            <IconGradient
              size={124}
              strokeSize={10}
              circleSize={120}
              marginBottom={0}
              left={0}
              isImage={true}
              imageSource={
                "https://s3-alpha-sig.figma.com/img/a16b/b3cc/89541ce3c27b79db09431b7accb58abc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mwCpG-ucj1HL2yJgPgyxabSiDeD57GgStzceUIdM4hEj47HsN2dX12oR1QhzRHW4O7D1gR~wCzo4vqE2fztQseoSy0RYcRsT2TtV9GjFjE-9XTay8blC6THhO1eC7O6UtoNLVUtKkhHiG0~EWTU2KnsCq9jdRgQes4oj6Q85QJYE427vyndsRqM6vCOYTTAK4fLJ5OOCIPlQPPns77SGTCIXV1YYkQKiJHP1q99ot4plxLGy7Fot~m4D-ddbXfCOKQUUVpMtt0y372Uqf-nQN98Ce81b3YwVmgp6OkU7mr1i-7juSP1sc0iktLqjsi2Eiv4iS4s3BjFiUck04ts2uQ__"
              }
              isBlackBackground={false}
              imageTop={18}
              imageLeft={135}
            />
          </TouchableOpacity>
        </View>

        <View className='absolute top-[82px] left-[190px] w-full h-full z-50'>
          <Text className='text-white text-[36px] font-rift-demi'>
            {"ELLIS"}
          </Text>
          {/* {userWhoopData?.name?.split(" ")[1] && ( */}
          <Text className='text-white text-[36px] font-rift-demi -mt-3'>
            {"OSBORN"}
          </Text>
          {/* )} */}
          <Text className='text-[#DBDBDB] text-[16px] font-rift-demi -mt-1'>
            MEMBER SINCE 2019
            {/* {userWhoopData?.createdAt && */}
            {/* new Date(userWhoopData.createdAt).getFullYear()} */}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Friends;
