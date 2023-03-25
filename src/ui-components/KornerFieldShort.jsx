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
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function KornerFieldShort(props) {
  const { fields, overrides, ...rest } = props;
  const kornerFieldShortOnClick = useNavigateAction({
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
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
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
        src={fields?.photo}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="15px"
        direction="column"
        width="320px"
        height="122px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="98px"
        left="0px"
        padding="0px 0px 0px 10px"
        backgroundColor="rgba(0,0,0,0.5)"
        {...getOverrideProps(overrides, "details")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="320px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={fields?.name}
          {...getOverrideProps(overrides, "name")}
        ></Text>
        <Flex
          gap="13px"
          direction="row"
          width="204.28px"
          height="25px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 13px"
          {...getOverrideProps(overrides, "address37333244")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon37333245")}
          >
            <Icon
              width="25px"
              height="25px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 25.001922607421875,
                height: 25,
              }}
              paths={[
                {
                  d: "M12.1695 6.48566L4.16732 14.9604L4.16732 24.107C4.16732 24.3439 4.24048 24.571 4.37072 24.7385C4.50095 24.9059 4.67758 25 4.86176 25L9.72548 24.9838C9.90905 24.9826 10.0848 24.888 10.2143 24.7207C10.3438 24.5534 10.4165 24.3269 10.4164 24.0909L10.4164 18.7493C10.4164 18.5125 10.4896 18.2853 10.6198 18.1179C10.7501 17.9504 10.9267 17.8563 11.1109 17.8563L13.8887 17.8563C14.0728 17.8563 14.2495 17.9504 14.3797 18.1179C14.51 18.2853 14.5831 18.5125 14.5831 18.7493L14.5831 24.087C14.5828 24.2045 14.6006 24.3209 14.6354 24.4295C14.6701 24.5382 14.7212 24.637 14.7857 24.7202C14.8503 24.8034 14.9269 24.8694 15.0113 24.9145C15.0957 24.9595 15.1862 24.9827 15.2776 24.9827L20.1395 25C20.3237 25 20.5004 24.9059 20.6306 24.7385C20.7608 24.571 20.834 24.3439 20.834 24.107L20.834 14.9542L12.8335 6.48566C12.7395 6.38817 12.6223 6.33501 12.5015 6.33501C12.3807 6.33501 12.2635 6.38817 12.1695 6.48566ZM24.8097 12.2458L21.1812 8.39993L21.1812 0.669718C21.1812 0.492097 21.1263 0.321752 21.0287 0.196156C20.931 0.0705595 20.7985 0 20.6604 0L18.2298 0C18.0917 0 17.9592 0.0705595 17.8615 0.196156C17.7639 0.321752 17.709 0.492097 17.709 0.669718L17.709 4.72207L13.8231 0.611117C13.4502 0.21653 12.9823 0.000788785 12.4993 0.000788785C12.0164 0.000788785 11.5485 0.21653 11.1756 0.611117L0.189019 12.2458C0.136279 12.3018 0.0926449 12.3707 0.0606102 12.4484C0.0285755 12.5262 0.00876769 12.6113 0.00231864 12.6989C-0.0041304 12.7865 0.00290567 12.8748 0.0230248 12.9589C0.043144 13.043 0.0759519 13.1212 0.119574 13.189L1.22634 14.9191C1.26985 14.9871 1.32336 15.0434 1.38381 15.0848C1.44426 15.1262 1.51047 15.1519 1.57864 15.1603C1.64681 15.1688 1.71561 15.1598 1.7811 15.1341C1.84659 15.1083 1.90748 15.0661 1.96029 15.01L12.1695 4.19746C12.2635 4.09997 12.3807 4.04681 12.5015 4.04681C12.6223 4.04681 12.7395 4.09997 12.8335 4.19746L23.0432 15.01C23.0959 15.0661 23.1567 15.1083 23.2221 15.1342C23.2875 15.1601 23.3562 15.1691 23.4243 15.1608C23.4924 15.1525 23.5586 15.1271 23.6191 15.0859C23.6795 15.0447 23.7331 14.9886 23.7767 14.9208L24.8835 13.1906C24.927 13.1225 24.9597 13.0439 24.9796 12.9594C24.9995 12.875 25.0062 12.7863 24.9993 12.6985C24.9925 12.6107 24.9722 12.5255 24.9396 12.4478C24.9071 12.3701 24.8629 12.3015 24.8097 12.2458Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector37333246")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="800"
            color="rgba(255,255,255,1)"
            lineHeight="20px"
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
            {...getOverrideProps(overrides, "address37333247")}
          ></Text>
        </Flex>
        <Flex
          gap="13px"
          direction="row"
          width="116.73px"
          height="25px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 13px"
          {...getOverrideProps(overrides, "price37333248")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon37333249")}
          >
            <Icon
              width="25px"
              height="25px"
              viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
              paths={[
                {
                  d: "M0 19.79L0 21.875C0 23.5986 4.19922 25 9.375 25C14.5508 25 18.75 23.5986 18.75 21.875L18.75 19.79C16.7334 21.2109 13.0469 21.875 9.375 21.875C5.70312 21.875 2.0166 21.2109 0 19.79ZM15.625 6.25C20.8008 6.25 25 4.84863 25 3.125C25 1.40137 20.8008 0 15.625 0C10.4492 0 6.25 1.40137 6.25 3.125C6.25 4.84863 10.4492 6.25 15.625 6.25ZM0 14.668L0 17.1875C0 18.9111 4.19922 20.3125 9.375 20.3125C14.5508 20.3125 18.75 18.9111 18.75 17.1875L18.75 14.668C16.7334 16.3281 13.042 17.1875 9.375 17.1875C5.70801 17.1875 2.0166 16.3281 0 14.668ZM20.3125 15.2051C23.1104 14.6631 25 13.6572 25 12.5L25 10.415C23.8672 11.2158 22.2021 11.7627 20.3125 12.0996L20.3125 15.2051ZM9.375 7.8125C4.19922 7.8125 0 9.56055 0 11.7188C0 13.877 4.19922 15.625 9.375 15.625C14.5508 15.625 18.75 13.877 18.75 11.7188C18.75 9.56055 14.5508 7.8125 9.375 7.8125ZM20.083 10.5615C23.0127 10.0342 25 8.99902 25 7.8125L25 5.72754C23.2666 6.95312 20.2881 7.61231 17.1533 7.76856C18.5938 8.4668 19.6533 9.4043 20.083 10.5615Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector37333250")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="800"
            color="rgba(255,255,255,1)"
            lineHeight="20px"
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
            children={`${fields?.price}${"\u20AC/sat"}`}
            {...getOverrideProps(overrides, "price37333251")}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
