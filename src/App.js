import ShortCard from "./components/ShortCard";
import Form from "./pages/Form";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App px-6">
      <Form />
      <Routes>
        <Route element={<ShortCard />} path="shortform" />
      </Routes>
    </div>
  );
}

export default App;
