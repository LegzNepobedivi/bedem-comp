import DeployButton from "../auth-items/DeployButton";
import AuthButton from "../auth-items/AuthButton";

export default function HeaderAdmin() {
  return (
    <div className=" bg-slate-700 ">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          <AuthButton />
        </div>
      </nav>
    </div>
  );
}
