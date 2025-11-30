import Logo from "./Logo";
import NavButton from "./NavButton";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white shadow-md px-4 py-3 flex items-center justify-between fixed top-0 left-0 w-full shadow-md">
      <div className="flex items-center gap-3">
        <Logo />
        <span className="text-xl font-bold">QuizMaster</span>
      </div>

      <nav className="flex items-center gap-4">
        <NavButton label="Login" />
        <NavButton label="Topics" />
        <NavButton label="Profile" />
      </nav>
    </header>
  );
}
