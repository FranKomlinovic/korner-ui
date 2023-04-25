/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Fields } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KornerFieldInfoNewOverridesProps = {
    KornerFieldInfoNew?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    address?: PrimitiveOverrideProps<TextProps>;
    "Frame 4"?: PrimitiveOverrideProps<FlexProps>;
    Frame1?: PrimitiveOverrideProps<FlexProps>;
    surface?: PrimitiveOverrideProps<TextProps>;
    sports?: PrimitiveOverrideProps<TextProps>;
    Frame2?: PrimitiveOverrideProps<FlexProps>;
    price?: PrimitiveOverrideProps<TextProps>;
    numberOfPeople?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type KornerFieldInfoNewProps = React.PropsWithChildren<Partial<ViewProps> & {
    fields?: Fields;
    photo?: String;
    surface?: String;
    sports?: String;
} & {
    overrides?: KornerFieldInfoNewOverridesProps | undefined | null;
}>;
export default function KornerFieldInfoNew(props: KornerFieldInfoNewProps): React.ReactElement;
