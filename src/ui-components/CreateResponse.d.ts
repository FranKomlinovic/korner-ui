/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, GridProps, RadioGroupFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateResponseInputValues = {
    playerName?: string;
    accepted?: boolean;
    reserve?: boolean;
    playerPhoto?: string;
};
export declare type CreateResponseValidationValues = {
    playerName?: ValidationFunction<string>;
    accepted?: ValidationFunction<boolean>;
    reserve?: ValidationFunction<boolean>;
    playerPhoto?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateResponseOverridesProps = {
    CreateResponseGrid?: PrimitiveOverrideProps<GridProps>;
    playerName?: PrimitiveOverrideProps<TextFieldProps>;
    accepted?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    reserve?: PrimitiveOverrideProps<CheckboxFieldProps>;
    playerPhoto?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateResponseProps = React.PropsWithChildren<{
    overrides?: CreateResponseOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateResponseInputValues) => CreateResponseInputValues;
    onSuccess?: (fields: CreateResponseInputValues) => void;
    onError?: (fields: CreateResponseInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateResponseInputValues) => CreateResponseInputValues;
    onValidate?: CreateResponseValidationValues;
} & React.CSSProperties>;
export default function CreateResponse(props: CreateResponseProps): React.ReactElement;
