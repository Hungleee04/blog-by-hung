import { Link } from "react-router-dom";
import {blogs} from '../../components/Data';
import styles from './BlogPage.module.css';

export const Blogs = () => {
    return (
        <div className={styles.blogList}>
            {Object.entries(blogs).map(([slug, { title, image, excerpt, date, tags }]) => (
                <div key={slug} className={styles.blogCard}>
                    {image && <img src={image} alt={title} className={styles.blogImage} />}
                    <div className={styles.blogContent}>
                        <h2 className={styles.blogTitle}>
                            <Link to={`/blogpage/${slug}`}>{title}</Link>
                        </h2>
                        <p className={styles.blogExcerpt}>{excerpt}</p>
                        <div className={styles.blogMeta}>
                            <div className={styles.blogDate}>
                                📅 {date}
                            </div>
                            <div className={styles.blogTags}>
                                {tags && tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
