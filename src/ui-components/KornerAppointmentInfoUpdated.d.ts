/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Appointment } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KornerAppointmentInfoUpdatedOverridesProps = {
    KornerAppointmentInfoUpdated?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    timeGroup?: PrimitiveOverrideProps<FlexProps>;
    Icon37502895?: PrimitiveOverrideProps<FlexProps>;
    Vector37502917?: PrimitiveOverrideProps<IconProps>;
    time?: PrimitiveOverrideProps<TextProps>;
    details?: PrimitiveOverrideProps<FlexProps>;
    fieldName?: PrimitiveOverrideProps<TextProps>;
    timeDuration?: PrimitiveOverrideProps<FlexProps>;
    addressGroup?: PrimitiveOverrideProps<FlexProps>;
    Icon37502883?: PrimitiveOverrideProps<FlexProps>;
    Vector37502884?: PrimitiveOverrideProps<IconProps>;
    address?: PrimitiveOverrideProps<TextProps>;
    pricePlayers?: PrimitiveOverrideProps<FlexProps>;
    priceGroup?: PrimitiveOverrideProps<FlexProps>;
    Icon37502899?: PrimitiveOverrideProps<FlexProps>;
    Vector37502919?: PrimitiveOverrideProps<IconProps>;
    price?: PrimitiveOverrideProps<TextProps>;
    durationGroup?: PrimitiveOverrideProps<FlexProps>;
    Icon37522929?: PrimitiveOverrideProps<FlexProps>;
    Vector37522933?: PrimitiveOverrideProps<IconProps>;
    duration?: PrimitiveOverrideProps<TextProps>;
    sportGroup?: PrimitiveOverrideProps<FlexProps>;
    playersGroup?: PrimitiveOverrideProps<FlexProps>;
    Icon37502903?: PrimitiveOverrideProps<FlexProps>;
    Vector37502922?: PrimitiveOverrideProps<IconProps>;
    players?: PrimitiveOverrideProps<TextProps>;
    Icon37502909?: PrimitiveOverrideProps<FlexProps>;
    Vector37502924?: PrimitiveOverrideProps<IconProps>;
    sport?: PrimitiveOverrideProps<TextProps>;
    organizerGroup?: PrimitiveOverrideProps<FlexProps>;
    Icon37502913?: PrimitiveOverrideProps<FlexProps>;
    Vector37502926?: PrimitiveOverrideProps<IconProps>;
    organizer?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type KornerAppointmentInfoUpdatedProps = React.PropsWithChildren<Partial<ViewProps> & {
    time?: String;
    acceptedNumber?: Number;
    sport?: String;
    appointment?: Appointment;
    duration?: String;
    photo?: String;
    pricePerPerson?: String;
} & {
    overrides?: KornerAppointmentInfoUpdatedOverridesProps | undefined | null;
}>;
export default function KornerAppointmentInfoUpdated(props: KornerAppointmentInfoUpdatedProps): React.ReactElement;
