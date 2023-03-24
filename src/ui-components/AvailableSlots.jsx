/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, View } from "@aws-amplify/ui-react";
export default function AvailableSlots(props) {
  const { appointment, overrides, ...rest } = props;
  return (
    <View
      width="132px"
      height="42px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AvailableSlots")}
      {...rest}
    >
      <Button
        width="126px"
        height="35px"
        position="absolute"
        top="3px"
        left="3px"
        size="small"
        isDisabled={false}
        variation="default"
        backgroundColor={
          appointment?.confirmed && appointment?.confirmed == true
            ? "yellow"
            : "green"
        }
        children={`${appointment?.start}${" - "}${appointment?.end}`}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
