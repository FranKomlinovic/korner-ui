/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FieldsCreateFormInputValues = {
    name?: string;
    address?: string;
    width?: number;
    length?: number;
    price?: number;
    minPlayers?: number;
    surface?: string;
    photo?: string;
    sports?: string[];
    city?: string;
    ownerID?: string;
    workTimeStart?: string;
    workTimeEnd?: string;
};
export declare type FieldsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    width?: ValidationFunction<number>;
    length?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    minPlayers?: ValidationFunction<number>;
    surface?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
    sports?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    ownerID?: ValidationFunction<string>;
    workTimeStart?: ValidationFunction<string>;
    workTimeEnd?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FieldsCreateFormOverridesProps = {
    FieldsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    width?: PrimitiveOverrideProps<TextFieldProps>;
    length?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    minPlayers?: PrimitiveOverrideProps<TextFieldProps>;
    surface?: PrimitiveOverrideProps<SelectFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    sports?: PrimitiveOverrideProps<SelectFieldProps>;
    city?: PrimitiveOverrideProps<SelectFieldProps>;
    ownerID?: PrimitiveOverrideProps<TextFieldProps>;
    workTimeStart?: PrimitiveOverrideProps<TextFieldProps>;
    workTimeEnd?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FieldsCreateFormProps = React.PropsWithChildren<{
    overrides?: FieldsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FieldsCreateFormInputValues) => FieldsCreateFormInputValues;
    onSuccess?: (fields: FieldsCreateFormInputValues) => void;
    onError?: (fields: FieldsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FieldsCreateFormInputValues) => FieldsCreateFormInputValues;
    onValidate?: FieldsCreateFormValidationValues;
} & React.CSSProperties>;
export default function FieldsCreateForm(props: FieldsCreateFormProps): React.ReactElement;
