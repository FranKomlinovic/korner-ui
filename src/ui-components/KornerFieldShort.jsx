/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function KornerFieldShort(props) {
  const {
    photo,
    date,
    time,
    fields,
    appointment,
    fon,
    responseNumber,
    overrides,
    ...rest
  } = props;
  const kornerFieldShortOnClick = useNavigateAction({
    type: "url",
    url: `${"/appointment/"}${appointment?.id}`,
  });
  return (
    <View
      width="320px"
      height="220px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="9px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      fontFamily="Arial"
      onClick={() => {
        kornerFieldShortOnClick();
      }}
      {...getOverrideProps(overrides, "KornerFieldShort")}
      {...rest}
    >
      <Image
        width="320px"
        height="220px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={photo}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="5px"
        direction="column"
        width="320px"
        height="104px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="116px"
        left="0px"
        padding="0px 5px 0px 5px"
        backgroundColor="rgba(9,12,9,0.47)"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Flex
          gap="3px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 3")}
        >
          <Text
            fontFamily="Arial"
            fontSize="16px"
            fontWeight="800"
            color="rgba(255,255,255,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={date}
            {...getOverrideProps(overrides, "date")}
          ></Text>
          <Text
            fontFamily="Arial"
            fontSize="20px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="25px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${appointment?.start}${" - "}${appointment?.end}`}
            {...getOverrideProps(overrides, "time")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="47px"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="4px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 4")}
        >
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame1")}
          >
            <Text
              fontFamily="Arial"
              fontSize="14px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="21px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={fields?.name}
              {...getOverrideProps(overrides, "fieldName")}
            ></Text>
            <Text
              fontFamily="Arial"
              fontSize="14px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="21px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={fields?.address}
              {...getOverrideProps(overrides, "fieldAddress")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-end"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame2")}
          >
            <Text
              fontFamily="Arial"
              fontSize="14px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="21px"
              textAlign="right"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={appointment?.bookerName}
              {...getOverrideProps(overrides, "organizator")}
            ></Text>
            <Text
              fontFamily="Arial"
              fontSize="14px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="21px"
              textAlign="right"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${responseNumber}${"/"}${fields?.minPlayers}`}
              {...getOverrideProps(overrides, "numberOfPeople")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
