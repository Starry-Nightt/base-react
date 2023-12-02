import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Todo from "../pages/todo/todo";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default Router;
