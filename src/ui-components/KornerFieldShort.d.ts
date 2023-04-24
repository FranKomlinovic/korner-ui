/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Fields, Appointment } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KornerFieldShortOverridesProps = {
    KornerFieldShort?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    date?: PrimitiveOverrideProps<TextProps>;
    time?: PrimitiveOverrideProps<TextProps>;
    "Frame 4"?: PrimitiveOverrideProps<FlexProps>;
    Frame1?: PrimitiveOverrideProps<FlexProps>;
    fieldName?: PrimitiveOverrideProps<TextProps>;
    fieldAddress?: PrimitiveOverrideProps<TextProps>;
    Frame2?: PrimitiveOverrideProps<FlexProps>;
    organizator?: PrimitiveOverrideProps<TextProps>;
    numberOfPeople?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type KornerFieldShortProps = React.PropsWithChildren<Partial<ViewProps> & {
    photo?: String;
    date?: String;
    time?: String;
    fields?: Fields;
    appointment?: Appointment;
    fon?: String;
    responseNumber?: String;
} & {
    overrides?: KornerFieldShortOverridesProps | undefined | null;
}>;
export default function KornerFieldShort(props: KornerFieldShortProps): React.ReactElement;
