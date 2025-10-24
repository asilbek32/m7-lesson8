import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

function RegisterForm() {
  const schema = Yup.object().shape({
    name: Yup.string().required("Ism kiriting"),
    surname: Yup.string().required("Familiyangizni kiriting"),
    username: Yup.string().required("Username kiriting"),
    email: Yup.string().email("Email noto‘g‘ri").required("Email kiriting"),
    phoneNumber: Yup.string().required("phoneNumber kiriting"),
    zipCode: Yup.string().required("zipCode kiriting"),
    adress: Yup.string().required("adress kiriting"),
    job: Yup.string().required("job kiriting"),
    birthdayDate: Yup.string().required("birthdayDate kiriting"),
    gender: Yup.string().required("Gender tanlang"),
    password: Yup.string()
      .min(6, "Kamida 6 ta belgi bo‘lishi kerak")
      .required("Parol kiriting"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
  
    axios({
      url: "https://68b6bfc073b3ec66cec28ce1.mockapi.io/useForm",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    }).then((res) => console.log(res)).catch((error)=> console.log(error));
    

    reset();
  };

  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-full"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Registration Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              {...register("name")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Surname</label>
            <input
              type="text"
              {...register("surname")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.surname && (
              <span className="text-red-500 text-sm mt-1">
                {errors.surname.message}
              </span>
            )}
          </div>

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
            <label className="text-sm text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              {...register("phoneNumber")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm mt-1">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">ZIP Code</label>
            <input
              type="text"
              {...register("zipCode")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.zipCode && (
              <span className="text-red-500 text-sm mt-1">
                {errors.zipCode.message}
              </span>
            )}
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-600 mb-1">Address</label>
            <input
              type="text"
              {...register("adress")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.adress && (
              <span className="text-red-500 text-sm mt-1">
                {errors.adress.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Job</label>
            <input
              type="text"
              {...register("job")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.job && (
              <span className="text-red-500 text-sm mt-1">
                {errors.job.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Birthday Date</label>
            <input
              type="date"
              {...register("birthdayDate")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-500"
            />
            {errors.birthdayDate && (
              <span className="text-red-500 text-sm mt-1">
                {errors.birthdayDate.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Gender</label>
            <select
              {...register("gender")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <span className="text-red-500 text-sm mt-1">
                {errors.gender.message}
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
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition-all shadow-sm cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
