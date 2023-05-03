/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function KornerResponseUser(props) {
  const { icon, name, time, id, photo, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "KornerResponseUser")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="320px"
        height="39px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="6px"
          direction="row"
          width="310px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 8px"
          {...getOverrideProps(overrides, "Frame")}
        >
          <Image
            width="39px"
            height="unset"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="64px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={photo}
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Text
            fontFamily="Arial"
            fontSize="20px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={name}
            {...getOverrideProps(overrides, "test37113016")}
          ></Text>
          <Text
            fontFamily="Arial"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="21px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="47px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={time}
            {...getOverrideProps(overrides, "test37113025")}
          ></Text>
          <View
            width="19px"
            height="19px"
            children={icon}
            {...getOverrideProps(overrides, "Icon")}
          ></View>
        </Flex>
      </Flex>
    </Flex>
  );
}
