import { useState } from 'react';
import LoginButton from './LoginButton';
import { useNavigate } from 'react-router-dom';
import MainPge from './MainPage';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate()
  return (
    <nav className="backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 w-full nav-bg shadow z-50 fixed top-0">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <h2 className="logo text-3xl font-bold text-blue-800"><a href="#" onClick={() => {
                  navigate('/main')
                }}>Selectify</a></h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className=
              {navbar 
                ? "flex flex-col items-center justify-center space-y-8 md:flex md:flex-row md:space-y-0 md:space-x-6"
                : "hidden md:flex md:flex-row md:space-x-6"
              }
          >

            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black hover:text-blue-600">
                <a href="#" onClick={() => {
                  navigate('/main')
                }}>Home</a>
              </li>
              <li className="text-black hover:text-blue-600">
                <a href="#">Blog</a>
              </li>
              <li className="text-black hover:text-blue-600">
                <a href="#" onClick={() => {
                  navigate('/mysaves')
                }}>My Saves</a>
              </li>
              <li className="text-black hover:text-blue-600">
                <a href="#about">About US</a>
              </li>
              <li className="text-black hover:text-blue-600">
                <a href="#">Contact US</a>
              </li>
              <li className="lg:pl-44">
                <LoginButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
