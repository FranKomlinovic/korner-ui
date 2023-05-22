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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Appointment, Response, Fields as Fields0 } from "../models";
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
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function AppointmentCreateForm(props) {
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
    start: "",
    end: "",
    Responses: [],
    date: "",
    confirmed: false,
    bookerID: "",
    bookerName: "",
    sport: "",
    price: "",
    canceled: false,
    Fields: undefined,
    locked: false,
  };
  const [start, setStart] = React.useState(initialValues.start);
  const [end, setEnd] = React.useState(initialValues.end);
  const [Responses, setResponses] = React.useState(initialValues.Responses);
  const [date, setDate] = React.useState(initialValues.date);
  const [confirmed, setConfirmed] = React.useState(initialValues.confirmed);
  const [bookerID, setBookerID] = React.useState(initialValues.bookerID);
  const [bookerName, setBookerName] = React.useState(initialValues.bookerName);
  const [sport, setSport] = React.useState(initialValues.sport);
  const [price, setPrice] = React.useState(initialValues.price);
  const [canceled, setCanceled] = React.useState(initialValues.canceled);
  const [Fields, setFields] = React.useState(initialValues.Fields);
  const [locked, setLocked] = React.useState(initialValues.locked);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStart(initialValues.start);
    setEnd(initialValues.end);
    setResponses(initialValues.Responses);
    setCurrentResponsesValue(undefined);
    setCurrentResponsesDisplayValue("");
    setDate(initialValues.date);
    setConfirmed(initialValues.confirmed);
    setBookerID(initialValues.bookerID);
    setBookerName(initialValues.bookerName);
    setSport(initialValues.sport);
    setPrice(initialValues.price);
    setCanceled(initialValues.canceled);
    setFields(initialValues.Fields);
    setCurrentFieldsValue(undefined);
    setCurrentFieldsDisplayValue("");
    setLocked(initialValues.locked);
    setErrors({});
  };
  const [currentResponsesDisplayValue, setCurrentResponsesDisplayValue] =
    React.useState("");
  const [currentResponsesValue, setCurrentResponsesValue] =
    React.useState(undefined);
  const ResponsesRef = React.createRef();
  const [currentFieldsDisplayValue, setCurrentFieldsDisplayValue] =
    React.useState("");
  const [currentFieldsValue, setCurrentFieldsValue] = React.useState(undefined);
  const FieldsRef = React.createRef();
  const getIDValue = {
    Responses: (r) => JSON.stringify({ id: r?.id }),
    Fields: (r) => JSON.stringify({ id: r?.id }),
  };
  const ResponsesIdSet = new Set(
    Array.isArray(Responses)
      ? Responses.map((r) => getIDValue.Responses?.(r))
      : getIDValue.Responses?.(Responses)
  );
  const FieldsIdSet = new Set(
    Array.isArray(Fields)
      ? Fields.map((r) => getIDValue.Fields?.(r))
      : getIDValue.Fields?.(Fields)
  );
  const responseRecords = useDataStoreBinding({
    type: "collection",
    model: Response,
  }).items;
  const fieldsRecords = useDataStoreBinding({
    type: "collection",
    model: Fields0,
  }).items;
  const getDisplayValue = {
    Responses: (r) => `${r?.accepted ? r?.accepted + " - " : ""}${r?.id}`,
    Fields: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    start: [{ type: "Required" }],
    end: [{ type: "Required" }],
    Responses: [],
    date: [{ type: "Required" }],
    confirmed: [],
    bookerID: [],
    bookerName: [],
    sport: [],
    price: [],
    canceled: [],
    Fields: [],
    locked: [],
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
          start,
          end,
          Responses,
          date,
          confirmed,
          bookerID,
          bookerName,
          sport,
          price,
          canceled,
          Fields,
          locked,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          const modelFieldsToSave = {
            start: modelFields.start,
            end: modelFields.end,
            date: modelFields.date,
            confirmed: modelFields.confirmed,
            bookerID: modelFields.bookerID,
            bookerName: modelFields.bookerName,
            sport: modelFields.sport,
            price: modelFields.price,
            canceled: modelFields.canceled,
            Fields: modelFields.Fields,
            locked: modelFields.locked,
          };
          const appointment = await DataStore.save(
            new Appointment(modelFieldsToSave)
          );
          const promises = [];
          promises.push(
            ...Responses.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Response.copyOf(original, (updated) => {
                    updated.appointmentID = appointment.id;
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
      {...getOverrideProps(overrides, "AppointmentCreateForm")}
      {...rest}
    >
      <TextField
        label="Start"
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={start}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start: value,
              end,
              Responses,
              date,
              confirmed,
              bookerID,
              bookerName,
              sport,
              price,
              canceled,
              Fields,
              locked,
            };
            const result = onChange(modelFields);
            value = result?.start ?? value;
          }
          if (errors.start?.hasError) {
            runValidationTasks("start", value);
          }
          setStart(value);
        }}
        onBlur={() => runValidationTasks("start", start)}
        errorMessage={errors.start?.errorMessage}
        hasError={errors.start?.hasError}
        {...getOverrideProps(overrides, "start")}
      ></TextField>
      <TextField
        label="End"
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={end}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end: value,
              Responses,
              date,
              confirmed,
              bookerID,
              bookerName,
              sport,
              price,
              canceled,
              Fields,
              locked,
            };
            const result = onChange(modelFields);
            value = result?.end ?? value;
          }
          if (errors.end?.hasError) {
            runValidationTasks("end", value);
          }
          setEnd(value);
        }}
        onBlur={() => runValidationTasks("end", end)}
        errorMessage={errors.end?.errorMessage}
        hasError={errors.end?.hasError}
        {...getOverrideProps(overrides, "end")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              start,
              end,
              Responses: values,
              date,
              confirmed,
              bookerID,
              bookerName,
              sport,
              price,
              canceled,
              Fields,
              locked,
            };
            const result = onChange(modelFields);
            values = result?.Responses ?? values;
          }
          setResponses(values);
          setCurrentResponsesValue(undefined);
          setCurrentResponsesDisplayValue("");
        }}
        currentFieldValue={currentResponsesValue}
        label={"Responses"}
        items={Responses}
        hasError={errors?.Responses?.hasError}
        errorMessage={errors?.Responses?.errorMessage}
        getBadgeText={getDisplayValue.Responses}
        setFieldValue={(model) => {
          setCurrentResponsesDisplayValue(
            model ? getDisplayValue.Responses(model) : ""
          );
          setCurrentResponsesValue(model);
        }}
        inputFieldRef={ResponsesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Responses"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Response"
          value={currentResponsesDisplayValue}
          options={responseRecords
            .filter((r) => !ResponsesIdSet.has(getIDValue.Responses?.(r)))
            .map((r) => ({
              id: getIDValue.Responses?.(r),
              label: getDisplayValue.Responses?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentResponsesValue(
              responseRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentResponsesDisplayValue(label);
            runValidationTasks("Responses", label);
          }}
          onClear={() => {
            setCurrentResponsesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Responses?.hasError) {
              runValidationTasks("Responses", value);
            }
            setCurrentResponsesDisplayValue(value);
            setCurrentResponsesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Responses", currentResponsesDisplayValue)
          }
          errorMessage={errors.Responses?.errorMessage}
          hasError={errors.Responses?.hasError}
          ref={ResponsesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Responses")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              Responses,
              date: value,
              confirmed,
              bookerID,
              bookerName,
              sport,
              price,
              canceled,
              Fields,
              locked,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <SwitchField
        label="Confirmed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={confirmed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              start,
              end,
              Responses,
              date,
              confirmed: value,
              bookerID,
              bookerName,
              sport,
              price,
              canceled,
              Fields,
              locked,
            };
            const result = onChange(modelFields);
            value = result?.confirmed ?? value;
          }
          if (errors.confirmed?.hasError) {
            runValidationTasks("confirmed", value);
          }
          setConfirmed(value);
        }}
        onBlur={() => runValidationTasks("confirmed", confirmed)}
        errorMessage={errors.confirmed?.errorMessage}
        hasError={errors.confirmed?.hasError}
        {...getOverrideProps(overrides, "confirmed")}
      ></SwitchField>
      <TextField
        label="Booker id"
        isRequired={false}
        isReadOnly={false}
        value={bookerID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              Responses,
              date,
              confirmed,
              bookerID: value,
              bookerName,
              sport,
              price,
              canceled,
              Fields,
              locked,
            };
            const result = onChange(modelFields);
            value = result?.bookerID ?? value;
          }
          if (errors.bookerID?.hasError) {
            runValidationTasks("bookerID", value);
          }
          setBookerID(value);
        }}
        onBlur={() => runValidationTasks("bookerID", bookerID)}
        errorMessage={errors.bookerID?.errorMessage}
        hasError={errors.bookerID?.hasError}
        {...getOverrideProps(overrides, "bookerID")}
      ></TextField>
      <TextField
        label="Booker name"
        isRequired={false}
        isReadOnly={false}
        value={bookerName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              Responses,
              date,
              confirmed,
              bookerID,
              bookerName: value,
              sport,
              price,
              canceled,
              Fields,
              locked,
            };
            const result = onChange(modelFields);
            value = result?.bookerName ?? value;
          }
          if (errors.bookerName?.hasError) {
            runValidationTasks("bookerName", value);
          }
          setBookerName(value);
        }}
        onBlur={() => runValidationTasks("bookerName", bookerName)}
        errorMessage={errors.bookerName?.errorMessage}
        hasError={errors.bookerName?.hasError}
        {...getOverrideProps(overrides, "bookerName")}
      ></TextField>
      <SelectField
        label="Sport"
        placeholder="Please select an option"
        isDisabled={false}
        value={sport}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              Responses,
              date,
              confirmed,
              bookerID,
              bookerName,
              sport: value,
              price,
              canceled,
              Fields,
              locked,
            };
            const result = onChange(modelFields);
            value = result?.sport ?? value;
          }
          if (errors.sport?.hasError) {
            runValidationTasks("sport", value);
          }
          setSport(value);
        }}
        onBlur={() => runValidationTasks("sport", sport)}
        errorMessage={errors.sport?.errorMessage}
        hasError={errors.sport?.hasError}
        {...getOverrideProps(overrides, "sport")}
      >
        <option
          children="Futsal"
          value="FUTSAL"
          {...getOverrideProps(overrides, "sportoption0")}
        ></option>
        <option
          children="Tennis"
          value="TENNIS"
          {...getOverrideProps(overrides, "sportoption1")}
        ></option>
        <option
          children="Basketball"
          value="BASKETBALL"
          {...getOverrideProps(overrides, "sportoption2")}
        ></option>
      </SelectField>
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
              start,
              end,
              Responses,
              date,
              confirmed,
              bookerID,
              bookerName,
              sport,
              price: value,
              canceled,
              Fields,
              locked,
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
      <SwitchField
        label="Canceled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={canceled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              start,
              end,
              Responses,
              date,
              confirmed,
              bookerID,
              bookerName,
              sport,
              price,
              canceled: value,
              Fields,
              locked,
            };
            const result = onChange(modelFields);
            value = result?.canceled ?? value;
          }
          if (errors.canceled?.hasError) {
            runValidationTasks("canceled", value);
          }
          setCanceled(value);
        }}
        onBlur={() => runValidationTasks("canceled", canceled)}
        errorMessage={errors.canceled?.errorMessage}
        hasError={errors.canceled?.hasError}
        {...getOverrideProps(overrides, "canceled")}
      ></SwitchField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              start,
              end,
              Responses,
              date,
              confirmed,
              bookerID,
              bookerName,
              sport,
              price,
              canceled,
              Fields: value,
              locked,
            };
            const result = onChange(modelFields);
            value = result?.Fields ?? value;
          }
          setFields(value);
          setCurrentFieldsValue(undefined);
          setCurrentFieldsDisplayValue("");
        }}
        currentFieldValue={currentFieldsValue}
        label={"Fields"}
        items={Fields ? [Fields] : []}
        hasError={errors?.Fields?.hasError}
        errorMessage={errors?.Fields?.errorMessage}
        getBadgeText={getDisplayValue.Fields}
        setFieldValue={(model) => {
          setCurrentFieldsDisplayValue(
            model ? getDisplayValue.Fields(model) : ""
          );
          setCurrentFieldsValue(model);
        }}
        inputFieldRef={FieldsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Fields"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Fields"
          value={currentFieldsDisplayValue}
          options={fieldsRecords
            .filter((r) => !FieldsIdSet.has(getIDValue.Fields?.(r)))
            .map((r) => ({
              id: getIDValue.Fields?.(r),
              label: getDisplayValue.Fields?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentFieldsValue(
              fieldsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentFieldsDisplayValue(label);
            runValidationTasks("Fields", label);
          }}
          onClear={() => {
            setCurrentFieldsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Fields?.hasError) {
              runValidationTasks("Fields", value);
            }
            setCurrentFieldsDisplayValue(value);
            setCurrentFieldsValue(undefined);
          }}
          onBlur={() => runValidationTasks("Fields", currentFieldsDisplayValue)}
          errorMessage={errors.Fields?.errorMessage}
          hasError={errors.Fields?.hasError}
          ref={FieldsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Fields")}
        ></Autocomplete>
      </ArrayField>
      <SwitchField
        label="Locked"
        defaultChecked={false}
        isDisabled={false}
        isChecked={locked}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              start,
              end,
              Responses,
              date,
              confirmed,
              bookerID,
              bookerName,
              sport,
              price,
              canceled,
              Fields,
              locked: value,
            };
            const result = onChange(modelFields);
            value = result?.locked ?? value;
          }
          if (errors.locked?.hasError) {
            runValidationTasks("locked", value);
          }
          setLocked(value);
        }}
        onBlur={() => runValidationTasks("locked", locked)}
        errorMessage={errors.locked?.errorMessage}
        hasError={errors.locked?.hasError}
        {...getOverrideProps(overrides, "locked")}
      ></SwitchField>
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
