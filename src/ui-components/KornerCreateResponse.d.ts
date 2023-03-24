/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KornerCreateResponseOverridesProps = {
    KornerCreateResponse?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    Button37123040?: PrimitiveOverrideProps<ButtonProps>;
    Button37123045?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type KornerCreateResponseProps = React.PropsWithChildren<Partial<FlexProps> & {
    name?: String;
} & {
    overrides?: KornerCreateResponseOverridesProps | undefined | null;
}>;
export default function KornerCreateResponse(props: KornerCreateResponseProps): React.ReactElement;
