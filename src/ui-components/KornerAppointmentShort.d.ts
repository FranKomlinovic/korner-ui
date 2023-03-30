/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Appointment } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KornerAppointmentShortOverridesProps = {
    KornerAppointmentShort?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    details?: PrimitiveOverrideProps<FlexProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    date?: PrimitiveOverrideProps<TextProps>;
    time?: PrimitiveOverrideProps<TextProps>;
    organizer?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type KornerAppointmentShortProps = React.PropsWithChildren<Partial<ViewProps> & {
    appointment?: Appointment;
    date?: String;
    status?: String;
} & {
    overrides?: KornerAppointmentShortOverridesProps | undefined | null;
}>;
export default function KornerAppointmentShort(props: KornerAppointmentShortProps): React.ReactElement;
