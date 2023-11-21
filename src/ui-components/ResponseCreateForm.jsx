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
import { Response, Appointment, Team } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  useDataStoreBinding,
  validateField,
} from "./utils";
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
export default function ResponseCreateForm(props) {
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
    playerID: "",
    accepted: false,
    appointmentID: undefined,
    playerName: "",
    playerPhoto: "",
    teamID: undefined,
  };
  const [playerID, setPlayerID] = React.useState(initialValues.playerID);
  const [accepted, setAccepted] = React.useState(initialValues.accepted);
  const [appointmentID, setAppointmentID] = React.useState(
    initialValues.appointmentID
  );
  const [playerName, setPlayerName] = React.useState(initialValues.playerName);
  const [playerPhoto, setPlayerPhoto] = React.useState(
    initialValues.playerPhoto
  );
  const [teamID, setTeamID] = React.useState(initialValues.teamID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPlayerID(initialValues.playerID);
    setAccepted(initialValues.accepted);
    setAppointmentID(initialValues.appointmentID);
    setCurrentAppointmentIDValue(undefined);
    setCurrentAppointmentIDDisplayValue("");
    setPlayerName(initialValues.playerName);
    setPlayerPhoto(initialValues.playerPhoto);
    setTeamID(initialValues.teamID);
    setCurrentTeamIDValue(undefined);
    setCurrentTeamIDDisplayValue("");
    setErrors({});
  };
  const [
    currentAppointmentIDDisplayValue,
    setCurrentAppointmentIDDisplayValue,
  ] = React.useState("");
  const [currentAppointmentIDValue, setCurrentAppointmentIDValue] =
    React.useState(undefined);
  const appointmentIDRef = React.createRef();
  const [currentTeamIDDisplayValue, setCurrentTeamIDDisplayValue] =
    React.useState("");
  const [currentTeamIDValue, setCurrentTeamIDValue] = React.useState(undefined);
  const teamIDRef = React.createRef();
  const appointmentRecords = useDataStoreBinding({
    type: "collection",
    model: Appointment,
  }).items;
  const teamRecords = useDataStoreBinding({
    type: "collection",
    model: Team,
  }).items;
  const getDisplayValue = {
    appointmentID: (r) => `${r?.confirmed ? r?.confirmed + " - " : ""}${r?.id}`,
    teamID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    playerID: [],
    accepted: [],
    appointmentID: [{ type: "Required" }],
    playerName: [{ type: "Required" }],
    playerPhoto: [],
    teamID: [],
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
          playerID,
          accepted,
          appointmentID,
          playerName,
          playerPhoto,
          teamID,
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
          await DataStore.save(new Response(modelFields));
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
      {...getOverrideProps(overrides, "ResponseCreateForm")}
      {...rest}
    >
      <TextField
        label="Player id"
        isRequired={false}
        isReadOnly={false}
        value={playerID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              playerID: value,
              accepted,
              appointmentID,
              playerName,
              playerPhoto,
              teamID,
            };
            const result = onChange(modelFields);
            value = result?.playerID ?? value;
          }
          if (errors.playerID?.hasError) {
            runValidationTasks("playerID", value);
          }
          setPlayerID(value);
        }}
        onBlur={() => runValidationTasks("playerID", playerID)}
        errorMessage={errors.playerID?.errorMessage}
        hasError={errors.playerID?.hasError}
        {...getOverrideProps(overrides, "playerID")}
      ></TextField>
      <SwitchField
        label="Accepted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={accepted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              playerID,
              accepted: value,
              appointmentID,
              playerName,
              playerPhoto,
              teamID,
            };
            const result = onChange(modelFields);
            value = result?.accepted ?? value;
          }
          if (errors.accepted?.hasError) {
            runValidationTasks("accepted", value);
          }
          setAccepted(value);
        }}
        onBlur={() => runValidationTasks("accepted", accepted)}
        errorMessage={errors.accepted?.errorMessage}
        hasError={errors.accepted?.hasError}
        {...getOverrideProps(overrides, "accepted")}
      ></SwitchField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              playerID,
              accepted,
              appointmentID: value,
              playerName,
              playerPhoto,
              teamID,
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
      <TextField
        label="Player name"
        isRequired={true}
        isReadOnly={false}
        value={playerName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              playerID,
              accepted,
              appointmentID,
              playerName: value,
              playerPhoto,
              teamID,
            };
            const result = onChange(modelFields);
            value = result?.playerName ?? value;
          }
          if (errors.playerName?.hasError) {
            runValidationTasks("playerName", value);
          }
          setPlayerName(value);
        }}
        onBlur={() => runValidationTasks("playerName", playerName)}
        errorMessage={errors.playerName?.errorMessage}
        hasError={errors.playerName?.hasError}
        {...getOverrideProps(overrides, "playerName")}
      ></TextField>
      <TextField
        label="Player photo"
        isRequired={false}
        isReadOnly={false}
        value={playerPhoto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              playerID,
              accepted,
              appointmentID,
              playerName,
              playerPhoto: value,
              teamID,
            };
            const result = onChange(modelFields);
            value = result?.playerPhoto ?? value;
          }
          if (errors.playerPhoto?.hasError) {
            runValidationTasks("playerPhoto", value);
          }
          setPlayerPhoto(value);
        }}
        onBlur={() => runValidationTasks("playerPhoto", playerPhoto)}
        errorMessage={errors.playerPhoto?.errorMessage}
        hasError={errors.playerPhoto?.hasError}
        {...getOverrideProps(overrides, "playerPhoto")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              playerID,
              accepted,
              appointmentID,
              playerName,
              playerPhoto,
              teamID: value,
            };
            const result = onChange(modelFields);
            value = result?.teamID ?? value;
          }
          setTeamID(value);
          setCurrentTeamIDValue(undefined);
        }}
        currentFieldValue={currentTeamIDValue}
        label={"Team id"}
        items={teamID ? [teamID] : []}
        hasError={errors?.teamID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("teamID", currentTeamIDValue)
        }
        errorMessage={errors?.teamID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.teamID(teamRecords.find((r) => r.id === value))
            : ""
        }
        setFieldValue={(value) => {
          setCurrentTeamIDDisplayValue(
            value
              ? getDisplayValue.teamID(teamRecords.find((r) => r.id === value))
              : ""
          );
          setCurrentTeamIDValue(value);
        }}
        inputFieldRef={teamIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Team id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Team"
          value={currentTeamIDDisplayValue}
          options={teamRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.teamID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTeamIDValue(id);
            setCurrentTeamIDDisplayValue(label);
            runValidationTasks("teamID", label);
          }}
          onClear={() => {
            setCurrentTeamIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.teamID?.hasError) {
              runValidationTasks("teamID", value);
            }
            setCurrentTeamIDDisplayValue(value);
            setCurrentTeamIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("teamID", currentTeamIDValue)}
          errorMessage={errors.teamID?.errorMessage}
          hasError={errors.teamID?.hasError}
          ref={teamIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "teamID")}
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
