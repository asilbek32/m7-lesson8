import React from "react";
import { useForm } from "react-hook-form";

function RegisterForm() {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
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
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Surname</label>
            <input
              type="text"
              {...register("surname")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Username</label>
            <input
              type="text"
              {...register("username")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              {...register("phoneNumber")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">ZIP Code</label>
            <input
              type="text"
              {...register("zipCode")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-600 mb-1">Address</label>
            <input
              type="text"
              {...register("adress")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Job</label>
            <input
              type="text"
              {...register("job")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Birthday Date</label>
            <input
              type="date"
              {...register("birthdayDate")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-500"
            />
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
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition-all shadow-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
