import { useState } from "react";
import axios from "axios";

interface WeatherData {
    current_condition: {
        temp_C: string;
        weatherDesc: {value: string} [];
    }[];
}

const Weather = () => {
    const [city, setCity] = useState("");
    const [data, setData] = useState<WeatherData | null>(null);
    const [error, setError] = useState("");

    const fetchWeather = async () => {
        try {
            const res = await axios.get(`https:/wttr.in/${city}?format=j1`);
            setData(res.data);
            setError("");
        } catch {
            setError("Không tìm thấy thành phố");
            setData(null);
        }
    };

    return (
        <div style={{ padding:20 }}>
            <h3>Bài 1: Ứng dụng thời tiết</h3>
            <input
                placeholder="Nhập tên thành phố..."
                value={city}
                onChange={(e) =>setCity(e.target.value)}
            />
            <button onClick={fetchWeather}>Xem</button>

            {error && <p style={{ color: "red"}}>{error}</p>}
            {data && (
                <div style={{ marginTop: 10}}>
                    <p>Nhiệt độ: {data.current_condition[0].temp_C}°C</p>
                    <p>Tình trạng: {data.current_condition[0].weatherDesc[0].value}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;