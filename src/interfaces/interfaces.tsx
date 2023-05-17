import React from "react";

export interface IUser {
  name: string;
  email: string;
}

export interface IProviderChildren {
  children: React.ReactNode;
}

export interface IInputContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  users: Array<IUser>;
  setUsers: React.Dispatch<React.SetStateAction<Array<IUser>>>;
}
