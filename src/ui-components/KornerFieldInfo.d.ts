/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Fields } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KornerFieldInfoOverridesProps = {
    KornerFieldInfo?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    details?: PrimitiveOverrideProps<FlexProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    address37313153?: PrimitiveOverrideProps<FlexProps>;
    Icon37313179?: PrimitiveOverrideProps<FlexProps>;
    Vector37313200?: PrimitiveOverrideProps<IconProps>;
    address37313155?: PrimitiveOverrideProps<TextProps>;
    price37313178?: PrimitiveOverrideProps<FlexProps>;
    Icon37313193?: PrimitiveOverrideProps<FlexProps>;
    Vector37313198?: PrimitiveOverrideProps<IconProps>;
    price37313180?: PrimitiveOverrideProps<TextProps>;
    minPlayers37313156?: PrimitiveOverrideProps<FlexProps>;
    Icon37313157?: PrimitiveOverrideProps<FlexProps>;
    Vector37313196?: PrimitiveOverrideProps<IconProps>;
    minPlayers37313158?: PrimitiveOverrideProps<TextProps>;
    sports37313162?: PrimitiveOverrideProps<FlexProps>;
    Icon37313163?: PrimitiveOverrideProps<FlexProps>;
    Vector37313209?: PrimitiveOverrideProps<IconProps>;
    sports37313164?: PrimitiveOverrideProps<TextProps>;
    surface37313165?: PrimitiveOverrideProps<FlexProps>;
    Icon37313166?: PrimitiveOverrideProps<FlexProps>;
    Vector37313211?: PrimitiveOverrideProps<IconProps>;
    surface37313167?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type KornerFieldInfoProps = React.PropsWithChildren<Partial<FlexProps> & {
    fields?: Fields;
    sports?: String;
    surface?: String;
    photo?: String;
} & {
    overrides?: KornerFieldInfoOverridesProps | undefined | null;
}>;
export default function KornerFieldInfo(props: KornerFieldInfoProps): React.ReactElement;
