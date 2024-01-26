import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import ProjectDetails from "./Pages/ProjectDetails";
import MainPage from "./Components/organisme/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
