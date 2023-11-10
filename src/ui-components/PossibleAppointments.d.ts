/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PossibleAppointmentsInputValues = {
    start?: string;
    end?: string;
    priceForHour?: number;
    intervalInMinutes?: number;
    possibleLengthsInMinutes?: number[];
    days?: string[];
    fieldsID?: string;
};
export declare type PossibleAppointmentsValidationValues = {
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
    priceForHour?: ValidationFunction<number>;
    intervalInMinutes?: ValidationFunction<number>;
    possibleLengthsInMinutes?: ValidationFunction<number>;
    days?: ValidationFunction<string>;
    fieldsID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PossibleAppointmentsOverridesProps = {
    PossibleAppointmentsGrid?: PrimitiveOverrideProps<GridProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
    priceForHour?: PrimitiveOverrideProps<TextFieldProps>;
    intervalInMinutes?: PrimitiveOverrideProps<TextFieldProps>;
    possibleLengthsInMinutes?: PrimitiveOverrideProps<TextFieldProps>;
    days?: PrimitiveOverrideProps<SelectFieldProps>;
    fieldsID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type PossibleAppointmentsProps = React.PropsWithChildren<{
    overrides?: PossibleAppointmentsOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PossibleAppointmentsInputValues) => PossibleAppointmentsInputValues;
    onSuccess?: (fields: PossibleAppointmentsInputValues) => void;
    onError?: (fields: PossibleAppointmentsInputValues, errorMessage: string) => void;
    onChange?: (fields: PossibleAppointmentsInputValues) => PossibleAppointmentsInputValues;
    onValidate?: PossibleAppointmentsValidationValues;
} & React.CSSProperties>;
export default function PossibleAppointments(props: PossibleAppointmentsProps): React.ReactElement;
