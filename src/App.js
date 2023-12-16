
import './App.css';
import Counter from './Component/Counter';
import AuthForm from './Component/Auth/AuthForm';
import { useSelector } from 'react-redux';
import ProfilePage from './Component/Pages/ProfilePage';
import Header from './Component/Pages/Header';

function App() {
  const isAuth = useSelector((state)=>state.Auth.isAuthenticated)
  return (
    <>
    <Header/>
    {!isAuth && <AuthForm/>}
    {isAuth && <ProfilePage/>}
    <Counter/>
    </>
  );
}

export default App;
