/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, TextField } from "@aws-amplify/ui-react";
export default function KornerCreateResponse(props) {
  const { name, overrides, ...rest } = props;
  return (
    <Flex
      gap="22px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="11px 10px 11px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "KornerCreateResponse")}
      {...rest}
    >
      <TextField
        width="300px"
        height="unset"
        label="Ime"
        placeholder="Pero Perić"
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        defaultValue={name}
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <Flex
        gap="37px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Dolazim"
          {...getOverrideProps(overrides, "Button37123040")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="link"
          children="Ne Dolazim"
          {...getOverrideProps(overrides, "Button37123045")}
        ></Button>
      </Flex>
    </Flex>
  );
}
