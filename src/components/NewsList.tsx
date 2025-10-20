import { useState, useEffect } from "react";
import axios from "axios";

interface Article {
    id: string;
    title: string;
    summary: string;
    image_url: string;
    url: string;
    published_at: string;
}

const NewsList = () => {
    const [news, setNews] = useState<Article[]>([]);

    useEffect(() => {
        axios.get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
            .then(res => setNews(res.data.results))
            .catch(() => alert("Lỗi tải tin tức"));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h3>Ứng dụng xem tin tức</h3>
            {news.map((n) => (
                <div key={n.id} style={{ marginBottom: 20, borderBottom: "1px solid #ccc" }}>
                    <h4>{n.title}</h4>
                    {n.image_url && <img src={n.image_url} alt={n.title} width="300" />}
                    <p>{n.summary}</p>
                    <a href={n.url} target="_blank">Xem chi tiết</a>
                    <p><i>Ngày đăng: {new Date(n.published_at).toLocaleDateString()}</i></p>
                </div>
            ))}
        </div>
    );
};

export default NewsList;