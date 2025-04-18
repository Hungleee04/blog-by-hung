export const AboutPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Giới thiệu</h1>
            <p><strong>Họ tên:</strong> Lê Mạnh Hùng</p>
            <p><strong>Ngày sinh:</strong> 10/01/2004</p>
            <p><strong>Trường:</strong> Học viện Công nghệ Bưu chính Viễn thông (PTIT)</p>

            <p style={{ marginTop: '15px' }}>
                Mình là sinh viên yêu thích lập trình web, đặc biệt là frontend với React và các công nghệ hiện đại.
                Mục tiêu của mình là xây dựng các sản phẩm đẹp, dễ dùng và mang lại giá trị thực tế.
            </p>

            <h2 style={{ marginTop: '25px' }}>🔗 Kết nối với mình</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li>
                    📘 Facebook:{" "}
                    <a href="https://www.facebook.com/hungleee.1001" target="_blank" rel="noreferrer">
                        https://www.facebook.com/hungleee.1001
                    </a>
                </li>
                <li>
                    💻 GitHub:{" "}
                    <a href="https://github.com/Hungleee04" target="_blank" rel="noreferrer">
                        https://github.com/Hungleee04
                    </a>
                </li>
            </ul>
        </div>
    );
};
