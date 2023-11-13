/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PossibleAppointments } from "../models";
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
export declare type PossibleAppointmentsUpdateFormInputValues = {
    start?: string;
    end?: string;
    priceForHour?: number;
    intervalInMinutes?: string;
    possibleLengthsInMinutes?: string;
    days?: string[];
    fieldsID?: string;
    interval?: string;
    possibleLengths?: string[];
};
export declare type PossibleAppointmentsUpdateFormValidationValues = {
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
    priceForHour?: ValidationFunction<number>;
    intervalInMinutes?: ValidationFunction<string>;
    possibleLengthsInMinutes?: ValidationFunction<string>;
    days?: ValidationFunction<string>;
    fieldsID?: ValidationFunction<string>;
    interval?: ValidationFunction<string>;
    possibleLengths?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PossibleAppointmentsUpdateFormOverridesProps = {
    PossibleAppointmentsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
    priceForHour?: PrimitiveOverrideProps<TextFieldProps>;
    intervalInMinutes?: PrimitiveOverrideProps<TextFieldProps>;
    possibleLengthsInMinutes?: PrimitiveOverrideProps<TextFieldProps>;
    days?: PrimitiveOverrideProps<SelectFieldProps>;
    fieldsID?: PrimitiveOverrideProps<AutocompleteProps>;
    interval?: PrimitiveOverrideProps<SelectFieldProps>;
    possibleLengths?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PossibleAppointmentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: PossibleAppointmentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    possibleAppointments?: PossibleAppointments;
    onSubmit?: (fields: PossibleAppointmentsUpdateFormInputValues) => PossibleAppointmentsUpdateFormInputValues;
    onSuccess?: (fields: PossibleAppointmentsUpdateFormInputValues) => void;
    onError?: (fields: PossibleAppointmentsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PossibleAppointmentsUpdateFormInputValues) => PossibleAppointmentsUpdateFormInputValues;
    onValidate?: PossibleAppointmentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PossibleAppointmentsUpdateForm(props: PossibleAppointmentsUpdateFormProps): React.ReactElement;
