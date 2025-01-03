import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TaskContext from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  console.log("Render NavBar");
  const { tasks } = useContext(TaskContext);
  const counter = useCounterStore((s) => s.counter);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
