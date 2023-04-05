/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestInputValues = {
    playerName?: string;
    accepted?: boolean;
    reserve?: boolean;
    playerPhoto?: string;
};
export declare type TestValidationValues = {
    playerName?: ValidationFunction<string>;
    accepted?: ValidationFunction<boolean>;
    reserve?: ValidationFunction<boolean>;
    playerPhoto?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestOverridesProps = {
    TestGrid?: PrimitiveOverrideProps<GridProps>;
    playerName?: PrimitiveOverrideProps<TextFieldProps>;
    accepted?: PrimitiveOverrideProps<SwitchFieldProps>;
    reserve?: PrimitiveOverrideProps<SwitchFieldProps>;
    playerPhoto?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestProps = React.PropsWithChildren<{
    overrides?: TestOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestInputValues) => TestInputValues;
    onSuccess?: (fields: TestInputValues) => void;
    onError?: (fields: TestInputValues, errorMessage: string) => void;
    onChange?: (fields: TestInputValues) => TestInputValues;
    onValidate?: TestValidationValues;
} & React.CSSProperties>;
export default function Test(props: TestProps): React.ReactElement;
