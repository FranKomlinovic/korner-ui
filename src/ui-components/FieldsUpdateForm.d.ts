/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Fields } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FieldsUpdateFormInputValues = {
    name?: string;
    address?: string;
    length?: number;
    width?: number;
    price?: number;
    minPlayers?: number;
    surface?: string;
    sports?: string[];
    city?: string;
};
export declare type FieldsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    length?: ValidationFunction<number>;
    width?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    minPlayers?: ValidationFunction<number>;
    surface?: ValidationFunction<string>;
    sports?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FieldsUpdateFormOverridesProps = {
    FieldsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    length?: PrimitiveOverrideProps<TextFieldProps>;
    width?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    minPlayers?: PrimitiveOverrideProps<TextFieldProps>;
    surface?: PrimitiveOverrideProps<SelectFieldProps>;
    sports?: PrimitiveOverrideProps<SelectFieldProps>;
    city?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type FieldsUpdateFormProps = React.PropsWithChildren<{
    overrides?: FieldsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fields?: Fields;
    onSubmit?: (fields: FieldsUpdateFormInputValues) => FieldsUpdateFormInputValues;
    onSuccess?: (fields: FieldsUpdateFormInputValues) => void;
    onError?: (fields: FieldsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FieldsUpdateFormInputValues) => FieldsUpdateFormInputValues;
    onValidate?: FieldsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FieldsUpdateForm(props: FieldsUpdateFormProps): React.ReactElement;
