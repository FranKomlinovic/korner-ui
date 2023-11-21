/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FollowingCreateFormInputValues = {
    userID?: string;
    followedID?: string;
    followedName?: string;
};
export declare type FollowingCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    followedID?: ValidationFunction<string>;
    followedName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FollowingCreateFormOverridesProps = {
    FollowingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    followedID?: PrimitiveOverrideProps<TextFieldProps>;
    followedName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FollowingCreateFormProps = React.PropsWithChildren<{
    overrides?: FollowingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FollowingCreateFormInputValues) => FollowingCreateFormInputValues;
    onSuccess?: (fields: FollowingCreateFormInputValues) => void;
    onError?: (fields: FollowingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FollowingCreateFormInputValues) => FollowingCreateFormInputValues;
    onValidate?: FollowingCreateFormValidationValues;
} & React.CSSProperties>;
export default function FollowingCreateForm(props: FollowingCreateFormProps): React.ReactElement;
