import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {HomePage} from "./features/homepage/HomePage";
import {AboutPage} from "./features/about/AboutPage";
import {BlogPage} from "./features/blog/BlogPage";
import {Blogs} from "./features/blog/Blogs";
import {Blog} from "./features/blog/Blog";
import {LoginPage} from "./features/login/LoginPage";
import {useState} from "react";
import {StatsPage} from "./features/Stats/StatsPage";
import './styles/theme.css';

export const AppLayout = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const LogOut = () => {
        navigate("/");
        setUser(null);
    }
    return(
        <div className="container">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/blogpage" className="nav-link">BlogPage</Link></li>
                    {user && user.username === 'admin' && <li><Link to="/stats" className="nav-link">Stats</Link></li>}
                    {!user && <li><Link to="/login" className="nav-link">Login</Link></li>}
                    {user && <li><span onClick={LogOut} className="nav-link" style={{cursor: 'pointer'}}>Logout</span></li>}
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/blogpage" element={<BlogPage/>}>
                    <Route index element={<Blogs />}/>
                    <Route path="/blogpage/:slug" element={<Blog />}/>
                </Route>
                <Route path="/login" element={<LoginPage onLogin={setUser}/>}/>
                <Route path="/stats" element={<StatsPage user={user}/>}/>
            </Routes>
        </div>
    )
}
