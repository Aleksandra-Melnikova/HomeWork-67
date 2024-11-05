import "./App.css";
import DoorKeypad from "./containers/DoorKeypad/DoorKeypad.tsx";
import Layout from "./components/Layout/Layout.tsx";
import { Route, Routes } from "react-router-dom";
import Calculator from "./containers/Calculator/Calculator.tsx";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<DoorKeypad />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </Layout>
    </>
  );
};
export default App;
