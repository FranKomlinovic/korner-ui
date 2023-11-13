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
import { Fields } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
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
export default function FieldsUpdateForm(props) {
  const {
    id: idProp,
    fields: fieldsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    address: "",
    length: "",
    width: "",
    minPlayers: "",
    surface: "",
    sports: [],
    city: "",
    phoneNumber: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [address, setAddress] = React.useState(initialValues.address);
  const [length, setLength] = React.useState(initialValues.length);
  const [width, setWidth] = React.useState(initialValues.width);
  const [minPlayers, setMinPlayers] = React.useState(initialValues.minPlayers);
  const [surface, setSurface] = React.useState(initialValues.surface);
  const [sports, setSports] = React.useState(initialValues.sports);
  const [city, setCity] = React.useState(initialValues.city);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = fieldsRecord
      ? { ...initialValues, ...fieldsRecord }
      : initialValues;
    setName(cleanValues.name);
    setAddress(cleanValues.address);
    setLength(cleanValues.length);
    setWidth(cleanValues.width);
    setMinPlayers(cleanValues.minPlayers);
    setSurface(cleanValues.surface);
    setSports(cleanValues.sports ?? []);
    setCurrentSportsValue("");
    setCity(cleanValues.city);
    setPhoneNumber(cleanValues.phoneNumber);
    setErrors({});
  };
  const [fieldsRecord, setFieldsRecord] = React.useState(fieldsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Fields, idProp)
        : fieldsModelProp;
      setFieldsRecord(record);
    };
    queryData();
  }, [idProp, fieldsModelProp]);
  React.useEffect(resetStateValues, [fieldsRecord]);
  const [currentSportsValue, setCurrentSportsValue] = React.useState("");
  const sportsRef = React.createRef();
  const getDisplayValue = {
    sports: (r) => {
      const enumDisplayValueMap = {
        FUTSAL: "Futsal",
        TENNIS: "Tennis",
        BASKETBALL: "Ko\u0161arka",
        PING_PONG: "Ping Pong",
        BADMINTON: "Badminton",
      };
      return enumDisplayValueMap[r];
    },
  };
  const validations = {
    name: [],
    address: [],
    length: [],
    width: [],
    minPlayers: [],
    surface: [],
    sports: [],
    city: [],
    phoneNumber: [{ type: "Phone" }],
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
          name,
          address,
          length,
          width,
          minPlayers,
          surface,
          sports,
          city,
          phoneNumber,
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
            Fields.copyOf(fieldsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "FieldsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Naziv"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              address,
              length,
              width,
              minPlayers,
              surface,
              sports,
              city,
              phoneNumber,
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
        label="Adresa"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address: value,
              length,
              width,
              minPlayers,
              surface,
              sports,
              city,
              phoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Duljina"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={length}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              address,
              length: value,
              width,
              minPlayers,
              surface,
              sports,
              city,
              phoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.length ?? value;
          }
          if (errors.length?.hasError) {
            runValidationTasks("length", value);
          }
          setLength(value);
        }}
        onBlur={() => runValidationTasks("length", length)}
        errorMessage={errors.length?.errorMessage}
        hasError={errors.length?.hasError}
        {...getOverrideProps(overrides, "length")}
      ></TextField>
      <TextField
        label="Širina"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={width}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              address,
              length,
              width: value,
              minPlayers,
              surface,
              sports,
              city,
              phoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.width ?? value;
          }
          if (errors.width?.hasError) {
            runValidationTasks("width", value);
          }
          setWidth(value);
        }}
        onBlur={() => runValidationTasks("width", width)}
        errorMessage={errors.width?.errorMessage}
        hasError={errors.width?.hasError}
        {...getOverrideProps(overrides, "width")}
      ></TextField>
      <TextField
        label="Minimalni broj igrača"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={minPlayers}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              address,
              length,
              width,
              minPlayers: value,
              surface,
              sports,
              city,
              phoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.minPlayers ?? value;
          }
          if (errors.minPlayers?.hasError) {
            runValidationTasks("minPlayers", value);
          }
          setMinPlayers(value);
        }}
        onBlur={() => runValidationTasks("minPlayers", minPlayers)}
        errorMessage={errors.minPlayers?.errorMessage}
        hasError={errors.minPlayers?.hasError}
        {...getOverrideProps(overrides, "minPlayers")}
      ></TextField>
      <SelectField
        label="Podloga"
        placeholder="Odaberite podlogu"
        isDisabled={false}
        value={surface}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              length,
              width,
              minPlayers,
              surface: value,
              sports,
              city,
              phoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.surface ?? value;
          }
          if (errors.surface?.hasError) {
            runValidationTasks("surface", value);
          }
          setSurface(value);
        }}
        onBlur={() => runValidationTasks("surface", surface)}
        errorMessage={errors.surface?.errorMessage}
        hasError={errors.surface?.hasError}
        {...getOverrideProps(overrides, "surface")}
      >
        <option
          children="Umjetna trava"
          value="ARTIFICIAL_GRASS"
          {...getOverrideProps(overrides, "surfaceoption0")}
        ></option>
        <option
          children="Guma"
          value="RUBBER"
          {...getOverrideProps(overrides, "surfaceoption1")}
        ></option>
        <option
          children="Beton"
          value="CONCRETE"
          {...getOverrideProps(overrides, "surfaceoption2")}
        ></option>
        <option
          children="Drvo"
          value="WOOD"
          {...getOverrideProps(overrides, "surfaceoption3")}
        ></option>
        <option
          children="Trava"
          value="GRASS"
          {...getOverrideProps(overrides, "surfaceoption4")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              address,
              length,
              width,
              minPlayers,
              surface,
              sports: values,
              city,
              phoneNumber,
            };
            const result = onChange(modelFields);
            values = result?.sports ?? values;
          }
          setSports(values);
          setCurrentSportsValue("");
        }}
        currentFieldValue={currentSportsValue}
        label={"Sportovi"}
        items={sports}
        hasError={errors?.sports?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("sports", currentSportsValue)
        }
        errorMessage={errors?.sports?.errorMessage}
        getBadgeText={getDisplayValue.sports}
        setFieldValue={setCurrentSportsValue}
        inputFieldRef={sportsRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Sportovi"
          placeholder="Odaberite sportove"
          isDisabled={false}
          value={currentSportsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.sports?.hasError) {
              runValidationTasks("sports", value);
            }
            setCurrentSportsValue(value);
          }}
          onBlur={() => runValidationTasks("sports", currentSportsValue)}
          errorMessage={errors.sports?.errorMessage}
          hasError={errors.sports?.hasError}
          ref={sportsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "sports")}
        >
          <option
            children="Futsal"
            value="FUTSAL"
            {...getOverrideProps(overrides, "sportsoption0")}
          ></option>
          <option
            children="Tennis"
            value="TENNIS"
            {...getOverrideProps(overrides, "sportsoption1")}
          ></option>
          <option
            children="Košarka"
            value="BASKETBALL"
            {...getOverrideProps(overrides, "sportsoption2")}
          ></option>
          <option
            children="Ping Pong"
            value="PING_PONG"
            {...getOverrideProps(overrides, "sportsoption3")}
          ></option>
          <option
            children="Badminton"
            value="BADMINTON"
            {...getOverrideProps(overrides, "sportsoption4")}
          ></option>
        </SelectField>
      </ArrayField>
      <SelectField
        label="Grad"
        placeholder="Odaberite grad"
        isDisabled={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              length,
              width,
              minPlayers,
              surface,
              sports,
              city: value,
              phoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      >
        <option
          children="Petrinja"
          value="PETRINJA"
          {...getOverrideProps(overrides, "cityoption0")}
        ></option>
        <option
          children="Zagreb"
          value="ZAGREB"
          {...getOverrideProps(overrides, "cityoption1")}
        ></option>
        <option
          children="Sisak"
          value="SISAK"
          {...getOverrideProps(overrides, "cityoption2")}
        ></option>
        <option
          children="Velika gorica"
          value="VELIKA_GORICA"
          {...getOverrideProps(overrides, "cityoption3")}
        ></option>
        <option
          children="Split"
          value="SPLIT"
          {...getOverrideProps(overrides, "cityoption4")}
        ></option>
        <option
          children="Rijeka"
          value="RIJEKA"
          {...getOverrideProps(overrides, "cityoption5")}
        ></option>
        <option
          children="Osijek"
          value="OSIJEK"
          {...getOverrideProps(overrides, "cityoption6")}
        ></option>
      </SelectField>
      <TextField
        label="Broj mobitela"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              length,
              width,
              minPlayers,
              surface,
              sports,
              city,
              phoneNumber: value,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Očisti"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || fieldsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Spremi"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || fieldsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
