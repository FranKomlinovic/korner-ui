/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ReccuringAppointment, Appointment } from "../models";
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
export declare type ReccuringAppointmentUpdateFormInputValues = {
    bookerID?: string;
    start?: string;
    end?: string;
    fieldsID?: string;
    startDate?: string;
    endDate?: string;
    bookerName?: string;
    Appointments?: Appointment[];
    canceled?: boolean;
};
export declare type ReccuringAppointmentUpdateFormValidationValues = {
    bookerID?: ValidationFunction<string>;
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
    fieldsID?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    bookerName?: ValidationFunction<string>;
    Appointments?: ValidationFunction<Appointment>;
    canceled?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReccuringAppointmentUpdateFormOverridesProps = {
    ReccuringAppointmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bookerID?: PrimitiveOverrideProps<TextFieldProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
    fieldsID?: PrimitiveOverrideProps<AutocompleteProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    bookerName?: PrimitiveOverrideProps<TextFieldProps>;
    Appointments?: PrimitiveOverrideProps<AutocompleteProps>;
    canceled?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ReccuringAppointmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReccuringAppointmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reccuringAppointment?: ReccuringAppointment;
    onSubmit?: (fields: ReccuringAppointmentUpdateFormInputValues) => ReccuringAppointmentUpdateFormInputValues;
    onSuccess?: (fields: ReccuringAppointmentUpdateFormInputValues) => void;
    onError?: (fields: ReccuringAppointmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReccuringAppointmentUpdateFormInputValues) => ReccuringAppointmentUpdateFormInputValues;
    onValidate?: ReccuringAppointmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReccuringAppointmentUpdateForm(props: ReccuringAppointmentUpdateFormProps): React.ReactElement;
