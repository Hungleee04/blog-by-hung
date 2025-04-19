import {Outlet} from "react-router-dom";
import styles from './BlogPage.module.css';

export const BlogPage = () => {
    return (
        <div className={styles.blogPage}>
            <div className={styles.header}>
                <h1>My Blog Page</h1>
            </div>
            <Outlet />
        </div>
    );
};
