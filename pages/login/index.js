import Alert from "../../components/micro/alert";
import Input from "../../components/micro/input";

export default function Login(props) {
    const handleLogin = () => { }

    return (
        <div className="w-full h-screen bg-blue-50 flex items-center">
            <form onSubmit={handleLogin} className="bg-white md:w-2/5 :w-3/4 h-80 mx-auto py-5 px-8 rounded-lg flex flex-col justify-center">
                <Alert type={'fail'} text={'Testing Alert'} />
                <h3 className="text-xl">Login to admin dashboard</h3>
                <div className="mt-3">
                    <Input required name='username' type='text' label={'Username'} />
                </div>
                <div className="mt-3">
                    <Input required name='password' type='password' label={'Password'} />
                </div>
                <button className="bg-slate-800 text-white py-3 rounded mt-4">Login</button>
            </form>
        </div>
    );
}