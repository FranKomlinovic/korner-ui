/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import KornerResponseUser from "./KornerResponseUser";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function KornerResponseUserCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "KornerResponseUserCollection")}
      {...rest}
    >
      {(item, index) => (
        <KornerResponseUser
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></KornerResponseUser>
      )}
    </Collection>
  );
}
