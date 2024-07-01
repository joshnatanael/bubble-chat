import { useToastProviderContext } from "@/ui/components-wrapper";

const useToast = () => {
  const { showToast } = useToastProviderContext();

  return {
    showToast,
  } as const;
};

export default useToast;
