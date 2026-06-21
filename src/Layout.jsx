import { Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { motion } from "framer-motion";

export default function Layout() {
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName") || "Employee";

  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <motion.aside
        className="sidebar"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.h2
          className="sidebar-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          PaviTech
        </motion.h2>

        <ul className="sidebar-menu">
          <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.97 }} onClick={() => navigate("/dashboard")}>🏠 Dashboard</motion.li>
          <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.97 }} onClick={() => navigate("/calendar")}>📅 Meetings</motion.li>
          <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.97 }} onClick={() => navigate("/tasks")}>✅ Tasks</motion.li>
          <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.97 }} onClick={() => navigate("/employees")}>👥 Employees</motion.li>
          <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.97 }} onClick={() => navigate("/analytics")}>📊 Analytics</motion.li>
        </ul>

        <motion.button
          className="logout-btn"
          onClick={handleLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Logout
        </motion.button>
      </motion.aside>

      {/* Page Content */}
      <motion.main
        className="dashboard-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Outlet />
      </motion.main>
    </div>
  );
}
