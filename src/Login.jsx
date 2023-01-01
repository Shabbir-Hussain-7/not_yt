import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useGlobalContext } from './context';

const Login = () => {
    const { setIsAuthenticated } = useGlobalContext();
    const handleLogin = (credentialResponse) => {
        console.log(jwt_decode(credentialResponse.credential));
        setIsAuthenticated(true);
    }

    return (
        <div>
            <GoogleLogin
                onSuccess={credentialResponse => {
                console.log(jwt_decode(credentialResponse.credential))
                handleLogin(credentialResponse);
                }}
                onError={() => {
                console.log('Login Failed');
                }}
            />
        </div>
    )
}

export default Login;