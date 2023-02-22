import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type User = {
  fname: string;
  lname: string;
};

interface userContextInterfacr {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

type userProvideProps = {
  children: ReactNode;
};

const defaultState = {
  user: {
    fname: "",
    lname: "",
    
  },
  setUser: (user: User) => {},
} as userContextInterfacr;

export const UserContext = createContext(defaultState);

export default function UserPeovider({ children }: userProvideProps) {
  const [user, setUser] = useState<User>({
    fname: "",
    lname: "",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
