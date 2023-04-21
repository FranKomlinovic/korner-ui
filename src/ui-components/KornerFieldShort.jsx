/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
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
        gap="15px"
        direction="column"
        width="320px"
        height="104px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="116px"
        left="0px"
        padding="0px 5px 0px 5px"
        backgroundColor="rgba(9,12,9,0.47)"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Text
          fontFamily="Arial"
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="25px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="34px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={fields?.name}
          {...getOverrideProps(overrides, "name")}
        ></Text>
        <Flex
          gap="50px"
          direction="row"
          width="unset"
          height="16px"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 10px 0px 0px"
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
            children={`${appointment?.start}${" - "}${appointment?.end}`}
            {...getOverrideProps(overrides, "date")}
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
            children={`${"Broj Igra\u010Da:"}${responseNumber}${"/"}${
              fields?.minPlayers
            }`}
            {...getOverrideProps(overrides, "organizator")}
          ></Text>
        </Flex>
        <Flex
          gap="50px"
          direction="row"
          width="unset"
          height="21px"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 10px 0px 0px"
          {...getOverrideProps(overrides, "Frame2")}
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
            children={date}
            {...getOverrideProps(overrides, "time")}
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
            children={appointment?.bookerName}
            {...getOverrideProps(overrides, "numberOfPeople")}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
