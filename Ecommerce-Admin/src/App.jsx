import { useState } from "react";
const URL = import.meta.env.VITE_BACKEND_URL;
function App() {
  const [message, setMessage] = useState("");
  console.log(URL);

  const handleClick = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setMessage(data.message);
  };
  return (
    <>
      <h1 className="text-3xl font-bold  underline text-yellow-500">
        Hello World
      </h1>
      <button onClick={handleClick}>Click me</button>
      <p>{message}</p>
    </>
  );
}

export default App;
