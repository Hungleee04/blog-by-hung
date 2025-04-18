import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = ({onLogin}) => {

    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Kiểm tra thông tin đăng nhập (bạn có thể thay thế bằng logic thực tế)
       if(credentials.username==='admin' && credentials.password==='admin'){
           navigate("/stats");
           onLogin&&onLogin({username: credentials.username});
       }
       else{
            setError("Username or password is incorrect");
       }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Email</label>
                <input
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({...credentials,username: e.target.value})}
                    required
                    style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' }}
                />

                <label>Mật khẩu</label>
                <input
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials,password: e.target.value})}
                    required
                    style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' }}
                />

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', fontSize: '16px', border: 'none', cursor: 'pointer' }}>
                    Đăng nhập
                </button>
            </form>
        </div>
    );
};
