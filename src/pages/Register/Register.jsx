import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Register = () => {

    const { createUser } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data.email, data.password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="card bg-white shadow-2xl p-8 rounded-lg w-1/2">
                <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-6">Create Your Account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">User Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border rounded focus:ring-rose-500 focus:border-rose-500"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border rounded focus:ring-rose-500 focus:border-rose-500"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Create a strong password"
                            className="w-full px-4 py-3 border rounded focus:ring-rose-500 focus:border-rose-500"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    message: "Password must include uppercase, lowercase, number and special character"
                                }
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Create a strong password"
                            className="w-full px-4 py-3 border rounded focus:ring-rose-500 focus:border-rose-500"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    message: "Password must include uppercase, lowercase, number and special character"
                                }
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <div className="form-control mt-6">
                        <input className="py-3 px-8 w-full bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300" type="submit" value="Register" />
                    </div>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account? Please{" "}
                    <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                        Login
                    </Link>
                </p>
                <div className="text-center mt-4">
                    <button className="py-2 px-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition duration-300">
                        Register with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
