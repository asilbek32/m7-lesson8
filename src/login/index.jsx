import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function LoginForm() {
  const schema = Yup.object().shape({
    username: Yup.string().required("Username kiriting"),
    email: Yup.string().email("Email noto‘g‘ri").required("Email kiriting"),
    password: Yup.string()
      .min(6, "Kamida 6 ta belgi bo‘lishi kerak")
      .required("Parol kiriting"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    console.log(data);
    reset(); 
  };

  return (
    <div className="flex items-center justify-center w-[400px]">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-full"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Username</label>
            <input
              type="text"
              {...register("username")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.username && (
              <span className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition-all shadow-sm"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
