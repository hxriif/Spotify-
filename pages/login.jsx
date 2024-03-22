import { signIn } from "next-auth/react";


const Login = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <img></img>
            <button className="text-white px-8 py-2 rounded-full bg-green-500 font-bold text-lg" onClick={() => signIn('spotify', { callbackUrl: "/" })}>Login with Spotify</button>
        </div>
    );
};

export default Login;