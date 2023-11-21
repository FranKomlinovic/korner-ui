/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
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
import { PossibleAppointments } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
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
export default function PossibleAppointmentsCreateForm(props) {
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
    days: [],
    interval: "",
    possibleLengths: [],
    start: "",
    end: "",
    priceForHour: "",
  };
  const [days, setDays] = React.useState(initialValues.days);
  const [interval, setInterval] = React.useState(initialValues.interval);
  const [possibleLengths, setPossibleLengths] = React.useState(
    initialValues.possibleLengths
  );
  const [start, setStart] = React.useState(initialValues.start);
  const [end, setEnd] = React.useState(initialValues.end);
  const [priceForHour, setPriceForHour] = React.useState(
    initialValues.priceForHour
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDays(initialValues.days);
    setCurrentDaysValue("");
    setInterval(initialValues.interval);
    setPossibleLengths(initialValues.possibleLengths);
    setCurrentPossibleLengthsValue("");
    setStart(initialValues.start);
    setEnd(initialValues.end);
    setPriceForHour(initialValues.priceForHour);
    setErrors({});
  };
  const [currentDaysValue, setCurrentDaysValue] = React.useState("");
  const daysRef = React.createRef();
  const [currentPossibleLengthsValue, setCurrentPossibleLengthsValue] =
    React.useState("");
  const possibleLengthsRef = React.createRef();
  const getDisplayValue = {
    days: (r) => {
      const enumDisplayValueMap = {
        MONDAY: "Ponedjeljak",
        TUESDAY: "Utorak",
        WEDNESDAY: "Srijeda",
        THURSDAY: "\u010Cetvrtak",
        FRIDAY: "Petak",
        SATURDAY: "Subota",
        SUNDAY: "Nedjelja",
      };
      return enumDisplayValueMap[r];
    },
    possibleLengths: (r) => {
      const enumDisplayValueMap = {
        HALF_HOUR: "0:30h",
        HOUR: "1:00h",
        HOUR_AND_HALF: "1:30h",
        TWO_HOURS: "2:00h",
      };
      return enumDisplayValueMap[r];
    },
  };
  const validations = {
    days: [{ type: "Required" }],
    interval: [{ type: "Required" }],
    possibleLengths: [{ type: "Required" }],
    start: [{ type: "Required" }],
    end: [{ type: "Required" }],
    priceForHour: [{ type: "Required" }],
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
          days,
          interval,
          possibleLengths,
          start,
          end,
          priceForHour,
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
          await DataStore.save(new PossibleAppointments(modelFields));
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
      {...getOverrideProps(overrides, "PossibleAppointmentsCreateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              days: values,
              interval,
              possibleLengths,
              start,
              end,
              priceForHour,
            };
            const result = onChange(modelFields);
            values = result?.days ?? values;
          }
          setDays(values);
          setCurrentDaysValue("");
        }}
        currentFieldValue={currentDaysValue}
        label={"Dani"}
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
          label="Dani"
          placeholder="Odaberite dane za koje vrijedi"
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
            children="Ponedjeljak"
            value="MONDAY"
            {...getOverrideProps(overrides, "daysoption0")}
          ></option>
          <option
            children="Utorak"
            value="TUESDAY"
            {...getOverrideProps(overrides, "daysoption1")}
          ></option>
          <option
            children="Srijeda"
            value="WEDNESDAY"
            {...getOverrideProps(overrides, "daysoption2")}
          ></option>
          <option
            children="Četvrtak"
            value="THURSDAY"
            {...getOverrideProps(overrides, "daysoption3")}
          ></option>
          <option
            children="Petak"
            value="FRIDAY"
            {...getOverrideProps(overrides, "daysoption4")}
          ></option>
          <option
            children="Subota"
            value="SATURDAY"
            {...getOverrideProps(overrides, "daysoption5")}
          ></option>
          <option
            children="Nedjelja"
            value="SUNDAY"
            {...getOverrideProps(overrides, "daysoption6")}
          ></option>
        </SelectField>
      </ArrayField>
      <SelectField
        label="Moguće rezervirati svakih"
        placeholder="Odaberite"
        isDisabled={false}
        value={interval}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              days,
              interval: value,
              possibleLengths,
              start,
              end,
              priceForHour,
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
          children="0:30h"
          value="HALF_HOUR"
          {...getOverrideProps(overrides, "intervaloption0")}
        ></option>
        <option
          children="1:00h"
          value="HOUR"
          {...getOverrideProps(overrides, "intervaloption1")}
        ></option>
        <option
          children="1:30h"
          value="HOUR_AND_HALF"
          {...getOverrideProps(overrides, "intervaloption2")}
        ></option>
        <option
          children="2:00h"
          value="TWO_HOURS"
          {...getOverrideProps(overrides, "intervaloption3")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              days,
              interval,
              possibleLengths: values,
              start,
              end,
              priceForHour,
            };
            const result = onChange(modelFields);
            values = result?.possibleLengths ?? values;
          }
          setPossibleLengths(values);
          setCurrentPossibleLengthsValue("");
        }}
        currentFieldValue={currentPossibleLengthsValue}
        label={"Mogu\u0107a trajanja"}
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
          label="Moguća trajanja"
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
            children="0:30h"
            value="HALF_HOUR"
            {...getOverrideProps(overrides, "possibleLengthsoption0")}
          ></option>
          <option
            children="1:00h"
            value="HOUR"
            {...getOverrideProps(overrides, "possibleLengthsoption1")}
          ></option>
          <option
            children="1:30h"
            value="HOUR_AND_HALF"
            {...getOverrideProps(overrides, "possibleLengthsoption2")}
          ></option>
          <option
            children="2:00h"
            value="TWO_HOURS"
            {...getOverrideProps(overrides, "possibleLengthsoption3")}
          ></option>
        </SelectField>
      </ArrayField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Početak</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={start}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              days,
              interval,
              possibleLengths,
              start: value,
              end,
              priceForHour,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Kraj</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={end}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              days,
              interval,
              possibleLengths,
              start,
              end: value,
              priceForHour,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Cijena za sat</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
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
              days,
              interval,
              possibleLengths,
              start,
              end,
              priceForHour: value,
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
