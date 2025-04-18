// import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import { useState } from "react";

function App() {
  const [names, setNames] = useState(["Bob", "Alex", "Mia"]);
  const [newName, setNewName] = useState("");

  function addName() {
    // setNames([...names, "New Person"]);
    if (newName.trim() !== "") {
      setNames([...names, newName]);
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
  // const name = "Upendra";

  return (
    <div className="App">
      {names.map((n, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // ✅ this centers the row horizontally
            gap: "10px",
            marginBottom: "10px", // optional: spacing between name rows
          }}
        >
          <Greeting name={n} />
          <button onClick={() => removeName(index)}>❌ Delete</button>
        </div>
      ))}
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter a new name"
      />
      <button onClick={addName}>Add New Name</button>

      <h2>🧠 Let's learn React from Scratch</h2>
      <button onClick={clearAllNames}>Clear All</button>
    </div>
  );
}

// const name = "Upendra";
// const names = ["Alex", "Sam", "Mia"];

// function App() {
//   return (
//     <div className="App">
//       {names.map((n, index) => (
//         <Greeting key={index} name={n} />
//       ))}
//       <h2>🧠 Let's learn React from Scratch</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
