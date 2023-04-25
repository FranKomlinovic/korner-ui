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
export default function KornerFieldInfoNew(props) {
  const { fields, photo, surface, sports, overrides, ...rest } = props;
  const kornerFieldInfoNewOnClick = useNavigateAction({
    type: "url",
    url: `${"/fields/"}${fields?.id}`,
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
      onClick={() => {
        kornerFieldInfoNewOnClick();
      }}
      {...getOverrideProps(overrides, "KornerFieldInfoNew")}
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
        height="118px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="102px"
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
            children={fields?.name}
            {...getOverrideProps(overrides, "name")}
          ></Text>
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
            children={fields?.address}
            {...getOverrideProps(overrides, "address")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 10px 0px 10px"
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
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
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
              children={surface}
              {...getOverrideProps(overrides, "surface")}
            ></Text>
            <Text
              fontFamily="Arial"
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
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
              children={sports}
              {...getOverrideProps(overrides, "sports")}
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
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
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
              children={`${fields?.price}${"\u20AC/sat"}`}
              {...getOverrideProps(overrides, "price")}
            ></Text>
            <Text
              fontFamily="Arial"
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
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
              children={`${fields?.minPlayers}${" igra\u010Da"}`}
              {...getOverrideProps(overrides, "numberOfPeople")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
