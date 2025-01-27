// Define formatName function above the App function
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

// Define the user object above the App function
const user = {
  firstName: "Harper",
  lastName: "Perez",
};

// Define getGreeting function
function getGreeting(user) {
  return <div>Hello, {formatName(user)}!</div>;
}

function App() {
  // Define JSX element
  const element = <h1>Hello, {formatName(user)}!</h1>;

  return (
    <div className="App">
      <h1>Lab 2</h1>
      {element} {/* Display element */}
      {getGreeting(user)} {/* Display greeting */}
    </div>
  );
}

export default App;
