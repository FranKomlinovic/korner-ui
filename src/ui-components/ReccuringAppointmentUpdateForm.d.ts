/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ReccuringAppointment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReccuringAppointmentUpdateFormInputValues = {
    bookerId?: string;
    dayOfTheWeek?: number;
    start?: string;
    end?: string;
    fieldsID?: string;
    active?: boolean;
};
export declare type ReccuringAppointmentUpdateFormValidationValues = {
    bookerId?: ValidationFunction<string>;
    dayOfTheWeek?: ValidationFunction<number>;
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
    fieldsID?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReccuringAppointmentUpdateFormOverridesProps = {
    ReccuringAppointmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bookerId?: PrimitiveOverrideProps<TextFieldProps>;
    dayOfTheWeek?: PrimitiveOverrideProps<TextFieldProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
    fieldsID?: PrimitiveOverrideProps<AutocompleteProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
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
