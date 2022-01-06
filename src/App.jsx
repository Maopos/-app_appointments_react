import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <Formulario />
      <ListadoPacientes />
     </div>
  );
}

export default App;
