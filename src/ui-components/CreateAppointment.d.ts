/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Fields, Appointment } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateAppointmentOverridesProps = {
    CreateAppointment?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    fieldName?: PrimitiveOverrideProps<TextProps>;
    day?: PrimitiveOverrideProps<TextProps>;
    time?: PrimitiveOverrideProps<TextProps>;
    price?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CreateAppointmentProps = React.PropsWithChildren<Partial<FlexProps> & {
    field?: Fields;
    appointment?: Appointment;
    day?: String;
} & {
    overrides?: CreateAppointmentOverridesProps | undefined | null;
}>;
export default function CreateAppointment(props: CreateAppointmentProps): React.ReactElement;
