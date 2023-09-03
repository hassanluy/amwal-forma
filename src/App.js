import IraqiLongForm from "./components/IraqiLongForm";
import ShortCard from "./components/ShortCard";
import Form from "./pages/Form";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App px-6">
      <Form />
      <Routes>
        <Route element={<ShortCard />} path="shortform" />
        <Route element={<IraqiLongForm />} path="iqlongform" />
      </Routes>
    </div>
  );
}

export default App;
