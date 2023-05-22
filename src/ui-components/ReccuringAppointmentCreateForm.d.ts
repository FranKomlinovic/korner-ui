/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReccuringAppointmentCreateFormInputValues = {
    bookerId?: string;
    dayOfTheWeek?: number;
    start?: string;
    end?: string;
    fieldsID?: string;
    active?: boolean;
};
export declare type ReccuringAppointmentCreateFormValidationValues = {
    bookerId?: ValidationFunction<string>;
    dayOfTheWeek?: ValidationFunction<number>;
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
    fieldsID?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReccuringAppointmentCreateFormOverridesProps = {
    ReccuringAppointmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bookerId?: PrimitiveOverrideProps<TextFieldProps>;
    dayOfTheWeek?: PrimitiveOverrideProps<TextFieldProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
    fieldsID?: PrimitiveOverrideProps<AutocompleteProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ReccuringAppointmentCreateFormProps = React.PropsWithChildren<{
    overrides?: ReccuringAppointmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReccuringAppointmentCreateFormInputValues) => ReccuringAppointmentCreateFormInputValues;
    onSuccess?: (fields: ReccuringAppointmentCreateFormInputValues) => void;
    onError?: (fields: ReccuringAppointmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReccuringAppointmentCreateFormInputValues) => ReccuringAppointmentCreateFormInputValues;
    onValidate?: ReccuringAppointmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReccuringAppointmentCreateForm(props: ReccuringAppointmentCreateFormProps): React.ReactElement;
