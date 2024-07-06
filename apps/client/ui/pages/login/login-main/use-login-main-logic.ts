import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useEffect } from "react";
import { useRouter } from "next-nprogress-bar";
import useLoginMainRedux from "./use-login-main-redux";
import { useToast } from "@/lib/hooks";
import { parseRtkError } from "@/lib/utils";
import { useLogoutQuery } from "@/redux/services";

const LoginSchema = yup.object().shape({
  credential: yup
    .string()
    .max(255, "LTE255Chars")
    .trim("invalidTrim")
    .required("required"),
  password: yup.string().required("required"),
});

export type LoginFormModel = yup.InferType<typeof LoginSchema>;

const useLoginMainLogic = () => {
  const { onSubmit, reduxState } = useLoginMainRedux();
  const { showToast } = useToast();
  const router = useRouter();

  useLogoutQuery({}, { refetchOnMountOrArgChange: true });

  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      credential: "",
      password: "",
    },
  });

  const handleSubmit: SubmitHandler<LoginFormModel> = (data) => {
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

export default useLoginMainLogic;
