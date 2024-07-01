import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useEffect } from "react";
import { useRouter } from "next-nprogress-bar";
import useRegisterMainRedux from "./use-register-main-redux";
import { useToast } from "@/lib/hooks";
import { parseRtkError } from "@/lib/utils";

const RegisterSchema = yup.object().shape({
  firstname: yup
    .string()
    .max(255, "LTE255Chars")
    .trim("invalidTrim")
    .required("required"),
  lastname: yup
    .string()
    .max(255, "LTE255Chars")
    .trim("invalidTrim")
    .required("required"),
  username: yup
    .string()
    .max(255, "LTE255Chars")
    .trim("invalidTrim")
    .required("required"),
  email: yup.string().email("invalidEmailFormat").required("required"),
  password: yup
    .string()
    .required("required")
    .min(8, "GTE8Chars")
    .max(16, "LTE16Chars")
    .matches("^(?=.*[a-z])" as any, "lowercase1Char")
    .matches("^(?=.*[A-Z])" as any, "uppercase1Char")
    .matches("^(?=.*[0-9])" as any, "numeric1Char"),
});

export type RegisterFormModel = yup.InferType<typeof RegisterSchema>;

const useRegisterMainLogic = () => {
  const { onSubmit, reduxState } = useRegisterMainRedux();
  const { showToast } = useToast();
  const router = useRouter();

  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit: SubmitHandler<RegisterFormModel> = (data) => {
    onSubmit(data);
  };

  useEffect(() => {
    if (reduxState.isError && reduxState.error) {
      showToast(parseRtkError(reduxState.error));
    }
  }, [reduxState.isError]);

  useEffect(() => {
    if (reduxState.isSuccess) {
      router.push("/messages");
    }
  }, [reduxState.isSuccess]);

  return { form, handler: { onSubmit: handleSubmit } };
};

export default useRegisterMainLogic;
