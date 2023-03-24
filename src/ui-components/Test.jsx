/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Response } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function Test(props) {
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
    accepted: false,
    reserve: false,
  };
  const [playerName, setPlayerName] = React.useState(initialValues.playerName);
  const [accepted, setAccepted] = React.useState(initialValues.accepted);
  const [reserve, setReserve] = React.useState(initialValues.reserve);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPlayerName(initialValues.playerName);
    setAccepted(initialValues.accepted);
    setReserve(initialValues.reserve);
    setErrors({});
  };
  const validations = {
    playerName: [{ type: "Required" }],
    accepted: [],
    reserve: [],
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
      {...getOverrideProps(overrides, "Test")}
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
      <SwitchField
        label="Prihvaćam"
        defaultChecked={false}
        isDisabled={false}
        isChecked={accepted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              playerName,
              accepted: value,
              reserve,
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
      <SwitchField
        label="Želim biti rezerva"
        defaultChecked={false}
        isDisabled={false}
        isChecked={reserve}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              playerName,
              accepted,
              reserve: value,
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
