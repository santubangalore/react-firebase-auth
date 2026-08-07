import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/login/index.jsx';
import RegisterPage from './pages/register/index.jsx';
import AuthPage from './pages/private-route/index.jsx';
import ProfilePage from './pages/profile/index.jsx';

function Child() {
  console.log("Child component rendered");
  useEffect(() => {
    console.log("Child component useEffect");
    return () => {
      console.log("Child  cleanup");
    };
  }, []);
  
  return null;
}

function App() {
  return (
    <div>
     <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    
      <Route path="/profile" element={
        <AuthPage>
          <ProfilePage />
        </AuthPage>  
      }/>
     </Routes>
    </div>
  )
}

export default App
