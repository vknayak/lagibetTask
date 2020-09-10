import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { withTheme, Button, Box, Container } from "@material-ui/core";
import DateField from "./components/DateField";
import SelectField from "./components/SelectField";
import TextField from "./components/TextField";

const COMPONENTS = {
  text: TextField,
  select: SelectField,
  date: DateField,
};

const FormBuilder = ({
  structure,
  initialValues,
  onSubmit,
  theme,
  fullWidth = true,
}) => {
  const validationSchema = React.useMemo(() => {
    const schema = yup.object().shape({});
    structure.map((field) => {
      if (field.validation) {
        schema.fields[field.name] = field.validation;
        schema._nodes.push(field.name);
      }
      return null;
    });
    return schema;
  }, [structure]);

  const {
    register,
    handleSubmit,
    errors,
    control,
    getValues,
    setValue,
    watch,
  } = useForm({
    validationSchema,
    mode: "onBlur",
    submitFocusError: false,
    resolver: yupResolver(validationSchema),
    defaultValues: {
      ...initialValues,
    },
  });

  return (
    <Container>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {structure.map((field) => {
          const FieldComponent = COMPONENTS[field.type];
          return (
            <Box key={field.name} m={2}>
              <FieldComponent
                fullWidth={fullWidth}
                field={field}
                errors={errors}
                getValues={getValues}
                setValue={setValue}
                control={control}
                register={register}
                watch={watch}
              />
            </Box>
          );
        })}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default withTheme(FormBuilder);
