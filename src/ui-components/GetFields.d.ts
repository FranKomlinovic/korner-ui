/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StandardCardProps } from "./StandardCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GetFieldsOverridesProps = {
    GetFields?: PrimitiveOverrideProps<CollectionProps>;
    StandardCard?: StandardCardProps;
} & EscapeHatchProps;
export declare type GetFieldsProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => StandardCardProps;
} & {
    overrides?: GetFieldsOverridesProps | undefined | null;
}>;
export default function GetFields(props: GetFieldsProps): React.ReactElement;
