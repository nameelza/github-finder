import { useState, useEffect } from "react";

function UserResults() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>User Results</h1>
    </div>
  );
}

export default UserResults;
