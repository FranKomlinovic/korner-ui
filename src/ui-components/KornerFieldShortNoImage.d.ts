/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Fields } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KornerFieldShortNoImageOverridesProps = {
    KornerFieldShortNoImage?: PrimitiveOverrideProps<FlexProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    address37902733?: PrimitiveOverrideProps<FlexProps>;
    Icon37902734?: PrimitiveOverrideProps<FlexProps>;
    Vector37902735?: PrimitiveOverrideProps<IconProps>;
    address37902736?: PrimitiveOverrideProps<TextProps>;
    price37902737?: PrimitiveOverrideProps<FlexProps>;
    Icon37902738?: PrimitiveOverrideProps<FlexProps>;
    Vector37902739?: PrimitiveOverrideProps<IconProps>;
    price37902740?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type KornerFieldShortNoImageProps = React.PropsWithChildren<Partial<FlexProps> & {
    fields?: Fields;
} & {
    overrides?: KornerFieldShortNoImageOverridesProps | undefined | null;
}>;
export default function KornerFieldShortNoImage(props: KornerFieldShortNoImageProps): React.ReactElement;
