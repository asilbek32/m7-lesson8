

import RegisterForm from "./register/registerforn";
import LoginForm from "./login";

function App() {
  
  return (
    <div className=" flex items-center justify-center  px-10 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full max-w-[70%] mx-auto">
        <div className="flex-1">
          <RegisterForm />
        </div>
        <div className="flex-1">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
{
  /* {errors?.email?.message ? (
          <p className="text-[red]">{errors.email.message}</p>
        ) : (
          ""
        )} */
}
