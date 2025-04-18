import { Link } from "react-router-dom";
import {blogs} from '../../components/Data';

export const Blogs = () => {
    return (
        <ul>
            {Object.entries(blogs).map(([slug, { title }]) => (
                <li key={slug}>
                    <Link to={`/blogpage/${slug}`}>{title}</Link>
                    </li>
                ))}
        </ul>
    );
};
