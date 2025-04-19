import { Link } from "react-router-dom";
import styles from './HomePage.module.css';

export const HomePage = () => {
    return (
        <div className={styles.hero}>
            <h1>🏠 HomePage</h1>
            <h2>Welcome to my territory</h2>

            <div className={styles.content}>
                <div className={styles.section}>
                    <h2>👋 Giới thiệu</h2>
                    <p>
                        Xin chào! Mình là <strong>Lê Mạnh Hùng</strong>, sinh viên tại
                        <em> Học viện Công nghệ Bưu chính Viễn thông (PTIT)</em>.
                    </p>

                    <p>
                        Đây là trang blog cá nhân nơi mình chia sẻ các kiến thức về lập trình web, đặc biệt là <strong>React</strong>,
                        các dự án mình đang thực hiện, và các bài viết thú vị khác.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2>🎯 Khám phá</h2>
                    <ul>
                        <li>
                            <Link to="/about">
                                🔍 Tìm hiểu thêm về mình
                            </Link>
                        </li>
                        <li>
                            <Link to="/blogpage">
                                📚 Xem các bài viết mới nhất
                            </Link>
                        </li>
                    </ul>
                </div>

                <p className={styles.thankYou}>
                    ✨ Cảm ơn bạn đã ghé thăm!
                </p>
            </div>
        </div>
    );
};
