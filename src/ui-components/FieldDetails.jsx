/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function FieldDetails(props) {
  const { data, photo, overrides, ...rest } = props;
  return (
    <Flex
      gap="11px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FieldDetails")}
      {...rest}
    >
      <Image
        width="266px"
        height="176px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={data?.photo}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="15px"
        direction="column"
        width="266px"
        height="263px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 64px 0px"
        {...getOverrideProps(overrides, "Frame 6")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 7")}
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={data?.name}
            {...getOverrideProps(overrides, "name")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={data?.address}
            {...getOverrideProps(overrides, "address")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${data?.price}${"\u20AC/sat"}`}
            {...getOverrideProps(overrides, "price")}
          ></Text>
        </Flex>
        <Flex
          gap="14px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Basic info")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Feature36532799")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon36832714")}
            >
              <Icon
                width="24px"
                height="24px"
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                paths={[
                  {
                    d: "M15.6923 4.50018C17.2217 4.50018 18.4615 3.49279 18.4615 2.25009C18.4615 1.00738 17.2217 0 15.6923 0C14.1629 0 12.9231 1.00738 12.9231 2.25009C12.9231 3.49279 14.1629 4.50018 15.6923 4.50018ZM6.55904 14.882L5.70519 16.5002L1.84615 16.5002C0.826731 16.5002 0 17.1719 0 18.0002C0 18.8285 0.826731 19.5003 1.84615 19.5003L6.31442 19.5003C7.425 19.5003 8.42481 18.964 8.85923 18.1366L9.36635 17.1747L8.75077 16.8794C7.75154 16.3999 7.01654 15.6901 6.55904 14.882ZM22.1538 10.4999L19.6137 10.4999L18.1102 8.00375C17.389 6.80605 16.065 5.93039 14.546 5.61584L10.4452 4.62487C8.8125 4.30611 7.11231 4.59909 5.78135 5.42834L3.49269 6.85386C2.68327 7.35779 2.52981 8.29907 3.15115 8.95676C3.7725 9.61444 4.93038 9.73772 5.73923 9.23427L8.02904 7.80874C8.47154 7.53264 9.03519 7.43373 9.48692 7.52092L10.335 7.72577L8.17385 11.8223C7.44577 13.2043 8.09827 14.8229 9.69115 15.587L14.5938 17.9388L13.009 22.0513C12.7044 22.8417 13.2462 23.6831 14.2188 23.9306C14.4029 23.9775 14.5887 24 14.7715 24C15.5567 24 16.2848 23.5889 16.5323 22.9476L18.3577 18.2102C18.6987 17.2366 18.191 16.1908 17.1092 15.6606L13.5762 13.9665L15.3825 10.297L16.5519 12.2391C17.0135 13.005 17.9896 13.4996 19.039 13.4996L22.1538 13.4996C23.1733 13.4996 24 12.8278 24 11.9995C24 11.1712 23.1733 10.4999 22.1538 10.4999Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector36832717")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${data?.minPlayers}${" igra\u010Da"}`}
              {...getOverrideProps(overrides, "minPlayers")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Feature36532807")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon36532808")}
            >
              <Icon
                width="24px"
                height="24px"
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                paths={[
                  {
                    d: "M7.5 13.5L4.875 13.5C4.66781 13.5 4.5 13.3322 4.5 13.125L4.5 12.375C4.5 12.1678 4.66781 12 4.875 12L7.5 12L7.5 9L4.875 9C4.66781 9 4.5 8.83219 4.5 8.625L4.5 7.875C4.5 7.66781 4.66781 7.5 4.875 7.5L7.5 7.5L7.5 4.5L4.875 4.5C4.66781 4.5 4.5 4.33219 4.5 4.125L4.5 3.375C4.5 3.16781 4.66781 3 4.875 3L7.5 3L7.5 1.5C7.5 0.671719 6.82828 0 6 0L1.5 0C0.671719 0 0 0.671719 0 1.5L0 22.5C0 22.6298 0.0426563 22.7456 0.0735938 22.8656L7.5 15.4397L7.5 13.5ZM22.5 16.5L21 16.5L21 19.125C21 19.3322 20.8322 19.5 20.625 19.5L19.875 19.5C19.6678 19.5 19.5 19.3322 19.5 19.125L19.5 16.5L16.5 16.5L16.5 19.125C16.5 19.3322 16.3322 19.5 16.125 19.5L15.375 19.5C15.1678 19.5 15 19.3322 15 19.125L15 16.5L12 16.5L12 19.125C12 19.3322 11.8322 19.5 11.625 19.5L10.875 19.5C10.6678 19.5 10.5 19.3322 10.5 19.125L10.5 16.5L8.56078 16.5L1.13438 23.9264C1.25438 23.9573 1.37063 24 1.5 24L22.5 24C23.3283 24 24 23.3283 24 22.5L24 18C24 17.1717 23.3283 16.5 22.5 16.5Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0.4px"
                left="0px"
                {...getOverrideProps(overrides, "Vector36832706")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${data?.length}${"m x "}${data?.width}${"m"}`}
              {...getOverrideProps(overrides, "area")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Feature36532816")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon36532817")}
            >
              <Icon
                width="24px"
                height="24px"
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                paths={[
                  {
                    d: "M24 12C24 18.6274 18.6274 24 12 24C5.37256 24 0 18.6274 0 12C0 5.37256 5.37256 0 12 0C18.6274 0 24 5.37256 24 12ZM21.6774 12L21.6773 11.9864L20.4161 13.0867L17.3833 10.2561L18.1794 6.17439L19.8392 6.32303C18.6349 4.66742 16.9358 3.4155 14.9662 2.78395L15.6268 4.32939L12 6.33871L8.37324 4.32944L9.03377 2.784C7.06776 3.41439 5.367 4.66481 4.16076 6.32308L5.83326 6.17439L6.61674 10.2561L3.58394 13.0867L2.32277 11.9864L2.32263 12C2.32263 14.0814 2.97571 16.0622 4.18418 17.7092L4.55695 16.0691L8.67653 16.5746L10.433 20.3403L8.98616 21.201C10.9314 21.8359 13.0647 21.8371 15.0138 21.201L13.567 20.3403L15.3235 16.5746L19.443 16.0691L19.8158 17.7092C21.0243 16.0622 21.6774 14.0814 21.6774 12ZM9.67248 15.3663L8.226 10.948L12 8.21284L15.774 10.948L14.3407 15.3663L9.67248 15.3663Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="-1.67%"
                bottom="1.67%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector36832709")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Futsal"
              {...getOverrideProps(overrides, "sports")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Feature36532803")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon36532804")}
            >
              <Icon
                width="24px"
                height="24px"
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                paths={[
                  {
                    d: "M0.58183 6.93869L11.5008 11.8919C11.8195 12.0367 12.18 12.0367 12.4987 11.8919L23.4177 6.93869C24.1935 6.58666 24.1935 5.41433 23.4177 5.06231L12.4992 0.10863C12.3426 0.0370482 12.1724 1.74337e-16 12.0002 0C11.828 2.10766e-16 11.6579 0.0370482 11.5013 0.10863L0.58183 5.06184C-0.193943 5.41387 -0.193943 6.58666 0.58183 6.93869ZM23.4182 11.0768L20.6952 9.84255L13.1184 13.277C12.7641 13.4378 12.3877 13.5194 12 13.5194C11.6123 13.5194 11.2364 13.4378 10.8816 13.277L3.30524 9.84255L0.58183 11.0768C-0.193943 11.4283 -0.193943 12.6002 0.58183 12.9517L11.5008 17.9012C11.8195 18.0456 12.18 18.0456 12.4987 17.9012L23.4182 12.9517C24.1939 12.6002 24.1939 11.4283 23.4182 11.0768ZM23.4182 17.0673L20.7055 15.8378L13.1184 19.2769C12.7641 19.4377 12.3877 19.5193 12 19.5193C11.6123 19.5193 11.2364 19.4377 10.8816 19.2769L3.29493 15.8378L0.58183 17.0673C-0.193943 17.4188 -0.193943 18.5907 0.58183 18.9423L11.5008 23.8917C11.8195 24.0361 12.18 24.0361 12.4987 23.8917L23.4182 18.9423C24.1939 18.5907 24.1939 17.4188 23.4182 17.0673Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="-0.83%"
                bottom="0.83%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector36832712")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Umjetna trava"
              {...getOverrideProps(overrides, "surface")}
            ></Text>
          </Flex>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
      </Flex>
    </Flex>
  );
}
