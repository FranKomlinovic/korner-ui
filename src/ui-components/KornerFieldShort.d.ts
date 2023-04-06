/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Fields } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KornerFieldShortOverridesProps = {
    KornerFieldShort?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    details?: PrimitiveOverrideProps<FlexProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    address37333244?: PrimitiveOverrideProps<FlexProps>;
    Icon37333245?: PrimitiveOverrideProps<FlexProps>;
    Vector37333246?: PrimitiveOverrideProps<IconProps>;
    address37333247?: PrimitiveOverrideProps<TextProps>;
    price37333248?: PrimitiveOverrideProps<FlexProps>;
    Icon37333249?: PrimitiveOverrideProps<FlexProps>;
    Vector37333250?: PrimitiveOverrideProps<IconProps>;
    price37333251?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type KornerFieldShortProps = React.PropsWithChildren<Partial<ViewProps> & {
    fields?: Fields;
    photo?: String;
} & {
    overrides?: KornerFieldShortOverridesProps | undefined | null;
}>;
export default function KornerFieldShort(props: KornerFieldShortProps): React.ReactElement;
