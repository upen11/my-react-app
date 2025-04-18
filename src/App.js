// import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import { useState, useEffect } from "react";

function App() {
  // const [names, setNames] = useState([
  //   { name: "Alex", completed: false },
  //   { name: "Bob", completed: false },
  // ]);

  const [names, setNames] = useState(() => {
    const saved = localStorage.getItem("names");
    return saved ? JSON.parse(saved) : [];
  });

  const [newName, setNewName] = useState("");

  useEffect(() => {
    const storedNames = localStorage.getItem("names");
    if (storedNames) {
      setNames(JSON.parse(storedNames));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  function addName() {
    // setNames([...names, "New Person"]);
    if (newName.trim() !== "") {
      setNames([...names, { name: newName, completed: false }]);
      setNewName(""); // Clear the input field
    } else {
      alert("Name cannot be empty!");
    }
  }

  function removeName(indexToDelete) {
    const updatedNames = names.filter((_, index) => index !== indexToDelete);
    setNames(updatedNames);
  }

  function clearAllNames() {
    setNames([]); // Reset the names list to an empty array
  }

  function toggleCompletion(indexToToggle) {
    const updatedNames = names.map((name, index) =>
      index === indexToToggle ? { ...name, completed: !name.completed } : name
    );
    setNames(updatedNames);
  }

  return (
    <div className="App">
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter a new name"
      />
      <button onClick={addName}>Add New Name</button>

      {names.map((person, index) => (
        <Greeting
          key={index}
          person={person}
          onToggle={() => toggleCompletion(index)} // Pass the toggle function as a prop
          onDelete={() => removeName(index)}
        />
      ))}

      <button onClick={clearAllNames}>Clear All</button>
    </div>
  );
}

export default App;
