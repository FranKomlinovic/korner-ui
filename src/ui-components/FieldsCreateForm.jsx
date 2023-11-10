/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import {
  Fields,
  Appointment,
  ReccuringAppointment,
  PossibleAppointments as PossibleAppointments0,
} from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function FieldsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    address: "",
    width: "",
    length: "",
    price: "",
    minPlayers: "",
    Appointments: [],
    surface: "",
    photo: "",
    sports: [],
    city: "",
    ReccuringAppointments: [],
    ownerID: "",
    workTimeStart: "",
    workTimeEnd: "",
    phoneNumber: "",
    PossibleAppointments: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [address, setAddress] = React.useState(initialValues.address);
  const [width, setWidth] = React.useState(initialValues.width);
  const [length, setLength] = React.useState(initialValues.length);
  const [price, setPrice] = React.useState(initialValues.price);
  const [minPlayers, setMinPlayers] = React.useState(initialValues.minPlayers);
  const [Appointments, setAppointments] = React.useState(
    initialValues.Appointments
  );
  const [surface, setSurface] = React.useState(initialValues.surface);
  const [photo, setPhoto] = React.useState(initialValues.photo);
  const [sports, setSports] = React.useState(initialValues.sports);
  const [city, setCity] = React.useState(initialValues.city);
  const [ReccuringAppointments, setReccuringAppointments] = React.useState(
    initialValues.ReccuringAppointments
  );
  const [ownerID, setOwnerID] = React.useState(initialValues.ownerID);
  const [workTimeStart, setWorkTimeStart] = React.useState(
    initialValues.workTimeStart
  );
  const [workTimeEnd, setWorkTimeEnd] = React.useState(
    initialValues.workTimeEnd
  );
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [PossibleAppointments, setPossibleAppointments] = React.useState(
    initialValues.PossibleAppointments
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setAddress(initialValues.address);
    setWidth(initialValues.width);
    setLength(initialValues.length);
    setPrice(initialValues.price);
    setMinPlayers(initialValues.minPlayers);
    setAppointments(initialValues.Appointments);
    setCurrentAppointmentsValue(undefined);
    setCurrentAppointmentsDisplayValue("");
    setSurface(initialValues.surface);
    setPhoto(initialValues.photo);
    setSports(initialValues.sports);
    setCurrentSportsValue("");
    setCity(initialValues.city);
    setReccuringAppointments(initialValues.ReccuringAppointments);
    setCurrentReccuringAppointmentsValue(undefined);
    setCurrentReccuringAppointmentsDisplayValue("");
    setOwnerID(initialValues.ownerID);
    setWorkTimeStart(initialValues.workTimeStart);
    setWorkTimeEnd(initialValues.workTimeEnd);
    setPhoneNumber(initialValues.phoneNumber);
    setPossibleAppointments(initialValues.PossibleAppointments);
    setCurrentPossibleAppointmentsValue(undefined);
    setCurrentPossibleAppointmentsDisplayValue("");
    setErrors({});
  };
  const [currentAppointmentsDisplayValue, setCurrentAppointmentsDisplayValue] =
    React.useState("");
  const [currentAppointmentsValue, setCurrentAppointmentsValue] =
    React.useState(undefined);
  const AppointmentsRef = React.createRef();
  const [currentSportsValue, setCurrentSportsValue] = React.useState("");
  const sportsRef = React.createRef();
  const [
    currentReccuringAppointmentsDisplayValue,
    setCurrentReccuringAppointmentsDisplayValue,
  ] = React.useState("");
  const [
    currentReccuringAppointmentsValue,
    setCurrentReccuringAppointmentsValue,
  ] = React.useState(undefined);
  const ReccuringAppointmentsRef = React.createRef();
  const [
    currentPossibleAppointmentsDisplayValue,
    setCurrentPossibleAppointmentsDisplayValue,
  ] = React.useState("");
  const [
    currentPossibleAppointmentsValue,
    setCurrentPossibleAppointmentsValue,
  ] = React.useState(undefined);
  const PossibleAppointmentsRef = React.createRef();
  const getIDValue = {
    Appointments: (r) => JSON.stringify({ id: r?.id }),
    ReccuringAppointments: (r) => JSON.stringify({ id: r?.id }),
    PossibleAppointments: (r) => JSON.stringify({ id: r?.id }),
  };
  const AppointmentsIdSet = new Set(
    Array.isArray(Appointments)
      ? Appointments.map((r) => getIDValue.Appointments?.(r))
      : getIDValue.Appointments?.(Appointments)
  );
  const ReccuringAppointmentsIdSet = new Set(
    Array.isArray(ReccuringAppointments)
      ? ReccuringAppointments.map((r) => getIDValue.ReccuringAppointments?.(r))
      : getIDValue.ReccuringAppointments?.(ReccuringAppointments)
  );
  const PossibleAppointmentsIdSet = new Set(
    Array.isArray(PossibleAppointments)
      ? PossibleAppointments.map((r) => getIDValue.PossibleAppointments?.(r))
      : getIDValue.PossibleAppointments?.(PossibleAppointments)
  );
  const appointmentRecords = useDataStoreBinding({
    type: "collection",
    model: Appointment,
  }).items;
  const reccuringAppointmentRecords = useDataStoreBinding({
    type: "collection",
    model: ReccuringAppointment,
  }).items;
  const possibleAppointmentsRecords = useDataStoreBinding({
    type: "collection",
    model: PossibleAppointments0,
  }).items;
  const getDisplayValue = {
    Appointments: (r) => `${r?.confirmed ? r?.confirmed + " - " : ""}${r?.id}`,
    sports: (r) => {
      const enumDisplayValueMap = {
        FUTSAL: "Futsal",
        TENNIS: "Tennis",
        BASKETBALL: "Basketball",
        PING_PONG: "Ping pong",
        BADMINTON: "Badminton",
      };
      return enumDisplayValueMap[r];
    },
    ReccuringAppointments: (r) =>
      `${r?.bookerName ? r?.bookerName + " - " : ""}${r?.id}`,
    PossibleAppointments: (r) =>
      `${r?.priceForHour ? r?.priceForHour + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    address: [],
    width: [],
    length: [],
    price: [],
    minPlayers: [],
    Appointments: [],
    surface: [],
    photo: [],
    sports: [],
    city: [],
    ReccuringAppointments: [],
    ownerID: [],
    workTimeStart: [],
    workTimeEnd: [],
    phoneNumber: [{ type: "Phone" }],
    PossibleAppointments: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          address,
          width,
          length,
          price,
          minPlayers,
          Appointments,
          surface,
          photo,
          sports,
          city,
          ReccuringAppointments,
          ownerID,
          workTimeStart,
          workTimeEnd,
          phoneNumber,
          PossibleAppointments,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            address: modelFields.address,
            width: modelFields.width,
            length: modelFields.length,
            price: modelFields.price,
            minPlayers: modelFields.minPlayers,
            surface: modelFields.surface,
            photo: modelFields.photo,
            sports: modelFields.sports,
            city: modelFields.city,
            ownerID: modelFields.ownerID,
            workTimeStart: modelFields.workTimeStart,
            workTimeEnd: modelFields.workTimeEnd,
            phoneNumber: modelFields.phoneNumber,
          };
          const fields = await DataStore.save(new Fields(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...Appointments.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Appointment.copyOf(original, (updated) => {
                    updated.Fields = fields;
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...ReccuringAppointments.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  ReccuringAppointment.copyOf(original, (updated) => {
                    updated.fieldsID = fields.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...PossibleAppointments.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  PossibleAppointments.copyOf(original, (updated) => {
                    updated.fieldsID = fields.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "FieldsCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              address,
              width,
              length,
              price,
              minPlayers,
              Appointments,
              surface,
              photo,
              sports,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address: value,
              width,
              length,
              price,
              minPlayers,
              Appointments,
              surface,
              photo,
              sports,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Width"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={width}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              address,
              width: value,
              length,
              price,
              minPlayers,
              Appointments,
              surface,
              photo,
              sports,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            value = result?.width ?? value;
          }
          if (errors.width?.hasError) {
            runValidationTasks("width", value);
          }
          setWidth(value);
        }}
        onBlur={() => runValidationTasks("width", width)}
        errorMessage={errors.width?.errorMessage}
        hasError={errors.width?.hasError}
        {...getOverrideProps(overrides, "width")}
      ></TextField>
      <TextField
        label="Length"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={length}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length: value,
              price,
              minPlayers,
              Appointments,
              surface,
              photo,
              sports,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            value = result?.length ?? value;
          }
          if (errors.length?.hasError) {
            runValidationTasks("length", value);
          }
          setLength(value);
        }}
        onBlur={() => runValidationTasks("length", length)}
        errorMessage={errors.length?.errorMessage}
        hasError={errors.length?.hasError}
        {...getOverrideProps(overrides, "length")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length,
              price: value,
              minPlayers,
              Appointments,
              surface,
              photo,
              sports,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Min players"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={minPlayers}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length,
              price,
              minPlayers: value,
              Appointments,
              surface,
              photo,
              sports,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            value = result?.minPlayers ?? value;
          }
          if (errors.minPlayers?.hasError) {
            runValidationTasks("minPlayers", value);
          }
          setMinPlayers(value);
        }}
        onBlur={() => runValidationTasks("minPlayers", minPlayers)}
        errorMessage={errors.minPlayers?.errorMessage}
        hasError={errors.minPlayers?.hasError}
        {...getOverrideProps(overrides, "minPlayers")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length,
              price,
              minPlayers,
              Appointments: values,
              surface,
              photo,
              sports,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            values = result?.Appointments ?? values;
          }
          setAppointments(values);
          setCurrentAppointmentsValue(undefined);
          setCurrentAppointmentsDisplayValue("");
        }}
        currentFieldValue={currentAppointmentsValue}
        label={"Appointments"}
        items={Appointments}
        hasError={errors?.Appointments?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Appointments", currentAppointmentsValue)
        }
        errorMessage={errors?.Appointments?.errorMessage}
        getBadgeText={getDisplayValue.Appointments}
        setFieldValue={(model) => {
          setCurrentAppointmentsDisplayValue(
            model ? getDisplayValue.Appointments(model) : ""
          );
          setCurrentAppointmentsValue(model);
        }}
        inputFieldRef={AppointmentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Appointments"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Appointment"
          value={currentAppointmentsDisplayValue}
          options={appointmentRecords
            .filter((r) => !AppointmentsIdSet.has(getIDValue.Appointments?.(r)))
            .map((r) => ({
              id: getIDValue.Appointments?.(r),
              label: getDisplayValue.Appointments?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAppointmentsValue(
              appointmentRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAppointmentsDisplayValue(label);
            runValidationTasks("Appointments", label);
          }}
          onClear={() => {
            setCurrentAppointmentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Appointments?.hasError) {
              runValidationTasks("Appointments", value);
            }
            setCurrentAppointmentsDisplayValue(value);
            setCurrentAppointmentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Appointments", currentAppointmentsDisplayValue)
          }
          errorMessage={errors.Appointments?.errorMessage}
          hasError={errors.Appointments?.hasError}
          ref={AppointmentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Appointments")}
        ></Autocomplete>
      </ArrayField>
      <SelectField
        label="Surface"
        placeholder="Please select an option"
        isDisabled={false}
        value={surface}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length,
              price,
              minPlayers,
              Appointments,
              surface: value,
              photo,
              sports,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            value = result?.surface ?? value;
          }
          if (errors.surface?.hasError) {
            runValidationTasks("surface", value);
          }
          setSurface(value);
        }}
        onBlur={() => runValidationTasks("surface", surface)}
        errorMessage={errors.surface?.errorMessage}
        hasError={errors.surface?.hasError}
        {...getOverrideProps(overrides, "surface")}
      >
        <option
          children="Artificial grass"
          value="ARTIFICIAL_GRASS"
          {...getOverrideProps(overrides, "surfaceoption0")}
        ></option>
        <option
          children="Rubber"
          value="RUBBER"
          {...getOverrideProps(overrides, "surfaceoption1")}
        ></option>
        <option
          children="Concrete"
          value="CONCRETE"
          {...getOverrideProps(overrides, "surfaceoption2")}
        ></option>
        <option
          children="Wood"
          value="WOOD"
          {...getOverrideProps(overrides, "surfaceoption3")}
        ></option>
        <option
          children="Grass"
          value="GRASS"
          {...getOverrideProps(overrides, "surfaceoption4")}
        ></option>
      </SelectField>
      <TextField
        label="Photo"
        isRequired={false}
        isReadOnly={false}
        value={photo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length,
              price,
              minPlayers,
              Appointments,
              surface,
              photo: value,
              sports,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            value = result?.photo ?? value;
          }
          if (errors.photo?.hasError) {
            runValidationTasks("photo", value);
          }
          setPhoto(value);
        }}
        onBlur={() => runValidationTasks("photo", photo)}
        errorMessage={errors.photo?.errorMessage}
        hasError={errors.photo?.hasError}
        {...getOverrideProps(overrides, "photo")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length,
              price,
              minPlayers,
              Appointments,
              surface,
              photo,
              sports: values,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            values = result?.sports ?? values;
          }
          setSports(values);
          setCurrentSportsValue("");
        }}
        currentFieldValue={currentSportsValue}
        label={"Sports"}
        items={sports}
        hasError={errors?.sports?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("sports", currentSportsValue)
        }
        errorMessage={errors?.sports?.errorMessage}
        getBadgeText={getDisplayValue.sports}
        setFieldValue={setCurrentSportsValue}
        inputFieldRef={sportsRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Sports"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentSportsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.sports?.hasError) {
              runValidationTasks("sports", value);
            }
            setCurrentSportsValue(value);
          }}
          onBlur={() => runValidationTasks("sports", currentSportsValue)}
          errorMessage={errors.sports?.errorMessage}
          hasError={errors.sports?.hasError}
          ref={sportsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "sports")}
        >
          <option
            children="Futsal"
            value="FUTSAL"
            {...getOverrideProps(overrides, "sportsoption0")}
          ></option>
          <option
            children="Tennis"
            value="TENNIS"
            {...getOverrideProps(overrides, "sportsoption1")}
          ></option>
          <option
            children="Basketball"
            value="BASKETBALL"
            {...getOverrideProps(overrides, "sportsoption2")}
          ></option>
          <option
            children="Ping pong"
            value="PING_PONG"
            {...getOverrideProps(overrides, "sportsoption3")}
          ></option>
          <option
            children="Badminton"
            value="BADMINTON"
            {...getOverrideProps(overrides, "sportsoption4")}
          ></option>
        </SelectField>
      </ArrayField>
      <SelectField
        label="City"
        placeholder="Please select an option"
        isDisabled={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length,
              price,
              minPlayers,
              Appointments,
              surface,
              photo,
              sports,
              city: value,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      >
        <option
          children="Petrinja"
          value="PETRINJA"
          {...getOverrideProps(overrides, "cityoption0")}
        ></option>
        <option
          children="Zagreb"
          value="ZAGREB"
          {...getOverrideProps(overrides, "cityoption1")}
        ></option>
        <option
          children="Sisak"
          value="SISAK"
          {...getOverrideProps(overrides, "cityoption2")}
        ></option>
        <option
          children="Velika gorica"
          value="VELIKA_GORICA"
          {...getOverrideProps(overrides, "cityoption3")}
        ></option>
        <option
          children="Split"
          value="SPLIT"
          {...getOverrideProps(overrides, "cityoption4")}
        ></option>
        <option
          children="Rijeka"
          value="RIJEKA"
          {...getOverrideProps(overrides, "cityoption5")}
        ></option>
        <option
          children="Osijek"
          value="OSIJEK"
          {...getOverrideProps(overrides, "cityoption6")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length,
              price,
              minPlayers,
              Appointments,
              surface,
              photo,
              sports,
              city,
              ReccuringAppointments: values,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            values = result?.ReccuringAppointments ?? values;
          }
          setReccuringAppointments(values);
          setCurrentReccuringAppointmentsValue(undefined);
          setCurrentReccuringAppointmentsDisplayValue("");
        }}
        currentFieldValue={currentReccuringAppointmentsValue}
        label={"Reccuring appointments"}
        items={ReccuringAppointments}
        hasError={errors?.ReccuringAppointments?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "ReccuringAppointments",
            currentReccuringAppointmentsValue
          )
        }
        errorMessage={errors?.ReccuringAppointments?.errorMessage}
        getBadgeText={getDisplayValue.ReccuringAppointments}
        setFieldValue={(model) => {
          setCurrentReccuringAppointmentsDisplayValue(
            model ? getDisplayValue.ReccuringAppointments(model) : ""
          );
          setCurrentReccuringAppointmentsValue(model);
        }}
        inputFieldRef={ReccuringAppointmentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Reccuring appointments"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ReccuringAppointment"
          value={currentReccuringAppointmentsDisplayValue}
          options={reccuringAppointmentRecords
            .filter(
              (r) =>
                !ReccuringAppointmentsIdSet.has(
                  getIDValue.ReccuringAppointments?.(r)
                )
            )
            .map((r) => ({
              id: getIDValue.ReccuringAppointments?.(r),
              label: getDisplayValue.ReccuringAppointments?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentReccuringAppointmentsValue(
              reccuringAppointmentRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentReccuringAppointmentsDisplayValue(label);
            runValidationTasks("ReccuringAppointments", label);
          }}
          onClear={() => {
            setCurrentReccuringAppointmentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ReccuringAppointments?.hasError) {
              runValidationTasks("ReccuringAppointments", value);
            }
            setCurrentReccuringAppointmentsDisplayValue(value);
            setCurrentReccuringAppointmentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "ReccuringAppointments",
              currentReccuringAppointmentsDisplayValue
            )
          }
          errorMessage={errors.ReccuringAppointments?.errorMessage}
          hasError={errors.ReccuringAppointments?.hasError}
          ref={ReccuringAppointmentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ReccuringAppointments")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Owner id"
        isRequired={false}
        isReadOnly={false}
        value={ownerID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length,
              price,
              minPlayers,
              Appointments,
              surface,
              photo,
              sports,
              city,
              ReccuringAppointments,
              ownerID: value,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            value = result?.ownerID ?? value;
          }
          if (errors.ownerID?.hasError) {
            runValidationTasks("ownerID", value);
          }
          setOwnerID(value);
        }}
        onBlur={() => runValidationTasks("ownerID", ownerID)}
        errorMessage={errors.ownerID?.errorMessage}
        hasError={errors.ownerID?.hasError}
        {...getOverrideProps(overrides, "ownerID")}
      ></TextField>
      <TextField
        label="Work time start"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={workTimeStart}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length,
              price,
              minPlayers,
              Appointments,
              surface,
              photo,
              sports,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart: value,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            value = result?.workTimeStart ?? value;
          }
          if (errors.workTimeStart?.hasError) {
            runValidationTasks("workTimeStart", value);
          }
          setWorkTimeStart(value);
        }}
        onBlur={() => runValidationTasks("workTimeStart", workTimeStart)}
        errorMessage={errors.workTimeStart?.errorMessage}
        hasError={errors.workTimeStart?.hasError}
        {...getOverrideProps(overrides, "workTimeStart")}
      ></TextField>
      <TextField
        label="Work time end"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={workTimeEnd}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length,
              price,
              minPlayers,
              Appointments,
              surface,
              photo,
              sports,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd: value,
              phoneNumber,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            value = result?.workTimeEnd ?? value;
          }
          if (errors.workTimeEnd?.hasError) {
            runValidationTasks("workTimeEnd", value);
          }
          setWorkTimeEnd(value);
        }}
        onBlur={() => runValidationTasks("workTimeEnd", workTimeEnd)}
        errorMessage={errors.workTimeEnd?.errorMessage}
        hasError={errors.workTimeEnd?.hasError}
        {...getOverrideProps(overrides, "workTimeEnd")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length,
              price,
              minPlayers,
              Appointments,
              surface,
              photo,
              sports,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber: value,
              PossibleAppointments,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              address,
              width,
              length,
              price,
              minPlayers,
              Appointments,
              surface,
              photo,
              sports,
              city,
              ReccuringAppointments,
              ownerID,
              workTimeStart,
              workTimeEnd,
              phoneNumber,
              PossibleAppointments: values,
            };
            const result = onChange(modelFields);
            values = result?.PossibleAppointments ?? values;
          }
          setPossibleAppointments(values);
          setCurrentPossibleAppointmentsValue(undefined);
          setCurrentPossibleAppointmentsDisplayValue("");
        }}
        currentFieldValue={currentPossibleAppointmentsValue}
        label={"Possible appointments"}
        items={PossibleAppointments}
        hasError={errors?.PossibleAppointments?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "PossibleAppointments",
            currentPossibleAppointmentsValue
          )
        }
        errorMessage={errors?.PossibleAppointments?.errorMessage}
        getBadgeText={getDisplayValue.PossibleAppointments}
        setFieldValue={(model) => {
          setCurrentPossibleAppointmentsDisplayValue(
            model ? getDisplayValue.PossibleAppointments(model) : ""
          );
          setCurrentPossibleAppointmentsValue(model);
        }}
        inputFieldRef={PossibleAppointmentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Possible appointments"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search PossibleAppointments"
          value={currentPossibleAppointmentsDisplayValue}
          options={possibleAppointmentsRecords
            .filter(
              (r) =>
                !PossibleAppointmentsIdSet.has(
                  getIDValue.PossibleAppointments?.(r)
                )
            )
            .map((r) => ({
              id: getIDValue.PossibleAppointments?.(r),
              label: getDisplayValue.PossibleAppointments?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPossibleAppointmentsValue(
              possibleAppointmentsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPossibleAppointmentsDisplayValue(label);
            runValidationTasks("PossibleAppointments", label);
          }}
          onClear={() => {
            setCurrentPossibleAppointmentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.PossibleAppointments?.hasError) {
              runValidationTasks("PossibleAppointments", value);
            }
            setCurrentPossibleAppointmentsDisplayValue(value);
            setCurrentPossibleAppointmentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "PossibleAppointments",
              currentPossibleAppointmentsDisplayValue
            )
          }
          errorMessage={errors.PossibleAppointments?.errorMessage}
          hasError={errors.PossibleAppointments?.hasError}
          ref={PossibleAppointmentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "PossibleAppointments")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
