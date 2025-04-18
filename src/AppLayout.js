import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {HomePage} from "./features/homepage/HomePage";
import {AboutPage} from "./features/about/AboutPage";
import {BlogPage} from "./features/blog/BlogPage";
import {Blogs} from "./features/blog/Blogs";
import {Blog} from "./features/blog/Blog";
import {LoginPage} from "./features/login/LoginPage";
import {useState} from "react";
import {StatsPage} from "./features/Stats/StatsPage";

export const AppLayout = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const LogOut = () => {
        navigate("/");
        setUser(null);
    }
    return(
        <>
          <nav>
              <Link to="/" style={{padding : 5}}>Home</Link>
              <Link to="/about" style={{padding : 5}}>About</Link>
              <Link to="/blogpage" style={{padding : 5}}>BlogPage</Link>
              <span>||</span>
              {user&&user.username==='admin'? <Link to="/stats">Stats</Link> : null}
              {!user?<Link to="/login">Login</Link> : null}
              {user&&<span onClick={LogOut}> Logout</span>}
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
        </>
    )
}
