import { useParams } from "react-router-dom";
import { blogs } from "../../components/Data";

export const Blog = () => {
    // Trích xuất slug từ useParams
    const { slug } = useParams();

    // Lấy thông tin bài viết theo slug
    const blog = blogs[slug];

    // Nếu không tìm thấy bài viết, hiển thị thông báo
    if (!blog) {
        return <div><h2>Không tìm thấy bài viết</h2></div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>{blog.title}</h1>
            <p>{blog.descrip}</p>
        </div>
    );
};
