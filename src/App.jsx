import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Students from "./pages/Students";
import MySkills from "./pages/MySkills";
import PlacementDrive from "./pages/PlacementDrive";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/students" element={<Students />} />
        <Route path="/my-skills" element={<MySkills />} />
        <Route path="/placement-drive" element={<PlacementDrive />} />
      </Route>
    </Routes>
  );
}

export default App;
