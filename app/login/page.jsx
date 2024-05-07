import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="container mx-auto text-center text-slate-900 bg-blue my-3">
      <form className="flex flex-col py-3 items-center">
        <label htmlFor="email">Email:</label>
        <input
          className="border border-gray-300 rounded-lg px-2 py-1 w-72"
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="border border-gray-300 rounded-lg px-2 py-1 w-72"
          id="password"
          name="password"
          type="password"
          required
        />

        <div className="flex flex-row space-x-3 mt-2 text-white">
          <button
            className="bg-green-900 py-1 px-2 rounded-lg hover:bg-green-800 hover:text-slate-50"
            formAction={login}
          >
            Log in
          </button>

          <button
            className="bg-green-900 py-1 px-2 rounded-lg hover:bg-green-800 hover:text-slate-50"
            formAction={signup}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
