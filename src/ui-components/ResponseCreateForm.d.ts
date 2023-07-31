/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Team as Team0, Appointment as Appointment0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ResponseCreateFormInputValues = {
    playerID?: string;
    accepted?: boolean;
    playerName?: string;
    playerPhoto?: string;
    Team?: Team0;
    Appointment?: Appointment0;
};
export declare type ResponseCreateFormValidationValues = {
    playerID?: ValidationFunction<string>;
    accepted?: ValidationFunction<boolean>;
    playerName?: ValidationFunction<string>;
    playerPhoto?: ValidationFunction<string>;
    Team?: ValidationFunction<Team0>;
    Appointment?: ValidationFunction<Appointment0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResponseCreateFormOverridesProps = {
    ResponseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    playerID?: PrimitiveOverrideProps<TextFieldProps>;
    accepted?: PrimitiveOverrideProps<SwitchFieldProps>;
    playerName?: PrimitiveOverrideProps<TextFieldProps>;
    playerPhoto?: PrimitiveOverrideProps<TextFieldProps>;
    Team?: PrimitiveOverrideProps<AutocompleteProps>;
    Appointment?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ResponseCreateFormProps = React.PropsWithChildren<{
    overrides?: ResponseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ResponseCreateFormInputValues) => ResponseCreateFormInputValues;
    onSuccess?: (fields: ResponseCreateFormInputValues) => void;
    onError?: (fields: ResponseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResponseCreateFormInputValues) => ResponseCreateFormInputValues;
    onValidate?: ResponseCreateFormValidationValues;
} & React.CSSProperties>;
export default function ResponseCreateForm(props: ResponseCreateFormProps): React.ReactElement;
