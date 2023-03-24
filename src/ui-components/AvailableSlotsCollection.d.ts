/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AvailableSlotsProps } from "./AvailableSlots";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AvailableSlotsCollectionOverridesProps = {
    AvailableSlotsCollection?: PrimitiveOverrideProps<CollectionProps>;
    AvailableSlots?: AvailableSlotsProps;
} & EscapeHatchProps;
export declare type AvailableSlotsCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => AvailableSlotsProps;
} & {
    overrides?: AvailableSlotsCollectionOverridesProps | undefined | null;
}>;
export default function AvailableSlotsCollection(props: AvailableSlotsCollectionProps): React.ReactElement;
