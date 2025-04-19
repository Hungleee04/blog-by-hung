import styles from './AboutPage.module.css';

export const AboutPage = () => {
    return (
        <div className={styles.about}>
            <div className={styles.header}>
                <h1>Giới thiệu</h1>
            </div>

            <div className={styles.profile}>
                <div className={styles.profileImage}>
                    {/* Thêm ảnh profile của bạn ở đây */}
                </div>
                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <strong>Họ tên:</strong>
                        <span>Lê Mạnh Hùng</span>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>Ngày sinh:</strong>
                        <span>10/01/2004</span>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>Trường:</strong>
                        <span>Học viện Công nghệ Bưu chính Viễn thông (PTIT)</span>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <p>
                    Mình là sinh viên yêu thích lập trình web, đặc biệt là frontend với React và các công nghệ hiện đại.
                    Mục tiêu của mình là xây dựng các sản phẩm đẹp, dễ dùng và mang lại giá trị thực tế.
                </p>
            </div>

            <div className={styles.social}>
                <h2>🔗 Kết nối với mình</h2>
                <div className={styles.socialLinks}>
                    <a href="https://www.facebook.com/hungleee.1001" target="_blank" rel="noreferrer" className={styles.socialLink}>
                        📘 Facebook
                    </a>
                    <a href="https://github.com/Hungleee04" target="_blank" rel="noreferrer" className={styles.socialLink}>
                        💻 GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};
