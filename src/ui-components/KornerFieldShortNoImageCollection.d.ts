/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { KornerFieldShortNoImageProps } from "./KornerFieldShortNoImage";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KornerFieldShortNoImageCollectionOverridesProps = {
    KornerFieldShortNoImageCollection?: PrimitiveOverrideProps<CollectionProps>;
    KornerFieldShortNoImage?: KornerFieldShortNoImageProps;
} & EscapeHatchProps;
export declare type KornerFieldShortNoImageCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => KornerFieldShortNoImageProps;
} & {
    overrides?: KornerFieldShortNoImageCollectionOverridesProps | undefined | null;
}>;
export default function KornerFieldShortNoImageCollection(props: KornerFieldShortNoImageCollectionProps): React.ReactElement;
