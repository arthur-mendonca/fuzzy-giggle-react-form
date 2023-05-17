import { useContext } from "react";
import { InputContext } from "../../contexts/inputContext";
import "./style.css";

export const Card = () => {
  const { users } = useContext(InputContext);
  return (
    <div className="card">
      {users.length === 0 ? "Enter data." : ""}
      {users.map((user) => {
        return (
          <div className="card-item">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};
