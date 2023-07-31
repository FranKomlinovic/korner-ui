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
import {
  Response,
  Team as Team0,
  Appointment as Appointment0,
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
    playerName: "",
    playerPhoto: "",
    Team: undefined,
    Appointment: undefined,
  };
  const [playerID, setPlayerID] = React.useState(initialValues.playerID);
  const [accepted, setAccepted] = React.useState(initialValues.accepted);
  const [playerName, setPlayerName] = React.useState(initialValues.playerName);
  const [playerPhoto, setPlayerPhoto] = React.useState(
    initialValues.playerPhoto
  );
  const [Team, setTeam] = React.useState(initialValues.Team);
  const [Appointment, setAppointment] = React.useState(
    initialValues.Appointment
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPlayerID(initialValues.playerID);
    setAccepted(initialValues.accepted);
    setPlayerName(initialValues.playerName);
    setPlayerPhoto(initialValues.playerPhoto);
    setTeam(initialValues.Team);
    setCurrentTeamValue(undefined);
    setCurrentTeamDisplayValue("");
    setAppointment(initialValues.Appointment);
    setCurrentAppointmentValue(undefined);
    setCurrentAppointmentDisplayValue("");
    setErrors({});
  };
  const [currentTeamDisplayValue, setCurrentTeamDisplayValue] =
    React.useState("");
  const [currentTeamValue, setCurrentTeamValue] = React.useState(undefined);
  const TeamRef = React.createRef();
  const [currentAppointmentDisplayValue, setCurrentAppointmentDisplayValue] =
    React.useState("");
  const [currentAppointmentValue, setCurrentAppointmentValue] =
    React.useState(undefined);
  const AppointmentRef = React.createRef();
  const getIDValue = {
    Team: (r) => JSON.stringify({ id: r?.id }),
    Appointment: (r) => JSON.stringify({ id: r?.id }),
  };
  const TeamIdSet = new Set(
    Array.isArray(Team)
      ? Team.map((r) => getIDValue.Team?.(r))
      : getIDValue.Team?.(Team)
  );
  const AppointmentIdSet = new Set(
    Array.isArray(Appointment)
      ? Appointment.map((r) => getIDValue.Appointment?.(r))
      : getIDValue.Appointment?.(Appointment)
  );
  const teamRecords = useDataStoreBinding({
    type: "collection",
    model: Team0,
  }).items;
  const appointmentRecords = useDataStoreBinding({
    type: "collection",
    model: Appointment0,
  }).items;
  const getDisplayValue = {
    Team: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Appointment: (r) => `${r?.confirmed ? r?.confirmed + " - " : ""}${r?.id}`,
  };
  const validations = {
    playerID: [],
    accepted: [],
    playerName: [{ type: "Required" }],
    playerPhoto: [],
    Team: [],
    Appointment: [],
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
          playerName,
          playerPhoto,
          Team,
          Appointment,
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
              playerName,
              playerPhoto,
              Team,
              Appointment,
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
              playerName,
              playerPhoto,
              Team,
              Appointment,
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
              playerName: value,
              playerPhoto,
              Team,
              Appointment,
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
              playerName,
              playerPhoto: value,
              Team,
              Appointment,
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
              playerName,
              playerPhoto,
              Team: value,
              Appointment,
            };
            const result = onChange(modelFields);
            value = result?.Team ?? value;
          }
          setTeam(value);
          setCurrentTeamValue(undefined);
          setCurrentTeamDisplayValue("");
        }}
        currentFieldValue={currentTeamValue}
        label={"Team"}
        items={Team ? [Team] : []}
        hasError={errors?.Team?.hasError}
        errorMessage={errors?.Team?.errorMessage}
        getBadgeText={getDisplayValue.Team}
        setFieldValue={(model) => {
          setCurrentTeamDisplayValue(model ? getDisplayValue.Team(model) : "");
          setCurrentTeamValue(model);
        }}
        inputFieldRef={TeamRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Team"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Team"
          value={currentTeamDisplayValue}
          options={teamRecords
            .filter((r) => !TeamIdSet.has(getIDValue.Team?.(r)))
            .map((r) => ({
              id: getIDValue.Team?.(r),
              label: getDisplayValue.Team?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTeamValue(
              teamRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTeamDisplayValue(label);
            runValidationTasks("Team", label);
          }}
          onClear={() => {
            setCurrentTeamDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Team?.hasError) {
              runValidationTasks("Team", value);
            }
            setCurrentTeamDisplayValue(value);
            setCurrentTeamValue(undefined);
          }}
          onBlur={() => runValidationTasks("Team", currentTeamDisplayValue)}
          errorMessage={errors.Team?.errorMessage}
          hasError={errors.Team?.hasError}
          ref={TeamRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Team")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              playerID,
              accepted,
              playerName,
              playerPhoto,
              Team,
              Appointment: value,
            };
            const result = onChange(modelFields);
            value = result?.Appointment ?? value;
          }
          setAppointment(value);
          setCurrentAppointmentValue(undefined);
          setCurrentAppointmentDisplayValue("");
        }}
        currentFieldValue={currentAppointmentValue}
        label={"Appointment"}
        items={Appointment ? [Appointment] : []}
        hasError={errors?.Appointment?.hasError}
        errorMessage={errors?.Appointment?.errorMessage}
        getBadgeText={getDisplayValue.Appointment}
        setFieldValue={(model) => {
          setCurrentAppointmentDisplayValue(
            model ? getDisplayValue.Appointment(model) : ""
          );
          setCurrentAppointmentValue(model);
        }}
        inputFieldRef={AppointmentRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Appointment"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Appointment"
          value={currentAppointmentDisplayValue}
          options={appointmentRecords
            .filter((r) => !AppointmentIdSet.has(getIDValue.Appointment?.(r)))
            .map((r) => ({
              id: getIDValue.Appointment?.(r),
              label: getDisplayValue.Appointment?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAppointmentValue(
              appointmentRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAppointmentDisplayValue(label);
            runValidationTasks("Appointment", label);
          }}
          onClear={() => {
            setCurrentAppointmentDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Appointment?.hasError) {
              runValidationTasks("Appointment", value);
            }
            setCurrentAppointmentDisplayValue(value);
            setCurrentAppointmentValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Appointment", currentAppointmentDisplayValue)
          }
          errorMessage={errors.Appointment?.errorMessage}
          hasError={errors.Appointment?.hasError}
          ref={AppointmentRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Appointment")}
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
