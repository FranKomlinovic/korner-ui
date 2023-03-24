/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Appointment } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AvailableSlotsOverridesProps = {
    AvailableSlots?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AvailableSlotsProps = React.PropsWithChildren<Partial<ViewProps> & {
    appointment?: Appointment;
} & {
    overrides?: AvailableSlotsOverridesProps | undefined | null;
}>;
export default function AvailableSlots(props: AvailableSlotsProps): React.ReactElement;
