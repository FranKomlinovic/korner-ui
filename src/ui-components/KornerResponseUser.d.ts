/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KornerResponseUserOverridesProps = {
    KornerResponseUser?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    test37113016?: PrimitiveOverrideProps<TextProps>;
    test37113025?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type KornerResponseUserProps = React.PropsWithChildren<Partial<FlexProps> & {
    icon?: React.ReactNode;
    name?: String;
    time?: String;
    id?: String;
    photo?: String;
} & {
    overrides?: KornerResponseUserOverridesProps | undefined | null;
}>;
export default function KornerResponseUser(props: KornerResponseUserProps): React.ReactElement;
