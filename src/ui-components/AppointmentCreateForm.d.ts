/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Response, Fields as Fields0, Team } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AppointmentCreateFormInputValues = {
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
    Teams?: Team[];
    reccuringappointmentID?: string;
};
export declare type AppointmentCreateFormValidationValues = {
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
    Teams?: ValidationFunction<Team>;
    reccuringappointmentID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppointmentCreateFormOverridesProps = {
    AppointmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    Teams?: PrimitiveOverrideProps<AutocompleteProps>;
    reccuringappointmentID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AppointmentCreateFormProps = React.PropsWithChildren<{
    overrides?: AppointmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AppointmentCreateFormInputValues) => AppointmentCreateFormInputValues;
    onSuccess?: (fields: AppointmentCreateFormInputValues) => void;
    onError?: (fields: AppointmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppointmentCreateFormInputValues) => AppointmentCreateFormInputValues;
    onValidate?: AppointmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function AppointmentCreateForm(props: AppointmentCreateFormProps): React.ReactElement;
