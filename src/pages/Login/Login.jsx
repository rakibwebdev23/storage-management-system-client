import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="card bg-white shadow-2xl p-8 rounded-lg w-1/2">
                <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-6">Continue Your Journey</h2>
                <form className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <input className="py-3 px-8 w-full bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300" type="submit" value="Login" />
                    </div>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account? Please{" "}
                    <Link to="/register" className="text-blue-600 font-semibold hover:underline">
                        Register
                    </Link>
                </p>
                <div className="text-center mt-4">
                    <button className="py-2 px-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition duration-300">
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;