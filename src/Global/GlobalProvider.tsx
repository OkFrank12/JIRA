import { createContext, useState, PropsWithChildren } from "react";
import { iGlobal, iUser } from "../Utils/Interface";

export const GlobalContext = createContext({} as iGlobal);

export const GlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [actualName, setActualName] = useState<string>("");
  const [actualEmail, setActualEmail] = useState<string>("");
  const [actualConfirm, setActualConfirm] = useState<string>("");
  const [actualPassword, setActualPassword] = useState<string>("");
  const [userState, setUserState] = useState<iUser>({});
  return (
    <GlobalContext.Provider
      value={{
        actualName,
        setActualName,
        actualEmail,
        setActualEmail,
        actualConfirm,
        setActualConfirm,
        actualPassword,
        setActualPassword,
        userState, 
        setUserState
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
