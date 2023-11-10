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
import { PossibleAppointments, Fields } from "../models";
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
export default function PossibleAppointmentsUpdateForm(props) {
  const {
    id: idProp,
    possibleAppointments: possibleAppointmentsModelProp,
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
    priceForHour: "",
    intervalInMinutes: "",
    possibleLengthsInMinutes: "",
    days: [],
    fieldsID: undefined,
    interval: "",
    possibleLengths: [],
  };
  const [start, setStart] = React.useState(initialValues.start);
  const [end, setEnd] = React.useState(initialValues.end);
  const [priceForHour, setPriceForHour] = React.useState(
    initialValues.priceForHour
  );
  const [intervalInMinutes, setIntervalInMinutes] = React.useState(
    initialValues.intervalInMinutes
  );
  const [possibleLengthsInMinutes, setPossibleLengthsInMinutes] =
    React.useState(initialValues.possibleLengthsInMinutes);
  const [days, setDays] = React.useState(initialValues.days);
  const [fieldsID, setFieldsID] = React.useState(initialValues.fieldsID);
  const [interval, setInterval] = React.useState(initialValues.interval);
  const [possibleLengths, setPossibleLengths] = React.useState(
    initialValues.possibleLengths
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = possibleAppointmentsRecord
      ? { ...initialValues, ...possibleAppointmentsRecord, fieldsID }
      : initialValues;
    setStart(cleanValues.start);
    setEnd(cleanValues.end);
    setPriceForHour(cleanValues.priceForHour);
    setIntervalInMinutes(cleanValues.intervalInMinutes);
    setPossibleLengthsInMinutes(cleanValues.possibleLengthsInMinutes);
    setDays(cleanValues.days ?? []);
    setCurrentDaysValue("");
    setFieldsID(cleanValues.fieldsID);
    setCurrentFieldsIDValue(undefined);
    setCurrentFieldsIDDisplayValue("");
    setInterval(cleanValues.interval);
    setPossibleLengths(cleanValues.possibleLengths ?? []);
    setCurrentPossibleLengthsValue("");
    setErrors({});
  };
  const [possibleAppointmentsRecord, setPossibleAppointmentsRecord] =
    React.useState(possibleAppointmentsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PossibleAppointments, idProp)
        : possibleAppointmentsModelProp;
      setPossibleAppointmentsRecord(record);
      const fieldsIDRecord = record ? await record.fieldsID : undefined;
      setFieldsID(fieldsIDRecord);
    };
    queryData();
  }, [idProp, possibleAppointmentsModelProp]);
  React.useEffect(resetStateValues, [possibleAppointmentsRecord, fieldsID]);
  const [currentDaysValue, setCurrentDaysValue] = React.useState("");
  const daysRef = React.createRef();
  const [currentFieldsIDDisplayValue, setCurrentFieldsIDDisplayValue] =
    React.useState("");
  const [currentFieldsIDValue, setCurrentFieldsIDValue] =
    React.useState(undefined);
  const fieldsIDRef = React.createRef();
  const [currentPossibleLengthsValue, setCurrentPossibleLengthsValue] =
    React.useState("");
  const possibleLengthsRef = React.createRef();
  const fieldsRecords = useDataStoreBinding({
    type: "collection",
    model: Fields,
  }).items;
  const getDisplayValue = {
    days: (r) => {
      const enumDisplayValueMap = {
        MONDAY: "Monday",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Wednesday",
        THURSDAY: "Thursday",
        FRIDAY: "Friday",
        SATURDAY: "Saturday",
        SUNDAY: "Sunday",
      };
      return enumDisplayValueMap[r];
    },
    fieldsID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    possibleLengths: (r) => {
      const enumDisplayValueMap = {
        HALF_HOUR: "Half hour",
        HOUR: "Hour",
        HOUR_AND_HALF: "Hour and half",
        TWO_HOURS: "Two hours",
      };
      return enumDisplayValueMap[r];
    },
  };
  const validations = {
    start: [{ type: "Required" }],
    end: [{ type: "Required" }],
    priceForHour: [{ type: "Required" }],
    intervalInMinutes: [],
    possibleLengthsInMinutes: [],
    days: [{ type: "Required" }],
    fieldsID: [{ type: "Required" }],
    interval: [{ type: "Required" }],
    possibleLengths: [{ type: "Required" }],
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
          priceForHour,
          intervalInMinutes,
          possibleLengthsInMinutes,
          days,
          fieldsID,
          interval,
          possibleLengths,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            start: modelFields.start,
            end: modelFields.end,
            priceForHour: modelFields.priceForHour,
            days: modelFields.days,
            fieldsID: modelFields.fieldsID,
            interval: modelFields.interval,
            possibleLengths: modelFields.possibleLengths,
          };
          await DataStore.save(
            PossibleAppointments.copyOf(
              possibleAppointmentsRecord,
              (updated) => {
                Object.assign(updated, modelFieldsToSave);
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
      {...getOverrideProps(overrides, "PossibleAppointmentsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Početak"
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
              priceForHour,
              intervalInMinutes,
              possibleLengthsInMinutes,
              days,
              fieldsID,
              interval,
              possibleLengths,
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
        label="Kraj"
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
              priceForHour,
              intervalInMinutes,
              possibleLengthsInMinutes,
              days,
              fieldsID,
              interval,
              possibleLengths,
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
      <TextField
        label="Cijena sata"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={priceForHour}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              start,
              end,
              priceForHour: value,
              intervalInMinutes,
              possibleLengthsInMinutes,
              days,
              fieldsID,
              interval,
              possibleLengths,
            };
            const result = onChange(modelFields);
            value = result?.priceForHour ?? value;
          }
          if (errors.priceForHour?.hasError) {
            runValidationTasks("priceForHour", value);
          }
          setPriceForHour(value);
        }}
        onBlur={() => runValidationTasks("priceForHour", priceForHour)}
        errorMessage={errors.priceForHour?.errorMessage}
        hasError={errors.priceForHour?.hasError}
        {...getOverrideProps(overrides, "priceForHour")}
      ></TextField>
      <TextField
        label="Interval"
        type="number"
        step="any"
        value={intervalInMinutes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              priceForHour,
              intervalInMinutes: value,
              possibleLengthsInMinutes,
              days,
              fieldsID,
              interval,
              possibleLengths,
            };
            const result = onChange(modelFields);
            value = result?.intervalInMinutes ?? value;
          }
          if (errors.intervalInMinutes?.hasError) {
            runValidationTasks("intervalInMinutes", value);
          }
          setIntervalInMinutes(value);
        }}
        onBlur={() =>
          runValidationTasks("intervalInMinutes", intervalInMinutes)
        }
        errorMessage={errors.intervalInMinutes?.errorMessage}
        hasError={errors.intervalInMinutes?.hasError}
        {...getOverrideProps(overrides, "intervalInMinutes")}
      ></TextField>
      <TextField
        label="Label"
        value={possibleLengthsInMinutes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              priceForHour,
              intervalInMinutes,
              possibleLengthsInMinutes: value,
              days,
              fieldsID,
              interval,
              possibleLengths,
            };
            const result = onChange(modelFields);
            value = result?.possibleLengthsInMinutes ?? value;
          }
          if (errors.possibleLengthsInMinutes?.hasError) {
            runValidationTasks("possibleLengthsInMinutes", value);
          }
          setPossibleLengthsInMinutes(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "possibleLengthsInMinutes",
            possibleLengthsInMinutes
          )
        }
        errorMessage={errors.possibleLengthsInMinutes?.errorMessage}
        hasError={errors.possibleLengthsInMinutes?.hasError}
        {...getOverrideProps(overrides, "possibleLengthsInMinutes")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              start,
              end,
              priceForHour,
              intervalInMinutes,
              possibleLengthsInMinutes,
              days: values,
              fieldsID,
              interval,
              possibleLengths,
            };
            const result = onChange(modelFields);
            values = result?.days ?? values;
          }
          setDays(values);
          setCurrentDaysValue("");
        }}
        currentFieldValue={currentDaysValue}
        label={"Days"}
        items={days}
        hasError={errors?.days?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("days", currentDaysValue)
        }
        errorMessage={errors?.days?.errorMessage}
        getBadgeText={getDisplayValue.days}
        setFieldValue={setCurrentDaysValue}
        inputFieldRef={daysRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Days"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentDaysValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.days?.hasError) {
              runValidationTasks("days", value);
            }
            setCurrentDaysValue(value);
          }}
          onBlur={() => runValidationTasks("days", currentDaysValue)}
          errorMessage={errors.days?.errorMessage}
          hasError={errors.days?.hasError}
          ref={daysRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "days")}
        >
          <option
            children="Monday"
            value="MONDAY"
            {...getOverrideProps(overrides, "daysoption0")}
          ></option>
          <option
            children="Tuesday"
            value="TUESDAY"
            {...getOverrideProps(overrides, "daysoption1")}
          ></option>
          <option
            children="Wednesday"
            value="WEDNESDAY"
            {...getOverrideProps(overrides, "daysoption2")}
          ></option>
          <option
            children="Thursday"
            value="THURSDAY"
            {...getOverrideProps(overrides, "daysoption3")}
          ></option>
          <option
            children="Friday"
            value="FRIDAY"
            {...getOverrideProps(overrides, "daysoption4")}
          ></option>
          <option
            children="Saturday"
            value="SATURDAY"
            {...getOverrideProps(overrides, "daysoption5")}
          ></option>
          <option
            children="Sunday"
            value="SUNDAY"
            {...getOverrideProps(overrides, "daysoption6")}
          ></option>
        </SelectField>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              start,
              end,
              priceForHour,
              intervalInMinutes,
              possibleLengthsInMinutes,
              days,
              fieldsID: value,
              interval,
              possibleLengths,
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
      <SelectField
        label="Interval"
        placeholder="Please select an option"
        isDisabled={false}
        value={interval}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              priceForHour,
              intervalInMinutes,
              possibleLengthsInMinutes,
              days,
              fieldsID,
              interval: value,
              possibleLengths,
            };
            const result = onChange(modelFields);
            value = result?.interval ?? value;
          }
          if (errors.interval?.hasError) {
            runValidationTasks("interval", value);
          }
          setInterval(value);
        }}
        onBlur={() => runValidationTasks("interval", interval)}
        errorMessage={errors.interval?.errorMessage}
        hasError={errors.interval?.hasError}
        {...getOverrideProps(overrides, "interval")}
      >
        <option
          children="Half hour"
          value="HALF_HOUR"
          {...getOverrideProps(overrides, "intervaloption0")}
        ></option>
        <option
          children="Hour"
          value="HOUR"
          {...getOverrideProps(overrides, "intervaloption1")}
        ></option>
        <option
          children="Hour and half"
          value="HOUR_AND_HALF"
          {...getOverrideProps(overrides, "intervaloption2")}
        ></option>
        <option
          children="Two hours"
          value="TWO_HOURS"
          {...getOverrideProps(overrides, "intervaloption3")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              start,
              end,
              priceForHour,
              intervalInMinutes,
              possibleLengthsInMinutes,
              days,
              fieldsID,
              interval,
              possibleLengths: values,
            };
            const result = onChange(modelFields);
            values = result?.possibleLengths ?? values;
          }
          setPossibleLengths(values);
          setCurrentPossibleLengthsValue("");
        }}
        currentFieldValue={currentPossibleLengthsValue}
        label={"Possible lengths"}
        items={possibleLengths}
        hasError={errors?.possibleLengths?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "possibleLengths",
            currentPossibleLengthsValue
          )
        }
        errorMessage={errors?.possibleLengths?.errorMessage}
        getBadgeText={getDisplayValue.possibleLengths}
        setFieldValue={setCurrentPossibleLengthsValue}
        inputFieldRef={possibleLengthsRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Possible lengths"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentPossibleLengthsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.possibleLengths?.hasError) {
              runValidationTasks("possibleLengths", value);
            }
            setCurrentPossibleLengthsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("possibleLengths", currentPossibleLengthsValue)
          }
          errorMessage={errors.possibleLengths?.errorMessage}
          hasError={errors.possibleLengths?.hasError}
          ref={possibleLengthsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "possibleLengths")}
        >
          <option
            children="Half hour"
            value="HALF_HOUR"
            {...getOverrideProps(overrides, "possibleLengthsoption0")}
          ></option>
          <option
            children="Hour"
            value="HOUR"
            {...getOverrideProps(overrides, "possibleLengthsoption1")}
          ></option>
          <option
            children="Hour and half"
            value="HOUR_AND_HALF"
            {...getOverrideProps(overrides, "possibleLengthsoption2")}
          ></option>
          <option
            children="Two hours"
            value="TWO_HOURS"
            {...getOverrideProps(overrides, "possibleLengthsoption3")}
          ></option>
        </SelectField>
      </ArrayField>
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
          isDisabled={!(idProp || possibleAppointmentsModelProp)}
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
              !(idProp || possibleAppointmentsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
