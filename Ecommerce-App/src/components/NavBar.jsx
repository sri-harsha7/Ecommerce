import Logo1 from "../assets/Logo1.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between items-center py-5 px-4 text-2xl overflow-x-hidden">
      <div>
        <img
          src={Logo1}
          alt="logo"
          className="w-24 h-24 object-cover cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="flex gap-4 lg:gap-5 items-center">
        <ul className="hidden lg:flex gap-5 cursor-pointer">
          <li>New Arrivals</li>
          <li>Men</li>
          <li>Women</li>
          <li>Accessories</li>
        </ul>

        <div className="flex items-center gap-3 lg:gap-5">
          {showSearch && (
            <input
              type="text"
              placeholder="Search"
              className="w-27 h-9 py-0.5 px-2 lg:block border rounded lg:px-4  lg:w-40"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}

          <li
            className="w-9 h-9 flex justify-center rounded-lg items-center bg-gray-200"
            onClick={() => setShowSearch(true)}
          >
            <SearchOutlinedIcon fontSize="medium" />
          </li>

          <Link to="/login">
            <li className="w-9 h-9 flex justify-center rounded-lg items-center bg-gray-200">
              <PersonOutlineOutlinedIcon fontSize="medium" />
            </li>
          </Link>

          <li className="w-9 h-9 flex justify-center rounded-lg items-center bg-gray-200">
            <LocalMallOutlinedIcon fontSize="medium" />
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// import Logo1 from "../assets/Logo1.png";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// const NavBar = () => {
//   const navigate = useNavigate();
//   const [search, setSearch] = useState("");

//   return (
//     <div className="w-full flex justify-between items-center py-5 px-4 text-2xl">
//       {/* Logo */}
//       <div>
//         <img
//           src={Logo1}
//           alt="Logo"
//           className="w-24 h-24 object-cover cursor-pointer"
//           onClick={() => navigate("/")}
//         />
//       </div>

//       {/* Menu + Icons */}
//       <div className="flex items-center gap-5">
//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex gap-5 cursor-pointer">
//           <li>New Arrivals</li>
//           <li>Men</li>
//           <li>Women</li>
//           <li>Accessories</li>
//         </ul>

//         {/* Search + Icons (visible always) */}
//         <div className="flex items-center gap-4">
//           <input
//             type="text"
//             placeholder="Search"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="hidden sm:block border rounded-lg px-3 py-1 text-base w-28 lg:w-40"
//           />

//           <SearchOutlinedIcon fontSize="medium" className="cursor-pointer" />

//           <Link to="/login">
//             <PersonOutlineOutlinedIcon
//               fontSize="medium"
//               className="cursor-pointer"
//             />
//           </Link>

//           <LocalMallOutlinedIcon fontSize="medium" className="cursor-pointer" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
