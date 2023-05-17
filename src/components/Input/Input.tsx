import { useContext } from "react";
import { InputContext } from "../../contexts/inputContext";
import "./style.css";

export const Input = () => {
  const { user, setUser, name, setName, email, setEmail, users, setUsers } =
    useContext(InputContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim() !== "" && email.trim() !== "") {
      setUser({ name, email });
      setUsers(user ? [...users, user] : [...users]);
    }
  };

  console.log(users);

  return (
    <div className="form-container">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
