// import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import { useState } from "react";

function App() {
  // const [names, setNames] = useState(["Bob", "Alex", "Mia"]);
  const [names, setNames] = useState([
    { name: "Alex", completed: false },
    { name: "Bob", completed: false },
  ]);

  const [newName, setNewName] = useState("");

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

//   return (
//     <div className="App">
//       {names.map((n, index) => (
//         <div
//           key={index}
//           style={{
//             textDecoration: name.completed ? "line-through" : "none", // Apply strikethrough if completed
//             cursor: "pointer",
//           }}
//           onClick={() => toggleCompletion(index)} // Toggle completed when clicked
//         >
//           {n.name} {/* Access the name property */}
//           <Greeting name={n} />
//           {/* <button onClick={() => removeName(index)}>❌ Delete</button> */}
//         </div>
//       ))}
//       <input
//         type="text"
//         value={newName}
//         onChange={(e) => setNewName(e.target.value)}
//         placeholder="Enter a new name"
//       />
//       <button onClick={addName}>Add New Name</button>

//       <h2>🧠 Let's learn React from Scratch</h2>
//       <button onClick={clearAllNames}>Clear All</button>
//     </div>
//   );
// }

export default App;
