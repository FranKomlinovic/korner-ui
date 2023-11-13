/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Response } from "../models";
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
export declare type ResponseUpdateFormInputValues = {
    playerID?: string;
    accepted?: boolean;
    appointmentID?: string;
    playerName?: string;
    playerPhoto?: string;
    teamID?: string;
};
export declare type ResponseUpdateFormValidationValues = {
    playerID?: ValidationFunction<string>;
    accepted?: ValidationFunction<boolean>;
    appointmentID?: ValidationFunction<string>;
    playerName?: ValidationFunction<string>;
    playerPhoto?: ValidationFunction<string>;
    teamID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResponseUpdateFormOverridesProps = {
    ResponseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    playerID?: PrimitiveOverrideProps<TextFieldProps>;
    accepted?: PrimitiveOverrideProps<SwitchFieldProps>;
    appointmentID?: PrimitiveOverrideProps<AutocompleteProps>;
    playerName?: PrimitiveOverrideProps<TextFieldProps>;
    playerPhoto?: PrimitiveOverrideProps<TextFieldProps>;
    teamID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ResponseUpdateFormProps = React.PropsWithChildren<{
    overrides?: ResponseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    response?: Response;
    onSubmit?: (fields: ResponseUpdateFormInputValues) => ResponseUpdateFormInputValues;
    onSuccess?: (fields: ResponseUpdateFormInputValues) => void;
    onError?: (fields: ResponseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResponseUpdateFormInputValues) => ResponseUpdateFormInputValues;
    onValidate?: ResponseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ResponseUpdateForm(props: ResponseUpdateFormProps): React.ReactElement;
