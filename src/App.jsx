import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import TasksPage from "./TasksPage";
import CalendarPage from "./CalendarPage";
import Layout from "./Layout";
import EmployeePage from "./EmployeePage";
import Analytics from "./Analytics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route element={<Layout />}>
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}

export default App;
