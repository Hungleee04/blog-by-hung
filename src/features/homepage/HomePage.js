import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>🏠 HomePage</h1>
            <h2 style={{ fontWeight: 'normal', marginBottom: '20px' }}>Welcome to my territory</h2>

            <p>
                Xin chào! Mình là <strong>Lê Mạnh Hùng</strong>, sinh viên tại
                <em> Học viện Công nghệ Bưu chính Viễn thông (PTIT)</em>.
            </p>

            <p style={{ marginTop: '10px' }}>
                Đây là trang blog cá nhân nơi mình chia sẻ các kiến thức về lập trình web, đặc biệt là <strong>React</strong>,
                các dự án mình đang thực hiện, và các bài viết thú vị khác.
            </p>

            <p style={{ marginTop: '20px' }}>
                👉 Bạn có thể:
            </p>
            <ul style={{ marginLeft: '20px' }}>
                <li>
                    🔍 <Link to="/about">Tìm hiểu thêm về mình</Link>
                </li>
                <li>
                    📚 <Link to="/blogpage">Xem các bài viết mới nhất</Link>
                </li>
            </ul>

            <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
                Cảm ơn bạn đã ghé thăm!
            </p>
        </div>
    );
};
