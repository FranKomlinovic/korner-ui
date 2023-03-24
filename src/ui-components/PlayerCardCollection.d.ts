/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PlayerCardProps } from "./PlayerCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayerCardCollectionOverridesProps = {
    PlayerCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    PlayerCard?: PlayerCardProps;
} & EscapeHatchProps;
export declare type PlayerCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PlayerCardProps;
} & {
    overrides?: PlayerCardCollectionOverridesProps | undefined | null;
}>;
export default function PlayerCardCollection(props: PlayerCardCollectionProps): React.ReactElement;
