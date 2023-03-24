/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Fields } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KornerAppointmentInfoOverridesProps = {
    KornerAppointmentInfo?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    fieldName?: PrimitiveOverrideProps<TextProps>;
    day?: PrimitiveOverrideProps<TextProps>;
    time?: PrimitiveOverrideProps<TextProps>;
    price?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type KornerAppointmentInfoProps = React.PropsWithChildren<Partial<FlexProps> & {
    field?: Fields;
    appointmentInfo?: String;
} & {
    overrides?: KornerAppointmentInfoOverridesProps | undefined | null;
}>;
export default function KornerAppointmentInfo(props: KornerAppointmentInfoProps): React.ReactElement;
