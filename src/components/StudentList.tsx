import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Routes, Route, useParams } from "react-router-dom";

interface Student {
    id: number;
    name: string;
    email: string;
}

const StudentList = () => {
    const [students, setStudents] = useState<Student[]>([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setStudents(res.data))
            .catch(() => alert("Lỗi tải danh sách"));
    }, []);

    return (
        <div style={{ padding:20 }}>
            <h3>Bài 2: Danh sách sinh viên</h3>
            <ul>
                {students.map(s => (
                    <li key={s.id}>
                        <Link to={`/bai2/${s.id}`}>{s.name} - {s.email}</Link>
                    </li>
                ))}
            </ul>

            <Routes>
                <Route path=":id" element={<StudentDetail />} />
            </Routes>
        </div>
    );
};

const StudentDetail = () => {
    const { id } = useParams();
    const [student, setStudent] = useState<Student | null>(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setStudent(res.data))
            .catch(() => alert("Không tìm thấy sinh viên"));
    }, [id]);

    return student? (
        <div style={{ marginTop:20 }}>
            <h4>Thông tin chi tiết</h4>
            <p>Họ tên: {student.name}</p>
            <p>Email: {student.email}</p>
        </div>
    ) : <p>Đang tải...</p>;
};

export default StudentList;