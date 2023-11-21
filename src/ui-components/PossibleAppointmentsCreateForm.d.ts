/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PossibleAppointmentsCreateFormInputValues = {
    days?: string[];
    interval?: string;
    possibleLengths?: string[];
    start?: string;
    end?: string;
    priceForHour?: number;
};
export declare type PossibleAppointmentsCreateFormValidationValues = {
    days?: ValidationFunction<string>;
    interval?: ValidationFunction<string>;
    possibleLengths?: ValidationFunction<string>;
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
    priceForHour?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PossibleAppointmentsCreateFormOverridesProps = {
    PossibleAppointmentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    days?: PrimitiveOverrideProps<SelectFieldProps>;
    interval?: PrimitiveOverrideProps<SelectFieldProps>;
    possibleLengths?: PrimitiveOverrideProps<SelectFieldProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
    priceForHour?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PossibleAppointmentsCreateFormProps = React.PropsWithChildren<{
    overrides?: PossibleAppointmentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PossibleAppointmentsCreateFormInputValues) => PossibleAppointmentsCreateFormInputValues;
    onSuccess?: (fields: PossibleAppointmentsCreateFormInputValues) => void;
    onError?: (fields: PossibleAppointmentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PossibleAppointmentsCreateFormInputValues) => PossibleAppointmentsCreateFormInputValues;
    onValidate?: PossibleAppointmentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PossibleAppointmentsCreateForm(props: PossibleAppointmentsCreateFormProps): React.ReactElement;
