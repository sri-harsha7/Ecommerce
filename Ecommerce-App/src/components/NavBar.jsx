import Logo1 from "../assets/Logo1.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-5 px-4 text-2xl  ">
      <div>
        <img
          src={Logo1}
          alt=""
          className="w-25 h-25 object-cover"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex gap-5 ">
        <ul className="flex gap-5 cursor-pointer">
          <li>New Arrivals</li>
          <li>Men </li>
          <li>Women </li>
          <li>Accessories</li>
          <li className="w-9 h-9 flex justify-center rounded-lg items-center bg-gray-200 ">
            <SearchOutlinedIcon fontSize="large" />
          </li>
          <Link to="/login">
            <li className="w-9 h-9 flex justify-center rounded-lg items-center bg-gray-200 ">
              <PersonOutlineOutlinedIcon fontSize="large" />
            </li>
          </Link>
          <li className="w-9 h-9 flex justify-center rounded-lg items-center bg-gray-200 ">
            <LocalMallOutlinedIcon fontSize="large" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
