/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Following } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function FollowingUpdateForm(props) {
  const {
    id: idProp,
    following: followingModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userID: "",
    followedID: "",
    followedName: "",
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [followedID, setFollowedID] = React.useState(initialValues.followedID);
  const [followedName, setFollowedName] = React.useState(
    initialValues.followedName
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = followingRecord
      ? { ...initialValues, ...followingRecord }
      : initialValues;
    setUserID(cleanValues.userID);
    setFollowedID(cleanValues.followedID);
    setFollowedName(cleanValues.followedName);
    setErrors({});
  };
  const [followingRecord, setFollowingRecord] =
    React.useState(followingModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Following, idProp)
        : followingModelProp;
      setFollowingRecord(record);
    };
    queryData();
  }, [idProp, followingModelProp]);
  React.useEffect(resetStateValues, [followingRecord]);
  const validations = {
    userID: [{ type: "Required" }],
    followedID: [{ type: "Required" }],
    followedName: [],
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
          userID,
          followedID,
          followedName,
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
          await DataStore.save(
            Following.copyOf(followingRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
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
      {...getOverrideProps(overrides, "FollowingUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID: value,
              followedID,
              followedName,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <TextField
        label="Followed id"
        isRequired={true}
        isReadOnly={false}
        value={followedID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              followedID: value,
              followedName,
            };
            const result = onChange(modelFields);
            value = result?.followedID ?? value;
          }
          if (errors.followedID?.hasError) {
            runValidationTasks("followedID", value);
          }
          setFollowedID(value);
        }}
        onBlur={() => runValidationTasks("followedID", followedID)}
        errorMessage={errors.followedID?.errorMessage}
        hasError={errors.followedID?.hasError}
        {...getOverrideProps(overrides, "followedID")}
      ></TextField>
      <TextField
        label="Followed name"
        isRequired={false}
        isReadOnly={false}
        value={followedName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              followedID,
              followedName: value,
            };
            const result = onChange(modelFields);
            value = result?.followedName ?? value;
          }
          if (errors.followedName?.hasError) {
            runValidationTasks("followedName", value);
          }
          setFollowedName(value);
        }}
        onBlur={() => runValidationTasks("followedName", followedName)}
        errorMessage={errors.followedName?.errorMessage}
        hasError={errors.followedName?.hasError}
        {...getOverrideProps(overrides, "followedName")}
      ></TextField>
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
          isDisabled={!(idProp || followingModelProp)}
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
              !(idProp || followingModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
