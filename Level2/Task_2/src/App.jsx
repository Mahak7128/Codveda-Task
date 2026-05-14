import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [query, setQuery] = useState(" ");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUsers();
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  const fetchUsers = async () => {
    if (query.trim() === ""){
      setUsers([]);
      setError("");
      return;
    }

    try{
      setLoading(true);
      setError("");
    
      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );

      setUsers(response.data.items);
    }catch(err){
      setError("Failed to load users");
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>GitHub User Search</h1>

      <SearchBar query={query} setQuery={setQuery} />

      {loading && <Loader />}

      {query && error && <p className="error">{error}</p>}

      <div className="users-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;