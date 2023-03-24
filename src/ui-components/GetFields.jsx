/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Fields } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import StandardCard from "./StandardCard";
import { Collection } from "@aws-amplify/ui-react";
export default function GetFields(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.price(SortDirection.ASCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Fields,
    pagination: itemsPagination,
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
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Pretraži terene..."
      itemsPerPage={5}
      direction="column"
      alignItems="stretch"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "GetFields")}
      {...rest}
    >
      {(item, index) => (
        <StandardCard
          fields={item}
          margin="0px 0px 0 0px"
          height="auto"
          width="auto"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></StandardCard>
      )}
    </Collection>
  );
}
