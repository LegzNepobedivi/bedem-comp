import { login } from "./actions";

export default function Login() {
  return (
    <div className="container mx-auto text-center text-slate-900 bg-blue my-3">
      <form className="flex flex-col py-3 items-center">
        <div>
          <label>Email</label>
          <input
            className="border border-gray-300 rounded-lg px-2 py-1 w-72"
            type="email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className="border border-gray-300 rounded-lg px-2 py-1 w-72"
            type="password"
            required
          />
        </div>
        <div className="flex flex-row space-x-3 mt-2 text-white">
          <button
            formAction={login}
            className="bg-green-900 py-1 px-2 rounded-lg hover:bg-green-800 hover:text-slate-50"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
