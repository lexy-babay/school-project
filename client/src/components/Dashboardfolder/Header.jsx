function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-0">Dashboard</h1>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border rounded-lg focus:outline-none w-full sm:w-auto"
      />
    </div>
  );
}

export default Header;
