export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">TODO App</h1>

      <nav aria-label="Main navigation">
        <ul className="flex space-x-6">
          <li>
            <a className="hover:underline" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/todo">
              To Do
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
