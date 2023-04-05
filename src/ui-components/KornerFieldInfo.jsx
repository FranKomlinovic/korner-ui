/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function KornerFieldInfo(props) {
  const { fields, sports, surface, photo, overrides, ...rest } = props;
  return (
    <Flex
      gap="15px"
      direction="column"
      width="320px"
      height="473px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 15px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "KornerFieldInfo")}
      {...rest}
    >
      <Image
        width="unset"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={photo}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="15px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 10px"
        {...getOverrideProps(overrides, "details")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
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
          {...getOverrideProps(overrides, "address37313153")}
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
            {...getOverrideProps(overrides, "Icon37313179")}
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
              {...getOverrideProps(overrides, "Vector37313200")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="800"
            color="rgba(48,64,80,1)"
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
            {...getOverrideProps(overrides, "address37313155")}
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
          {...getOverrideProps(overrides, "price37313178")}
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
            {...getOverrideProps(overrides, "Icon37313193")}
          >
            <Icon
              width="25px"
              height="25px"
              viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
              paths={[
                {
                  d: "M0 19.79L0 21.875C0 23.5986 4.19922 25 9.375 25C14.5508 25 18.75 23.5986 18.75 21.875L18.75 19.79C16.7334 21.2109 13.0469 21.875 9.375 21.875C5.70312 21.875 2.0166 21.2109 0 19.79ZM15.625 6.25C20.8008 6.25 25 4.84863 25 3.125C25 1.40137 20.8008 0 15.625 0C10.4492 0 6.25 1.40137 6.25 3.125C6.25 4.84863 10.4492 6.25 15.625 6.25ZM0 14.668L0 17.1875C0 18.9111 4.19922 20.3125 9.375 20.3125C14.5508 20.3125 18.75 18.9111 18.75 17.1875L18.75 14.668C16.7334 16.3281 13.042 17.1875 9.375 17.1875C5.70801 17.1875 2.0166 16.3281 0 14.668ZM20.3125 15.2051C23.1104 14.6631 25 13.6572 25 12.5L25 10.415C23.8672 11.2158 22.2021 11.7627 20.3125 12.0996L20.3125 15.2051ZM9.375 7.8125C4.19922 7.8125 0 9.56055 0 11.7188C0 13.877 4.19922 15.625 9.375 15.625C14.5508 15.625 18.75 13.877 18.75 11.7188C18.75 9.56055 14.5508 7.8125 9.375 7.8125ZM20.083 10.5615C23.0127 10.0342 25 8.99902 25 7.8125L25 5.72754C23.2666 6.95312 20.2881 7.61231 17.1533 7.76856C18.5938 8.4668 19.6533 9.4043 20.083 10.5615Z",
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
              {...getOverrideProps(overrides, "Vector37313198")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="800"
            color="rgba(48,64,80,1)"
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
            {...getOverrideProps(overrides, "price37313180")}
          ></Text>
        </Flex>
        <Flex
          gap="13px"
          direction="row"
          width="124.78px"
          height="25px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 13px"
          {...getOverrideProps(overrides, "minPlayers37313156")}
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
            {...getOverrideProps(overrides, "Icon37313157")}
          >
            <Icon
              width="25px"
              height="25px"
              viewBox={{ minX: 0, minY: 0, width: 25, height: 24.9990234375 }}
              paths={[
                {
                  d: "M16.3462 4.6875C17.9393 4.6875 19.2308 3.63818 19.2308 2.34375C19.2308 1.04932 17.9393 0 16.3462 0C14.753 0 13.4615 1.04932 13.4615 2.34375C13.4615 3.63818 14.753 4.6875 16.3462 4.6875ZM6.83233 15.5015L5.94291 17.187L1.92308 17.187C0.861178 17.187 0 17.8867 0 18.7495C0 19.6123 0.861178 20.312 1.92308 20.312L6.57752 20.312C7.73437 20.312 8.77584 19.7534 9.22836 18.8916L9.75661 17.8896L9.11538 17.582C8.07452 17.0825 7.30889 16.3433 6.83233 15.5015ZM23.0769 10.937L20.4309 10.937L18.8648 8.33691C18.1136 7.08936 16.7344 6.17725 15.152 5.84961L10.8804 4.81738C9.17969 4.48535 7.40865 4.79053 6.02224 5.6543L3.63822 7.13916C2.79507 7.66406 2.63522 8.64453 3.28245 9.32959C3.92969 10.0146 5.13582 10.1431 5.97837 9.61865L8.36358 8.13379C8.82452 7.84619 9.41166 7.74316 9.88221 7.83398L10.7656 8.04736L8.51442 12.3145C7.75601 13.7539 8.4357 15.4399 10.095 16.2358L15.2019 18.6855L13.5511 22.9692C13.2338 23.7925 13.7981 24.6689 14.8113 24.9268C15.003 24.9756 15.1965 24.999 15.387 24.999C16.2049 24.999 16.9633 24.5708 17.2212 23.9028L19.1226 18.9683C19.4778 17.9541 18.9489 16.8647 17.8221 16.3125L14.1418 14.5479L16.0234 10.7256L17.2416 12.7485C17.7224 13.5464 18.7392 14.0615 19.8323 14.0615L23.0769 14.0615C24.1388 14.0615 25 13.3618 25 12.499C25 11.6362 24.1388 10.937 23.0769 10.937Z",
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
              {...getOverrideProps(overrides, "Vector37313196")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="800"
            color="rgba(48,64,80,1)"
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
            children={`${fields?.minPlayers}${" igra\u010Da"}`}
            {...getOverrideProps(overrides, "minPlayers37313158")}
          ></Text>
        </Flex>
        <Flex
          gap="13px"
          direction="row"
          width="179.12px"
          height="25px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 13px"
          {...getOverrideProps(overrides, "sports37313162")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon37313163")}
          >
            <Icon
              width="25px"
              height="25px"
              viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
              paths={[
                {
                  d: "M11.2598 11.867C11.2211 10.0348 10.8327 8.2268 10.1156 6.54025C5.53886 8.67701 2.17688 12.7086 1.02766 17.4659C1.70021 19.0066 2.67551 20.3965 3.89567 21.553C5.05601 17.519 7.68257 14.0642 11.2598 11.867ZM9.39983 5.09391C8.63323 3.75851 7.65629 2.55542 6.50662 1.53097C1.91982 4.04065 -0.791939 9.23639 0.206068 14.7446C1.88958 10.5567 5.16586 7.08452 9.39983 5.09391ZM18.8557 13.4142C19.2892 8.38472 17.4797 3.4611 13.9413 0.0896645C13.2003 0.00399266 11.3404 -0.187509 8.95628 0.518024C11.8732 3.54015 13.5543 7.54375 13.6691 11.742C15.2754 12.6252 17.036 13.1928 18.8557 13.4142ZM12.5703 13.8929C11.0025 14.8446 9.63056 16.0863 8.52784 17.5516C12.661 20.4393 17.8275 21.3363 22.5151 19.9605C23.5234 18.6098 24.247 17.0685 24.6421 15.43C23.3092 15.7695 21.9399 15.9455 20.5644 15.9541C17.8123 15.949 15.0754 15.2435 12.5703 13.8929ZM7.61552 18.9173C6.84937 20.2276 6.32012 21.6588 5.99754 23.1606C8.23345 24.5327 10.8456 25.1637 13.4615 24.9637C16.0773 24.7637 18.5632 23.7429 20.5644 22.0469C14.8738 22.8582 10.3172 20.7971 7.61552 18.9173ZM16.7034 0.744802C19.4908 4.29262 20.8618 8.86851 20.4636 13.525C21.9992 13.5283 23.5254 13.2867 24.9849 12.8094C24.9849 12.7086 25 12.6078 25 12.507C25 7.07444 21.5372 2.47336 16.7034 0.744802Z",
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
              {...getOverrideProps(overrides, "Vector37313209")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="800"
            color="rgba(48,64,80,1)"
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
            children={sports}
            {...getOverrideProps(overrides, "sports37313164")}
          ></Text>
        </Flex>
        <Flex
          gap="13px"
          direction="row"
          width="163.02px"
          height="25px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 13px"
          {...getOverrideProps(overrides, "surface37313165")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon37313166")}
          >
            <Icon
              width="25px"
              height="25px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 25.000244140625,
                height: 25.0003662109375,
              }}
              paths={[
                {
                  d: "M0.606079 7.2279L11.9801 12.3876C12.3121 12.5385 12.6876 12.5385 13.0197 12.3876L24.3937 7.2279C25.2018 6.8612 25.2018 5.64001 24.3937 5.27331L13.0201 0.113157C12.857 0.0385924 12.6797 1.81604e-16 12.5004 0C12.321 2.19551e-16 12.1437 0.0385924 11.9806 0.113157L0.606079 5.27283C-0.202026 5.63952 -0.202026 6.8612 0.606079 7.2279ZM24.3942 11.5385L21.5577 10.2528L13.6652 13.8304C13.296 13.9979 12.9039 14.0829 12.5001 14.0829C12.0963 14.0829 11.7047 13.9979 11.3351 13.8304L3.44299 10.2528L0.606079 11.5385C-0.202026 11.9047 -0.202026 13.1254 0.606079 13.4916L11.9801 18.6473C12.3121 18.7977 12.6876 18.7977 13.0197 18.6473L24.3942 13.4916C25.2023 13.1254 25.2023 11.9047 24.3942 11.5385ZM24.3942 17.7787L21.5685 16.4979L13.6652 20.0804C13.296 20.2479 12.9039 20.3329 12.5001 20.3329C12.0963 20.3329 11.7047 20.2479 11.3351 20.0804L3.43225 16.4979L0.606079 17.7787C-0.202026 18.1449 -0.202026 19.3656 0.606079 19.7318L11.9801 24.8876C12.3121 25.038 12.6876 25.038 13.0197 24.8876L24.3942 19.7318C25.2023 19.3656 25.2023 18.1449 24.3942 17.7787Z",
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
              {...getOverrideProps(overrides, "Vector37313211")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="800"
            color="rgba(48,64,80,1)"
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
            children={surface}
            {...getOverrideProps(overrides, "surface37313167")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
