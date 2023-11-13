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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Team, Response, Appointment } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  useDataStoreBinding,
  validateField,
} from "./utils";
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
export default function TeamCreateForm(props) {
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
    appointmentID: undefined,
    Responses: [],
    name: "",
    color: "",
    score: "",
  };
  const [appointmentID, setAppointmentID] = React.useState(
    initialValues.appointmentID
  );
  const [Responses, setResponses] = React.useState(initialValues.Responses);
  const [name, setName] = React.useState(initialValues.name);
  const [color, setColor] = React.useState(initialValues.color);
  const [score, setScore] = React.useState(initialValues.score);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAppointmentID(initialValues.appointmentID);
    setCurrentAppointmentIDValue(undefined);
    setCurrentAppointmentIDDisplayValue("");
    setResponses(initialValues.Responses);
    setCurrentResponsesValue(undefined);
    setCurrentResponsesDisplayValue("");
    setName(initialValues.name);
    setColor(initialValues.color);
    setScore(initialValues.score);
    setErrors({});
  };
  const [
    currentAppointmentIDDisplayValue,
    setCurrentAppointmentIDDisplayValue,
  ] = React.useState("");
  const [currentAppointmentIDValue, setCurrentAppointmentIDValue] =
    React.useState(undefined);
  const appointmentIDRef = React.createRef();
  const [currentResponsesDisplayValue, setCurrentResponsesDisplayValue] =
    React.useState("");
  const [currentResponsesValue, setCurrentResponsesValue] =
    React.useState(undefined);
  const ResponsesRef = React.createRef();
  const getIDValue = {
    Responses: (r) => JSON.stringify({ id: r?.id }),
  };
  const ResponsesIdSet = new Set(
    Array.isArray(Responses)
      ? Responses.map((r) => getIDValue.Responses?.(r))
      : getIDValue.Responses?.(Responses)
  );
  const appointmentRecords = useDataStoreBinding({
    type: "collection",
    model: Appointment,
  }).items;
  const responseRecords = useDataStoreBinding({
    type: "collection",
    model: Response,
  }).items;
  const getDisplayValue = {
    appointmentID: (r) => `${r?.confirmed ? r?.confirmed + " - " : ""}${r?.id}`,
    Responses: (r) => `${r?.accepted ? r?.accepted + " - " : ""}${r?.id}`,
  };
  const validations = {
    appointmentID: [{ type: "Required" }],
    Responses: [],
    name: [],
    color: [],
    score: [],
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
          appointmentID,
          Responses,
          name,
          color,
          score,
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
            appointmentID: modelFields.appointmentID,
            name: modelFields.name,
            color: modelFields.color,
            score: modelFields.score,
          };
          const team = await DataStore.save(new Team(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...Responses.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Response.copyOf(original, (updated) => {
                    updated.teamID = team.id;
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
      {...getOverrideProps(overrides, "TeamCreateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              appointmentID: value,
              Responses,
              name,
              color,
              score,
            };
            const result = onChange(modelFields);
            value = result?.appointmentID ?? value;
          }
          setAppointmentID(value);
          setCurrentAppointmentIDValue(undefined);
        }}
        currentFieldValue={currentAppointmentIDValue}
        label={"Appointment id"}
        items={appointmentID ? [appointmentID] : []}
        hasError={errors?.appointmentID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("appointmentID", currentAppointmentIDValue)
        }
        errorMessage={errors?.appointmentID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.appointmentID(
                appointmentRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentAppointmentIDDisplayValue(
            value
              ? getDisplayValue.appointmentID(
                  appointmentRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentAppointmentIDValue(value);
        }}
        inputFieldRef={appointmentIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Appointment id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Appointment"
          value={currentAppointmentIDDisplayValue}
          options={appointmentRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.appointmentID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAppointmentIDValue(id);
            setCurrentAppointmentIDDisplayValue(label);
            runValidationTasks("appointmentID", label);
          }}
          onClear={() => {
            setCurrentAppointmentIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.appointmentID?.hasError) {
              runValidationTasks("appointmentID", value);
            }
            setCurrentAppointmentIDDisplayValue(value);
            setCurrentAppointmentIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("appointmentID", currentAppointmentIDValue)
          }
          errorMessage={errors.appointmentID?.errorMessage}
          hasError={errors.appointmentID?.hasError}
          ref={appointmentIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "appointmentID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              appointmentID,
              Responses: values,
              name,
              color,
              score,
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
        runValidationTasks={async () =>
          await runValidationTasks("Responses", currentResponsesValue)
        }
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
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointmentID,
              Responses,
              name: value,
              color,
              score,
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
        label="Color"
        isRequired={false}
        isReadOnly={false}
        value={color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointmentID,
              Responses,
              name,
              color: value,
              score,
            };
            const result = onChange(modelFields);
            value = result?.color ?? value;
          }
          if (errors.color?.hasError) {
            runValidationTasks("color", value);
          }
          setColor(value);
        }}
        onBlur={() => runValidationTasks("color", color)}
        errorMessage={errors.color?.errorMessage}
        hasError={errors.color?.hasError}
        {...getOverrideProps(overrides, "color")}
      ></TextField>
      <TextField
        label="Score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={score}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              appointmentID,
              Responses,
              name,
              color,
              score: value,
            };
            const result = onChange(modelFields);
            value = result?.score ?? value;
          }
          if (errors.score?.hasError) {
            runValidationTasks("score", value);
          }
          setScore(value);
        }}
        onBlur={() => runValidationTasks("score", score)}
        errorMessage={errors.score?.errorMessage}
        hasError={errors.score?.hasError}
        {...getOverrideProps(overrides, "score")}
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
