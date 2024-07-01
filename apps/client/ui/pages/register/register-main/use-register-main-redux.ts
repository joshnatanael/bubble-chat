import { useRegisterMutation } from "@/redux/services";
import { RegisterFormModel } from "./use-register-main-logic";

const useRegisterMainRedux = () => {
  const [register, reduxState] = useRegisterMutation();

  const handleSubmit = (data: RegisterFormModel) => {
    register(data);
  };

  return { onSubmit: handleSubmit, reduxState };
};

export default useRegisterMainRedux;
