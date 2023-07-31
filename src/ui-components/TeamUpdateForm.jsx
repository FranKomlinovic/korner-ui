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
import { Team, Response, Appointment } from "../models";
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
export default function TeamUpdateForm(props) {
  const {
    id: idProp,
    team: teamModelProp,
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
    outcome: [],
  };
  const [appointmentID, setAppointmentID] = React.useState(
    initialValues.appointmentID
  );
  const [Responses, setResponses] = React.useState(initialValues.Responses);
  const [name, setName] = React.useState(initialValues.name);
  const [color, setColor] = React.useState(initialValues.color);
  const [score, setScore] = React.useState(initialValues.score);
  const [outcome, setOutcome] = React.useState(initialValues.outcome);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = teamRecord
      ? {
          ...initialValues,
          ...teamRecord,
          appointmentID,
          Responses: linkedResponses,
        }
      : initialValues;
    setAppointmentID(cleanValues.appointmentID);
    setCurrentAppointmentIDValue(undefined);
    setCurrentAppointmentIDDisplayValue("");
    setResponses(cleanValues.Responses ?? []);
    setCurrentResponsesValue(undefined);
    setCurrentResponsesDisplayValue("");
    setName(cleanValues.name);
    setColor(cleanValues.color);
    setScore(cleanValues.score);
    setOutcome(cleanValues.outcome ?? []);
    setCurrentOutcomeValue("");
    setErrors({});
  };
  const [teamRecord, setTeamRecord] = React.useState(teamModelProp);
  const [linkedResponses, setLinkedResponses] = React.useState([]);
  const canUnlinkResponses = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Team, idProp)
        : teamModelProp;
      setTeamRecord(record);
      const appointmentIDRecord = record
        ? await record.appointmentID
        : undefined;
      setAppointmentID(appointmentIDRecord);
      const linkedResponses = record ? await record.Responses.toArray() : [];
      setLinkedResponses(linkedResponses);
    };
    queryData();
  }, [idProp, teamModelProp]);
  React.useEffect(resetStateValues, [
    teamRecord,
    appointmentID,
    linkedResponses,
  ]);
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
  const [currentOutcomeValue, setCurrentOutcomeValue] = React.useState("");
  const outcomeRef = React.createRef();
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
    outcome: (r) => {
      const enumDisplayValueMap = {
        WIN: "Win",
        LOSE: "Lose",
        DRAW: "Draw",
      };
      return enumDisplayValueMap[r];
    },
  };
  const validations = {
    appointmentID: [{ type: "Required" }],
    Responses: [],
    name: [],
    color: [],
    score: [],
    outcome: [],
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
          outcome,
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
          const promises = [];
          const responsesToLink = [];
          const responsesToUnLink = [];
          const responsesSet = new Set();
          const linkedResponsesSet = new Set();
          Responses.forEach((r) => responsesSet.add(getIDValue.Responses?.(r)));
          linkedResponses.forEach((r) =>
            linkedResponsesSet.add(getIDValue.Responses?.(r))
          );
          linkedResponses.forEach((r) => {
            if (!responsesSet.has(getIDValue.Responses?.(r))) {
              responsesToUnLink.push(r);
            }
          });
          Responses.forEach((r) => {
            if (!linkedResponsesSet.has(getIDValue.Responses?.(r))) {
              responsesToLink.push(r);
            }
          });
          responsesToUnLink.forEach((original) => {
            if (!canUnlinkResponses) {
              throw Error(
                `Response ${original.id} cannot be unlinked from Team because undefined is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Response.copyOf(original, (updated) => {
                  updated.Team = null;
                })
              )
            );
          });
          responsesToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Response.copyOf(original, (updated) => {
                  updated.Team = teamRecord;
                })
              )
            );
          });
          const modelFieldsToSave = {
            appointmentID: modelFields.appointmentID,
            name: modelFields.name,
            color: modelFields.color,
            score: modelFields.score,
            outcome: modelFields.outcome,
          };
          promises.push(
            DataStore.save(
              Team.copyOf(teamRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TeamUpdateForm")}
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
              outcome,
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
          defaultValue={appointmentID}
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
              outcome,
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
              outcome,
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
              outcome,
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
              outcome,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              appointmentID,
              Responses,
              name,
              color,
              score,
              outcome: values,
            };
            const result = onChange(modelFields);
            values = result?.outcome ?? values;
          }
          setOutcome(values);
          setCurrentOutcomeValue("");
        }}
        currentFieldValue={currentOutcomeValue}
        label={"Outcome"}
        items={outcome}
        hasError={errors?.outcome?.hasError}
        errorMessage={errors?.outcome?.errorMessage}
        getBadgeText={getDisplayValue.outcome}
        setFieldValue={setCurrentOutcomeValue}
        inputFieldRef={outcomeRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Outcome"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentOutcomeValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.outcome?.hasError) {
              runValidationTasks("outcome", value);
            }
            setCurrentOutcomeValue(value);
          }}
          onBlur={() => runValidationTasks("outcome", currentOutcomeValue)}
          errorMessage={errors.outcome?.errorMessage}
          hasError={errors.outcome?.hasError}
          ref={outcomeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "outcome")}
        >
          <option
            children="Win"
            value="WIN"
            {...getOverrideProps(overrides, "outcomeoption0")}
          ></option>
          <option
            children="Lose"
            value="LOSE"
            {...getOverrideProps(overrides, "outcomeoption1")}
          ></option>
          <option
            children="Draw"
            value="DRAW"
            {...getOverrideProps(overrides, "outcomeoption2")}
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
          isDisabled={!(idProp || teamModelProp)}
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
              !(idProp || teamModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
