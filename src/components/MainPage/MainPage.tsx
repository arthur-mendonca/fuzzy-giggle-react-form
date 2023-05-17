import { InputProvider } from "../../contexts/inputContext";
import { Card } from "../Card/Card";
import { Input } from "../Input/Input";

export const MainPage = () => {
  return (
    <InputProvider>
      <Input />
      <Card />
    </InputProvider>
  );
};
