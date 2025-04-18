import {Outlet} from "react-router-dom";

export const BlogPage = () => {
    return (
        <div>
            <h1>My Blog Page</h1>
            <Outlet />
        </div>
    );
};
