/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Team, Response } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeamUpdateFormInputValues = {
    appointmentID?: string;
    Responses?: Response[];
    name?: string;
    color?: string;
};
export declare type TeamUpdateFormValidationValues = {
    appointmentID?: ValidationFunction<string>;
    Responses?: ValidationFunction<Response>;
    name?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamUpdateFormOverridesProps = {
    TeamUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    appointmentID?: PrimitiveOverrideProps<AutocompleteProps>;
    Responses?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TeamUpdateFormProps = React.PropsWithChildren<{
    overrides?: TeamUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    team?: Team;
    onSubmit?: (fields: TeamUpdateFormInputValues) => TeamUpdateFormInputValues;
    onSuccess?: (fields: TeamUpdateFormInputValues) => void;
    onError?: (fields: TeamUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamUpdateFormInputValues) => TeamUpdateFormInputValues;
    onValidate?: TeamUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TeamUpdateForm(props: TeamUpdateFormProps): React.ReactElement;
