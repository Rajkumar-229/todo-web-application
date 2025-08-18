import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-pink-200 p-5 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-2xl">Todo List</h1>
      <ul className="flex gap-5 font-semibold text-lg">
        <li className="hover:scale-110 transition">Home</li>
        <li className="hover:scale-110 transition">Your Todos</li>
      </ul>
    </nav>
  );
};

export default Navbar;
