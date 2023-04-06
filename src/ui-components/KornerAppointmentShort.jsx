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
export default function KornerAppointmentShort(props) {
  const { appointment, date, status, photo, overrides, ...rest } = props;
  const kornerAppointmentShortOnClick = useNavigateAction({
    type: "url",
    url: `${"appointment/"}${appointment?.id}`,
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
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        kornerAppointmentShortOnClick();
      }}
      {...getOverrideProps(overrides, "KornerAppointmentShort")}
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
        height="220px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(34,66,38,0.7)"
        {...getOverrideProps(overrides, "details")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="310px"
          height="61px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={appointment?.fieldName}
          {...getOverrideProps(overrides, "name")}
        ></Text>
        <Text
          fontFamily="Inter"
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
          children={date}
          {...getOverrideProps(overrides, "date")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="40px"
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
        <Text
          fontFamily="Inter"
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
          children={appointment?.bookerName}
          {...getOverrideProps(overrides, "organizer")}
        ></Text>
      </Flex>
    </View>
  );
}
