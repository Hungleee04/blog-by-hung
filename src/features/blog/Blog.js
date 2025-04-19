import { useParams } from "react-router-dom";
import { blogs } from "../../components/Data";
import styles from './BlogPage.module.css';

export const Blog = () => {
    // Trích xuất slug từ useParams
    const { slug } = useParams();

    // Lấy thông tin bài viết theo slug
    const blog = blogs[slug];

    // Nếu không tìm thấy bài viết, hiển thị thông báo
    if (!blog) {
        return (
            <div className={styles.error}>
                <h2>Không tìm thấy bài viết</h2>
            </div>
        );
    }

    return (
        <div className={styles.blogDetail}>
            {blog.image && <img src={blog.image} alt={blog.title} className={styles.blogImage} />}
            <div className={styles.blogContent}>
                <h1 className={styles.blogTitle}>{blog.title}</h1>
                <div className={styles.blogMeta}>
                    <div className={styles.blogDate}>
                        📅 {blog.date}
                    </div>
                    <div className={styles.blogTags}>
                        {blog.tags && blog.tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className={styles.blogBody}>
                    {blog.content}
                </div>
            </div>
        </div>
    );
};
