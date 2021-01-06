import { useForm, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

export default function CustomInputField({ name, required, label }) {
  const { control } = useForm();
  return (
    <Controller
      as={Input}
      control={control}
      fullWidth
      name={name}
      label={label}
      required={required}
    />
  );
}
