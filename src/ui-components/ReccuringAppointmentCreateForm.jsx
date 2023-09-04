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
import { ReccuringAppointment, Appointment, Fields } from "../models";
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
export default function ReccuringAppointmentCreateForm(props) {
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
    bookerID: "",
    start: "",
    end: "",
    fieldsID: undefined,
    startDate: "",
    endDate: "",
    bookerName: "",
    Appointments: [],
    canceled: false,
  };
  const [bookerID, setBookerID] = React.useState(initialValues.bookerID);
  const [start, setStart] = React.useState(initialValues.start);
  const [end, setEnd] = React.useState(initialValues.end);
  const [fieldsID, setFieldsID] = React.useState(initialValues.fieldsID);
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [endDate, setEndDate] = React.useState(initialValues.endDate);
  const [bookerName, setBookerName] = React.useState(initialValues.bookerName);
  const [Appointments, setAppointments] = React.useState(
    initialValues.Appointments
  );
  const [canceled, setCanceled] = React.useState(initialValues.canceled);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBookerID(initialValues.bookerID);
    setStart(initialValues.start);
    setEnd(initialValues.end);
    setFieldsID(initialValues.fieldsID);
    setCurrentFieldsIDValue(undefined);
    setCurrentFieldsIDDisplayValue("");
    setStartDate(initialValues.startDate);
    setEndDate(initialValues.endDate);
    setBookerName(initialValues.bookerName);
    setAppointments(initialValues.Appointments);
    setCurrentAppointmentsValue(undefined);
    setCurrentAppointmentsDisplayValue("");
    setCanceled(initialValues.canceled);
    setErrors({});
  };
  const [currentFieldsIDDisplayValue, setCurrentFieldsIDDisplayValue] =
    React.useState("");
  const [currentFieldsIDValue, setCurrentFieldsIDValue] =
    React.useState(undefined);
  const fieldsIDRef = React.createRef();
  const [currentAppointmentsDisplayValue, setCurrentAppointmentsDisplayValue] =
    React.useState("");
  const [currentAppointmentsValue, setCurrentAppointmentsValue] =
    React.useState(undefined);
  const AppointmentsRef = React.createRef();
  const getIDValue = {
    Appointments: (r) => JSON.stringify({ id: r?.id }),
  };
  const AppointmentsIdSet = new Set(
    Array.isArray(Appointments)
      ? Appointments.map((r) => getIDValue.Appointments?.(r))
      : getIDValue.Appointments?.(Appointments)
  );
  const fieldsRecords = useDataStoreBinding({
    type: "collection",
    model: Fields,
  }).items;
  const appointmentRecords = useDataStoreBinding({
    type: "collection",
    model: Appointment,
  }).items;
  const getDisplayValue = {
    fieldsID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Appointments: (r) => `${r?.confirmed ? r?.confirmed + " - " : ""}${r?.id}`,
  };
  const validations = {
    bookerID: [],
    start: [{ type: "Required" }],
    end: [{ type: "Required" }],
    fieldsID: [{ type: "Required" }],
    startDate: [],
    endDate: [],
    bookerName: [],
    Appointments: [],
    canceled: [],
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
          bookerID,
          start,
          end,
          fieldsID,
          startDate,
          endDate,
          bookerName,
          Appointments,
          canceled,
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
            bookerID: modelFields.bookerID,
            start: modelFields.start,
            end: modelFields.end,
            fieldsID: modelFields.fieldsID,
            startDate: modelFields.startDate,
            endDate: modelFields.endDate,
            bookerName: modelFields.bookerName,
            canceled: modelFields.canceled,
          };
          const reccuringAppointment = await DataStore.save(
            new ReccuringAppointment(modelFieldsToSave)
          );
          const promises = [];
          promises.push(
            ...Appointments.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Appointment.copyOf(original, (updated) => {
                    updated.reccuringappointmentID = reccuringAppointment.id;
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
      {...getOverrideProps(overrides, "ReccuringAppointmentCreateForm")}
      {...rest}
    >
      <TextField
        label="Booker id"
        isRequired={false}
        isReadOnly={false}
        value={bookerID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bookerID: value,
              start,
              end,
              fieldsID,
              startDate,
              endDate,
              bookerName,
              Appointments,
              canceled,
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
        label="Start"
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={start}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bookerID,
              start: value,
              end,
              fieldsID,
              startDate,
              endDate,
              bookerName,
              Appointments,
              canceled,
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
              bookerID,
              start,
              end: value,
              fieldsID,
              startDate,
              endDate,
              bookerName,
              Appointments,
              canceled,
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
              bookerID,
              start,
              end,
              fieldsID: value,
              startDate,
              endDate,
              bookerName,
              Appointments,
              canceled,
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
        runValidationTasks={async () =>
          await runValidationTasks("fieldsID", currentFieldsIDValue)
        }
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
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={startDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bookerID,
              start,
              end,
              fieldsID,
              startDate: value,
              endDate,
              bookerName,
              Appointments,
              canceled,
            };
            const result = onChange(modelFields);
            value = result?.startDate ?? value;
          }
          if (errors.startDate?.hasError) {
            runValidationTasks("startDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("startDate", startDate)}
        errorMessage={errors.startDate?.errorMessage}
        hasError={errors.startDate?.hasError}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={endDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bookerID,
              start,
              end,
              fieldsID,
              startDate,
              endDate: value,
              bookerName,
              Appointments,
              canceled,
            };
            const result = onChange(modelFields);
            value = result?.endDate ?? value;
          }
          if (errors.endDate?.hasError) {
            runValidationTasks("endDate", value);
          }
          setEndDate(value);
        }}
        onBlur={() => runValidationTasks("endDate", endDate)}
        errorMessage={errors.endDate?.errorMessage}
        hasError={errors.endDate?.hasError}
        {...getOverrideProps(overrides, "endDate")}
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
              bookerID,
              start,
              end,
              fieldsID,
              startDate,
              endDate,
              bookerName: value,
              Appointments,
              canceled,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              bookerID,
              start,
              end,
              fieldsID,
              startDate,
              endDate,
              bookerName,
              Appointments: values,
              canceled,
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
      <SwitchField
        label="Canceled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={canceled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              bookerID,
              start,
              end,
              fieldsID,
              startDate,
              endDate,
              bookerName,
              Appointments,
              canceled: value,
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
