import { useLoginMutation } from "@/redux/services";
import { LoginFormModel } from "./use-login-main-logic";

const useLoginMainRedux = () => {
  const [login, reduxState] = useLoginMutation();

  const handleSubmit = (data: LoginFormModel) => {
    login(data);
  };

  return { onSubmit: handleSubmit, reduxState };
};

export default useLoginMainRedux;
