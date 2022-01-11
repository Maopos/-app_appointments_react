import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [patients, setPatients] = useState([]);

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-5 mx-8 md:flex">
        <Form patients={patients} setPatients={setPatients} />
        <List patients={patients} />
      </div>
    </div>
  );
}

export default App;
