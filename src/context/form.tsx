import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

// 서버상태
export type FormState = {
  id: string;
  title: string;
  userId: string;
  completed: string;
};

type FormSetter = (name: string, value: string) => void;

type ProviderProps = {
  initialState: FormState;
};

// form state context
const FormStateContext = createContext<FormState | null>(null);
const FormSetterContext = createContext<FormSetter | null>(null);

const FormProvider = ({
  children,
  initialState,
}: PropsWithChildren<ProviderProps>) => {
  const [state, setState] = useState<FormState>({
    id: initialState.id,
    title: initialState.title,
    userId: initialState.userId,
    completed: initialState.completed,
  });

  // 함수가 context의 props으로 가기 때문에 useCallback으로 감싸줘야 한다.
  const formSetter: FormSetter = useCallback((name, value) => {
    setState((pre) => ({ ...pre, [name]: value }));
  }, []);

  return (
    <FormStateContext.Provider value={state}>
      <FormSetterContext.Provider value={formSetter}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("state", state);
          }}
        >
          {children}
        </form>
      </FormSetterContext.Provider>
    </FormStateContext.Provider>
  );
};

export const useFormState = () => {
  const context = useContext(FormStateContext);
  if (!context) {
    throw new Error("useFormState must be used within a FormProvider");
  }
  return context;
};

export const useFormSetter = () => {
  const context = useContext(FormSetterContext);
  if (!context) {
    throw new Error("useFormSetter must be used within a FormProvider");
  }

  return context;
};

export default FormProvider;
