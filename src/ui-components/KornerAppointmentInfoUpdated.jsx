/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function KornerAppointmentInfoUpdated(props) {
  const {
    fields,
    time,
    pricePerPerson,
    acceptedNumber,
    sport,
    appointment,
    duration,
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="320px"
      height="324px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "KornerAppointmentInfoUpdated")}
      {...rest}
    >
      <Image
        width="320px"
        height="263px"
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
        gap="13px"
        direction="row"
        width="320px"
        height="48px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="276px"
        left="0px"
        padding="0px 0px 10px 13px"
        {...getOverrideProps(overrides, "timeGroup")}
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
          {...getOverrideProps(overrides, "Icon37502895")}
        >
          <Icon
            width="21.88px"
            height="25px"
            viewBox={{ minX: 0, minY: 0, width: 21.875, height: 25 }}
            paths={[
              {
                d: "M0 22.6562C0 23.9502 1.0498 25 2.34375 25L19.5312 25C20.8252 25 21.875 23.9502 21.875 22.6562L21.875 9.375L0 9.375L0 22.6562ZM15.625 13.0859C15.625 12.7637 15.8887 12.5 16.2109 12.5L18.1641 12.5C18.4863 12.5 18.75 12.7637 18.75 13.0859L18.75 15.0391C18.75 15.3613 18.4863 15.625 18.1641 15.625L16.2109 15.625C15.8887 15.625 15.625 15.3613 15.625 15.0391L15.625 13.0859ZM15.625 19.3359C15.625 19.0137 15.8887 18.75 16.2109 18.75L18.1641 18.75C18.4863 18.75 18.75 19.0137 18.75 19.3359L18.75 21.2891C18.75 21.6113 18.4863 21.875 18.1641 21.875L16.2109 21.875C15.8887 21.875 15.625 21.6113 15.625 21.2891L15.625 19.3359ZM9.375 13.0859C9.375 12.7637 9.63867 12.5 9.96094 12.5L11.9141 12.5C12.2363 12.5 12.5 12.7637 12.5 13.0859L12.5 15.0391C12.5 15.3613 12.2363 15.625 11.9141 15.625L9.96094 15.625C9.63867 15.625 9.375 15.3613 9.375 15.0391L9.375 13.0859ZM9.375 19.3359C9.375 19.0137 9.63867 18.75 9.96094 18.75L11.9141 18.75C12.2363 18.75 12.5 19.0137 12.5 19.3359L12.5 21.2891C12.5 21.6113 12.2363 21.875 11.9141 21.875L9.96094 21.875C9.63867 21.875 9.375 21.6113 9.375 21.2891L9.375 19.3359ZM3.125 13.0859C3.125 12.7637 3.38867 12.5 3.71094 12.5L5.66406 12.5C5.98633 12.5 6.25 12.7637 6.25 13.0859L6.25 15.0391C6.25 15.3613 5.98633 15.625 5.66406 15.625L3.71094 15.625C3.38867 15.625 3.125 15.3613 3.125 15.0391L3.125 13.0859ZM3.125 19.3359C3.125 19.0137 3.38867 18.75 3.71094 18.75L5.66406 18.75C5.98633 18.75 6.25 19.0137 6.25 19.3359L6.25 21.2891C6.25 21.6113 5.98633 21.875 5.66406 21.875L3.71094 21.875C3.38867 21.875 3.125 21.6113 3.125 21.2891L3.125 19.3359ZM19.5312 3.125L17.1875 3.125L17.1875 0.78125C17.1875 0.351562 16.8359 0 16.4062 0L14.8438 0C14.4141 0 14.0625 0.351562 14.0625 0.78125L14.0625 3.125L7.8125 3.125L7.8125 0.78125C7.8125 0.351562 7.46094 0 7.03125 0L5.46875 0C5.03906 0 4.6875 0.351562 4.6875 0.78125L4.6875 3.125L2.34375 3.125C1.0498 3.125 0 4.1748 0 5.46875L0 7.8125L21.875 7.8125L21.875 5.46875C21.875 4.1748 20.8252 3.125 19.5312 3.125Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector37502917")}
          ></Icon>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
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
          children={time}
          {...getOverrideProps(overrides, "time")}
        ></Text>
      </Flex>
      <Flex
        gap="20px"
        direction="column"
        width="320px"
        height="263px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0px"
        left="0px"
        padding="5px 0px 30px 10px"
        backgroundColor="rgba(34,66,38,0.7)"
        {...getOverrideProps(overrides, "details")}
      >
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
          width="310px"
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
        <Flex
          gap="5px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "timeDuration")}
        >
          <Flex
            gap="13px"
            direction="row"
            width="unset"
            height="25px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 13px"
            {...getOverrideProps(overrides, "addressGroup")}
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
              {...getOverrideProps(overrides, "Icon37502883")}
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
                {...getOverrideProps(overrides, "Vector37502884")}
              ></Icon>
            </Flex>
            <Text
              fontFamily="Inter"
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
              children={fields?.address}
              {...getOverrideProps(overrides, "address")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "pricePlayers")}
        >
          <Flex
            gap="13px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 13px"
            {...getOverrideProps(overrides, "priceGroup")}
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
              {...getOverrideProps(overrides, "Icon37502899")}
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
                {...getOverrideProps(overrides, "Vector37502919")}
              ></Icon>
            </Flex>
            <Text
              fontFamily="Inter"
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
              children={`${pricePerPerson}${"\u20AC po igra\u010Du"}`}
              {...getOverrideProps(overrides, "price")}
            ></Text>
          </Flex>
          <Flex
            gap="13px"
            direction="row"
            width="80px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 13px"
            {...getOverrideProps(overrides, "durationGroup")}
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
              {...getOverrideProps(overrides, "Icon37522929")}
            >
              <Icon
                width="24.22px"
                height="24.22px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 24.21875,
                  height: 24.21875,
                }}
                paths={[
                  {
                    d: "M12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.7988 5.41992 24.2188 12.1094 24.2188C18.7988 24.2188 24.2188 18.7988 24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0ZM14.8975 17.0947L10.5908 13.9648C10.4395 13.8525 10.3516 13.6768 10.3516 13.4912L10.3516 5.27344C10.3516 4.95117 10.6152 4.6875 10.9375 4.6875L13.2812 4.6875C13.6035 4.6875 13.8672 4.95117 13.8672 5.27344L13.8672 11.9971L16.9678 14.2529C17.2314 14.4434 17.2852 14.8096 17.0947 15.0732L15.7178 16.9678C15.5273 17.2266 15.1611 17.2852 14.8975 17.0947Z",
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
                {...getOverrideProps(overrides, "Vector37522933")}
              ></Icon>
            </Flex>
            <Text
              fontFamily="Inter"
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
              children={`${duration}${"h"}`}
              {...getOverrideProps(overrides, "duration")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="13px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "sportGroup")}
        >
          <Flex
            gap="13px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 13px"
            {...getOverrideProps(overrides, "playersGroup")}
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
              {...getOverrideProps(overrides, "Icon37502903")}
            >
              <Icon
                width="20.31px"
                height="25px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 20.3125,
                  height: 24.9990234375,
                }}
                paths={[
                  {
                    d: "M13.2812 4.6875C14.5757 4.6875 15.625 3.63818 15.625 2.34375C15.625 1.04932 14.5757 0 13.2812 0C11.9868 0 10.9375 1.04932 10.9375 2.34375C10.9375 3.63818 11.9868 4.6875 13.2812 4.6875ZM5.55127 15.5015L4.82861 17.187L1.5625 17.187C0.699707 17.187 0 17.8867 0 18.7495C0 19.6123 0.699707 20.312 1.5625 20.312L5.34424 20.312C6.28418 20.312 7.13037 19.7534 7.49805 18.8916L7.92725 17.8896L7.40625 17.582C6.56055 17.0825 5.93848 16.3433 5.55127 15.5015ZM18.75 10.937L16.6001 10.937L15.3276 8.33691C14.7173 7.08936 13.5967 6.17725 12.311 5.84961L8.84033 4.81738C7.4585 4.48535 6.01953 4.79053 4.89307 5.6543L2.95605 7.13916C2.271 7.66406 2.14111 8.64453 2.66699 9.32959C3.19287 10.0146 4.17285 10.1431 4.85742 9.61865L6.79541 8.13379C7.16992 7.84619 7.64697 7.74316 8.0293 7.83398L8.74707 8.04736L6.91797 12.3145C6.30176 13.7539 6.854 15.4399 8.20215 16.2358L12.3516 18.6855L11.0103 22.9692C10.7524 23.7925 11.2109 24.6689 12.0342 24.9268C12.1899 24.9756 12.3472 24.999 12.502 24.999C13.1665 24.999 13.7827 24.5708 13.9922 23.9028L15.5371 18.9683C15.8257 17.9541 15.396 16.8647 14.4805 16.3125L11.4902 14.5479L13.019 10.7256L14.0088 12.7485C14.3994 13.5464 15.2256 14.0615 16.1138 14.0615L18.75 14.0615C19.6128 14.0615 20.3125 13.3618 20.3125 12.499C20.3125 11.6362 19.6128 10.937 18.75 10.937Z",
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
                {...getOverrideProps(overrides, "Vector37502922")}
              ></Icon>
            </Flex>
            <Text
              fontFamily="Inter"
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
              children={`${acceptedNumber}${"/"}${fields?.minPlayers}`}
              {...getOverrideProps(overrides, "players")}
            ></Text>
          </Flex>
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
            {...getOverrideProps(overrides, "Icon37502909")}
          >
            <Icon
              width="24.22px"
              height="24.22px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 24.218170166015625,
                height: 24.22265625,
              }}
              paths={[
                {
                  d: "M10.9076 11.498C10.8702 9.72275 10.494 7.97098 9.79923 6.33688C5.36564 8.40719 2.1088 12.3134 0.995522 16.9228C1.64704 18.4156 2.59184 19.7622 3.77384 20.8828C4.89789 16.9742 7.44232 13.6269 10.9076 11.498ZM9.10588 4.93551C8.36325 3.64163 7.41686 2.47596 6.30314 1.48336C1.85978 3.915 -0.767173 8.94918 0.199624 14.2861C1.83048 10.2285 5.00431 6.86422 9.10588 4.93551ZM18.266 12.997C18.686 8.12399 16.933 3.35348 13.5053 0.0868763C12.7875 0.0038685 10.9858 -0.181678 8.67619 0.501915C11.5019 3.43007 13.1304 7.30917 13.2416 11.3769C14.7977 12.2326 16.5032 12.7825 18.266 12.997ZM12.1772 13.4609C10.6584 14.383 9.32938 15.5861 8.26115 17.0058C12.2651 19.8037 17.2699 20.6728 21.811 19.3398C22.7877 18.0311 23.4887 16.5377 23.8715 14.9502C22.5803 15.2792 21.2538 15.4497 19.9213 15.458C17.2553 15.4531 14.6039 14.7695 12.1772 13.4609ZM7.37736 18.3291C6.63517 19.5986 6.12248 20.9853 5.80998 22.4404C7.97596 23.7698 10.5065 24.3813 13.0405 24.1875C15.5745 23.9937 17.9826 23.0046 19.9213 21.3613C14.4086 22.1474 9.99455 20.1504 7.37736 18.3291ZM16.1811 0.721642C18.8813 4.15914 20.2094 8.59274 19.8236 13.1045C21.3112 13.1076 22.7897 12.8735 24.2035 12.4111C24.2035 12.3134 24.2182 12.2158 24.2182 12.1181C24.2182 6.85445 20.8637 2.39645 16.1811 0.721642Z",
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
              {...getOverrideProps(overrides, "Vector37502924")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
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
            children={sport}
            {...getOverrideProps(overrides, "sport")}
          ></Text>
        </Flex>
        <Flex
          gap="13px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 13px"
          {...getOverrideProps(overrides, "organizerGroup")}
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
            {...getOverrideProps(overrides, "Icon37502913")}
          >
            <Icon
              width="25px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 25, height: 20 }}
              paths={[
                {
                  d: "M19.375 8.75C16.2656 8.75 13.75 11.2656 13.75 14.375C13.75 17.4844 16.2656 20 19.375 20C22.4844 20 25 17.4844 25 14.375C25 11.2656 22.4844 8.75 19.375 8.75ZM21.875 14.6211C21.875 14.8281 21.7031 15 21.4961 15L19.1289 15C18.9219 15 18.75 14.8281 18.75 14.6211L18.75 11.6289C18.75 11.4219 18.9219 11.25 19.1289 11.25L19.6211 11.25C19.8281 11.25 20 11.4219 20 11.6289L20 13.75L21.4961 13.75C21.7031 13.75 21.875 13.9219 21.875 14.1289L21.875 14.6211ZM12.5 14.375C12.5 13.2891 12.7617 12.2617 13.2109 11.3477C12.8984 11.2891 12.5781 11.25 12.25 11.25L11.5977 11.25C10.7305 11.6484 9.76562 11.875 8.75 11.875C7.73438 11.875 6.77344 11.6484 5.90234 11.25L5.25 11.25C2.35156 11.25 0 13.6016 0 16.5L0 18.125C0 19.1602 0.839844 20 1.875 20L15.4336 20C13.6641 18.7539 12.5 16.6992 12.5 14.375ZM8.75 10C11.5117 10 13.75 7.76172 13.75 5C13.75 2.23828 11.5117 0 8.75 0C5.98828 0 3.75 2.23828 3.75 5C3.75 7.76172 5.98828 10 8.75 10Z",
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
              {...getOverrideProps(overrides, "Vector37502926")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
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
            children={appointment?.bookerName}
            {...getOverrideProps(overrides, "organizer")}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
