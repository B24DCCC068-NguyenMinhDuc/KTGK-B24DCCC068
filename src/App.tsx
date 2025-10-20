import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./components/Weather";
import StudentList from "./components/StudentList";
import NewsList from "./components/NewsList";

function App() {
    return (
        <Router>
            <nav style={{ background: "#007bff", padding:10}}>
                <Link to="/" style={{ color: "white", marginRight:10 }}>Trang chủ</Link>
                <Link to="/bai1" style={{ color: "white", marginRight:10 }}>Bài 1</Link>
                <Link to="/bai2" style={{ color: "white", marginRight:10 }}>Bài 2</Link>
                <Link to="/bai3" style={{ color: "white" }}>Bài 3</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bai1" element={<Weather />} />
                <Route path="/bai2" element={<StudentList />} />
                <Route path="/bai3" element={<NewsList />} />
            </Routes>
        </Router>
    );
}

export default App;