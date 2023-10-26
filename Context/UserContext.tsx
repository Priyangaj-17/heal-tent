import { createContext, useState } from "react";

// export type OrganisationInfo = {
//   organisationName: string;
//   email: string;
//   phoneNumber: string;
//   displayName: string;
//   uploadLogo: string;
//   language: string;
//   timezone: string;
//   currency: string;
// };

type UserContextType = {
  user: any;
  setUser: (data: any) => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};
export const UserContext = createContext<UserContextType | any>({});

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState({
    organisationName: "",
    email: "",
    phoneNumber: "",
    displayName: "",
    uploadLogo: "",
    language: "",
    timezone: "",
    currency: "",
  });

  // {
  //   Object.keys(user).length === 8 && console.log(user);
  // }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
