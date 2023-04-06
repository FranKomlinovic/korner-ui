/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Fields } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import KornerFieldShortNoImage from "./KornerFieldShortNoImage";
import { Collection } from "@aws-amplify/ui-react";
export default function KornerFieldShortNoImageCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Fields,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          Appointments: await item.Appointments.toArray(),
          ReccuringAppointments: await item.ReccuringAppointments.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "KornerFieldShortNoImageCollection")}
      {...rest}
    >
      {(item, index) => (
        <KornerFieldShortNoImage
          fields={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></KornerFieldShortNoImage>
      )}
    </Collection>
  );
}
