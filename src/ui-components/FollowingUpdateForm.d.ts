/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Following } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FollowingUpdateFormInputValues = {
    userID?: string;
    followedID?: string;
    followedName?: string;
};
export declare type FollowingUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    followedID?: ValidationFunction<string>;
    followedName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FollowingUpdateFormOverridesProps = {
    FollowingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    followedID?: PrimitiveOverrideProps<TextFieldProps>;
    followedName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FollowingUpdateFormProps = React.PropsWithChildren<{
    overrides?: FollowingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    following?: Following;
    onSubmit?: (fields: FollowingUpdateFormInputValues) => FollowingUpdateFormInputValues;
    onSuccess?: (fields: FollowingUpdateFormInputValues) => void;
    onError?: (fields: FollowingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FollowingUpdateFormInputValues) => FollowingUpdateFormInputValues;
    onValidate?: FollowingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FollowingUpdateForm(props: FollowingUpdateFormProps): React.ReactElement;
