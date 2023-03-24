/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { KornerResponseUserProps } from "./KornerResponseUser";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KornerResponseUserCollectionOverridesProps = {
    KornerResponseUserCollection?: PrimitiveOverrideProps<CollectionProps>;
    KornerResponseUser?: KornerResponseUserProps;
} & EscapeHatchProps;
export declare type KornerResponseUserCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => KornerResponseUserProps;
} & {
    overrides?: KornerResponseUserCollectionOverridesProps | undefined | null;
}>;
export default function KornerResponseUserCollection(props: KornerResponseUserCollectionProps): React.ReactElement;
