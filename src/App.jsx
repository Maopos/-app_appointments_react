import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-5 mx-8 md:flex">
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;
