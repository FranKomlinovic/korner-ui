/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  CheckboxField,
  Flex,
  Grid,
  Radio,
  RadioGroupField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Response } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CreateResponse(props) {
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
    playerName: "",
    accepted: undefined,
    reserve: false,
    playerPhoto: "",
  };
  const [playerName, setPlayerName] = React.useState(initialValues.playerName);
  const [accepted, setAccepted] = React.useState(initialValues.accepted);
  const [reserve, setReserve] = React.useState(initialValues.reserve);
  const [playerPhoto, setPlayerPhoto] = React.useState(
    initialValues.playerPhoto
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPlayerName(initialValues.playerName);
    setAccepted(initialValues.accepted);
    setReserve(initialValues.reserve);
    setPlayerPhoto(initialValues.playerPhoto);
    setErrors({});
  };
  const validations = {
    playerName: [{ type: "Required" }],
    accepted: [],
    reserve: [],
    playerPhoto: [],
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
          playerName,
          accepted,
          reserve,
          playerPhoto,
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
          const modelFieldsToSave = {
            playerName: modelFields.playerName,
            accepted: modelFields.accepted,
            playerPhoto: modelFields.playerPhoto,
          };
          await DataStore.save(new Response(modelFieldsToSave));
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
      {...getOverrideProps(overrides, "CreateResponse")}
      {...rest}
    >
      <TextField
        label="Ime i prezime"
        isRequired={true}
        isReadOnly={false}
        value={playerName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              playerName: value,
              accepted,
              reserve,
              playerPhoto,
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
      <RadioGroupField
        label="Dolaziš li?"
        name="accepted"
        isReadOnly={false}
        isRequired={false}
        onChange={(e) => {
          let value = e.target.value === "true";
          if (onChange) {
            const modelFields = {
              playerName,
              accepted: value,
              reserve,
              playerPhoto,
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
      >
        <Radio
          children="Dolazim"
          value="true"
          {...getOverrideProps(overrides, "acceptedRadio0")}
        ></Radio>
        <Radio
          children="Ne Dolazim"
          value="false"
          {...getOverrideProps(overrides, "acceptedRadio1")}
        ></Radio>
      </RadioGroupField>
      <CheckboxField
        label="ako vam bude falilo"
        name="fieldName"
        value="fieldName"
        checked={reserve}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              playerName,
              accepted,
              reserve: value,
              playerPhoto,
            };
            const result = onChange(modelFields);
            value = result?.reserve ?? value;
          }
          if (errors.reserve?.hasError) {
            runValidationTasks("reserve", value);
          }
          setReserve(value);
        }}
        onBlur={() => runValidationTasks("reserve", reserve)}
        errorMessage={errors.reserve?.errorMessage}
        hasError={errors.reserve?.hasError}
        {...getOverrideProps(overrides, "reserve")}
      ></CheckboxField>
      <TextField
        label="Player photo"
        isRequired={false}
        isReadOnly={false}
        value={playerPhoto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              playerName,
              accepted,
              reserve,
              playerPhoto: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
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
