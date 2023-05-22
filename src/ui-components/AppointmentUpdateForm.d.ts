/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Appointment, Response, Fields as Fields0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AppointmentUpdateFormInputValues = {
    start?: string;
    end?: string;
    Responses?: Response[];
    date?: string;
    confirmed?: boolean;
    bookerID?: string;
    bookerName?: string;
    sport?: string;
    price?: number;
    canceled?: boolean;
    Fields?: Fields0;
    locked?: boolean;
};
export declare type AppointmentUpdateFormValidationValues = {
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
    Responses?: ValidationFunction<Response>;
    date?: ValidationFunction<string>;
    confirmed?: ValidationFunction<boolean>;
    bookerID?: ValidationFunction<string>;
    bookerName?: ValidationFunction<string>;
    sport?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    canceled?: ValidationFunction<boolean>;
    Fields?: ValidationFunction<Fields0>;
    locked?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppointmentUpdateFormOverridesProps = {
    AppointmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
    Responses?: PrimitiveOverrideProps<AutocompleteProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    confirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
    bookerID?: PrimitiveOverrideProps<TextFieldProps>;
    bookerName?: PrimitiveOverrideProps<TextFieldProps>;
    sport?: PrimitiveOverrideProps<SelectFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    canceled?: PrimitiveOverrideProps<SwitchFieldProps>;
    Fields?: PrimitiveOverrideProps<AutocompleteProps>;
    locked?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AppointmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: AppointmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    appointment?: Appointment;
    onSubmit?: (fields: AppointmentUpdateFormInputValues) => AppointmentUpdateFormInputValues;
    onSuccess?: (fields: AppointmentUpdateFormInputValues) => void;
    onError?: (fields: AppointmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppointmentUpdateFormInputValues) => AppointmentUpdateFormInputValues;
    onValidate?: AppointmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AppointmentUpdateForm(props: AppointmentUpdateFormProps): React.ReactElement;
