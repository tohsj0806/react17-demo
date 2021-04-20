import { useState, useEffect } from "react";
import { useMounted } from "../../utils";

const apiUrl = process.env.REACT_APP_API_URL;

export const SearchBox = ({ param, setParam }) => {
  const [users, setUsers] = useState([]);

  const getProjects = () => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  };

  useMounted(() => getProjects());

  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(e) => {
          setParam({ ...param, name: e.target.value });
        }}
      />
      <select
        value={param.personId}
        onChange={(e) => {
          setParam({ ...param, personId: e.target.value });
        }}
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};

