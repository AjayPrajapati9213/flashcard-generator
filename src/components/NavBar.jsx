import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  /// define diffrent styles
  const defaultStyle =
    "text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md";
  const activeLink = "bg-gray-900 text-white px-3 py-2 rounded-md text-md";

  /// use navlink, isActive to get active (clicked) link
  const navLinkStyles = ({ isActive }) => {
    return isActive ? activeLink : defaultStyle;
  };
  return (
    <header>
      <div className="px-10 py-5 bg-gray-100" data-testid='navbar'>
        <h1 className="text-gray-900 text-2xl sm:text-4xl font-bold text-center">
          FlashCard Generator
        </h1>
      </div>
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-3xl  font-bold text-gray-900 mb-4">
            Create Flashcard
          </h2>
          <div className="flex gap-6">
            <NavLink className={navLinkStyles} to="/">
              Create Flashcard
            </NavLink>
            <NavLink className={navLinkStyles} to="/my-flashcards">
              My FlashCards
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;