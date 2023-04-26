import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DoneTodo from "./pages/DoneTodo";
import Home from "./pages/Home";
import NotDoneTodo from "./pages/NotDoneTodo";
import UpdateTodoItems from "./pages/UpdateTodoItems";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <p>ToDo App</p>
        <p>
          <Header />
        </p>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/done" element={<DoneTodo />} />
        <Route path="/not-done" element={<NotDoneTodo />} />
        <Route path="/update-TodoItems" element={<UpdateTodoItems />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
