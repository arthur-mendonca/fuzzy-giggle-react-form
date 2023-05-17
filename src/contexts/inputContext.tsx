import React, { useState } from "react";
import {
  IInputContext,
  IProviderChildren,
  IUser,
} from "../interfaces/interfaces";

export const InputContext = React.createContext({} as IInputContext);

export const InputProvider: React.FC<IProviderChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <InputContext.Provider
      value={{ user, setUser, name, setName, email, setEmail, users, setUsers }}
    >
      {children}
    </InputContext.Provider>
  );
};
