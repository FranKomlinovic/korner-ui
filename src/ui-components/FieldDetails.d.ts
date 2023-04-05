/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Fields } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FieldDetailsOverridesProps = {
    FieldDetails?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 7"?: PrimitiveOverrideProps<FlexProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    address?: PrimitiveOverrideProps<TextProps>;
    price?: PrimitiveOverrideProps<TextProps>;
    "Basic info"?: PrimitiveOverrideProps<FlexProps>;
    Feature36532799?: PrimitiveOverrideProps<FlexProps>;
    Icon36832714?: PrimitiveOverrideProps<ViewProps>;
    Vector36832717?: PrimitiveOverrideProps<IconProps>;
    minPlayers?: PrimitiveOverrideProps<TextProps>;
    Feature36532807?: PrimitiveOverrideProps<FlexProps>;
    Icon36532808?: PrimitiveOverrideProps<ViewProps>;
    Vector36832706?: PrimitiveOverrideProps<IconProps>;
    area?: PrimitiveOverrideProps<TextProps>;
    Feature36532816?: PrimitiveOverrideProps<FlexProps>;
    Icon36532817?: PrimitiveOverrideProps<ViewProps>;
    Vector36832709?: PrimitiveOverrideProps<IconProps>;
    sports?: PrimitiveOverrideProps<TextProps>;
    Feature36532803?: PrimitiveOverrideProps<FlexProps>;
    Icon36532804?: PrimitiveOverrideProps<ViewProps>;
    Vector36832712?: PrimitiveOverrideProps<IconProps>;
    surface?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type FieldDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    data?: Fields;
    photo?: String;
} & {
    overrides?: FieldDetailsOverridesProps | undefined | null;
}>;
export default function FieldDetails(props: FieldDetailsProps): React.ReactElement;
