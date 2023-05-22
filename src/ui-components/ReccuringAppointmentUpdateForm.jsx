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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { ReccuringAppointment, Fields } from "../models";
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
export default function ReccuringAppointmentUpdateForm(props) {
  const {
    id: idProp,
    reccuringAppointment: reccuringAppointmentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    bookerId: "",
    dayOfTheWeek: "",
    start: "",
    end: "",
    fieldsID: undefined,
    active: false,
  };
  const [bookerId, setBookerId] = React.useState(initialValues.bookerId);
  const [dayOfTheWeek, setDayOfTheWeek] = React.useState(
    initialValues.dayOfTheWeek
  );
  const [start, setStart] = React.useState(initialValues.start);
  const [end, setEnd] = React.useState(initialValues.end);
  const [fieldsID, setFieldsID] = React.useState(initialValues.fieldsID);
  const [active, setActive] = React.useState(initialValues.active);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = reccuringAppointmentRecord
      ? { ...initialValues, ...reccuringAppointmentRecord, fieldsID }
      : initialValues;
    setBookerId(cleanValues.bookerId);
    setDayOfTheWeek(cleanValues.dayOfTheWeek);
    setStart(cleanValues.start);
    setEnd(cleanValues.end);
    setFieldsID(cleanValues.fieldsID);
    setCurrentFieldsIDValue(undefined);
    setCurrentFieldsIDDisplayValue("");
    setActive(cleanValues.active);
    setErrors({});
  };
  const [reccuringAppointmentRecord, setReccuringAppointmentRecord] =
    React.useState(reccuringAppointmentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ReccuringAppointment, idProp)
        : reccuringAppointmentModelProp;
      setReccuringAppointmentRecord(record);
      const fieldsIDRecord = record ? await record.fieldsID : undefined;
      setFieldsID(fieldsIDRecord);
    };
    queryData();
  }, [idProp, reccuringAppointmentModelProp]);
  React.useEffect(resetStateValues, [reccuringAppointmentRecord, fieldsID]);
  const [currentFieldsIDDisplayValue, setCurrentFieldsIDDisplayValue] =
    React.useState("");
  const [currentFieldsIDValue, setCurrentFieldsIDValue] =
    React.useState(undefined);
  const fieldsIDRef = React.createRef();
  const fieldsRecords = useDataStoreBinding({
    type: "collection",
    model: Fields,
  }).items;
  const getDisplayValue = {
    fieldsID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    bookerId: [],
    dayOfTheWeek: [{ type: "Required" }],
    start: [{ type: "Required" }],
    end: [{ type: "Required" }],
    fieldsID: [{ type: "Required" }],
    active: [],
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
          bookerId,
          dayOfTheWeek,
          start,
          end,
          fieldsID,
          active,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
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
          await DataStore.save(
            ReccuringAppointment.copyOf(
              reccuringAppointmentRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReccuringAppointmentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Booker id"
        isRequired={false}
        isReadOnly={false}
        value={bookerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bookerId: value,
              dayOfTheWeek,
              start,
              end,
              fieldsID,
              active,
            };
            const result = onChange(modelFields);
            value = result?.bookerId ?? value;
          }
          if (errors.bookerId?.hasError) {
            runValidationTasks("bookerId", value);
          }
          setBookerId(value);
        }}
        onBlur={() => runValidationTasks("bookerId", bookerId)}
        errorMessage={errors.bookerId?.errorMessage}
        hasError={errors.bookerId?.hasError}
        {...getOverrideProps(overrides, "bookerId")}
      ></TextField>
      <TextField
        label="Day of the week"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={dayOfTheWeek}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              bookerId,
              dayOfTheWeek: value,
              start,
              end,
              fieldsID,
              active,
            };
            const result = onChange(modelFields);
            value = result?.dayOfTheWeek ?? value;
          }
          if (errors.dayOfTheWeek?.hasError) {
            runValidationTasks("dayOfTheWeek", value);
          }
          setDayOfTheWeek(value);
        }}
        onBlur={() => runValidationTasks("dayOfTheWeek", dayOfTheWeek)}
        errorMessage={errors.dayOfTheWeek?.errorMessage}
        hasError={errors.dayOfTheWeek?.hasError}
        {...getOverrideProps(overrides, "dayOfTheWeek")}
      ></TextField>
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
              bookerId,
              dayOfTheWeek,
              start: value,
              end,
              fieldsID,
              active,
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
              bookerId,
              dayOfTheWeek,
              start,
              end: value,
              fieldsID,
              active,
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
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              bookerId,
              dayOfTheWeek,
              start,
              end,
              fieldsID: value,
              active,
            };
            const result = onChange(modelFields);
            value = result?.fieldsID ?? value;
          }
          setFieldsID(value);
          setCurrentFieldsIDValue(undefined);
        }}
        currentFieldValue={currentFieldsIDValue}
        label={"Fields id"}
        items={fieldsID ? [fieldsID] : []}
        hasError={errors?.fieldsID?.hasError}
        errorMessage={errors?.fieldsID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.fieldsID(
                fieldsRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentFieldsIDDisplayValue(
            value
              ? getDisplayValue.fieldsID(
                  fieldsRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentFieldsIDValue(value);
        }}
        inputFieldRef={fieldsIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Fields id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Fields"
          value={currentFieldsIDDisplayValue}
          options={fieldsRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.fieldsID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentFieldsIDValue(id);
            setCurrentFieldsIDDisplayValue(label);
            runValidationTasks("fieldsID", label);
          }}
          onClear={() => {
            setCurrentFieldsIDDisplayValue("");
          }}
          defaultValue={fieldsID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.fieldsID?.hasError) {
              runValidationTasks("fieldsID", value);
            }
            setCurrentFieldsIDDisplayValue(value);
            setCurrentFieldsIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("fieldsID", currentFieldsIDValue)}
          errorMessage={errors.fieldsID?.errorMessage}
          hasError={errors.fieldsID?.hasError}
          ref={fieldsIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "fieldsID")}
        ></Autocomplete>
      </ArrayField>
      <SwitchField
        label="Active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={active}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              bookerId,
              dayOfTheWeek,
              start,
              end,
              fieldsID,
              active: value,
            };
            const result = onChange(modelFields);
            value = result?.active ?? value;
          }
          if (errors.active?.hasError) {
            runValidationTasks("active", value);
          }
          setActive(value);
        }}
        onBlur={() => runValidationTasks("active", active)}
        errorMessage={errors.active?.errorMessage}
        hasError={errors.active?.hasError}
        {...getOverrideProps(overrides, "active")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || reccuringAppointmentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || reccuringAppointmentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
