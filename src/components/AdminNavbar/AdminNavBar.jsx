import "./AdminNavBar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
      <ul>
        <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
          <LanguageOutlinedIcon className="icon" />
            English
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          <FullscreenExitOutlinedIcon className="icon" />
          <NotificationsNoneOutlinedIcon className="icon" />
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <ListOutlinedIcon className="icon" />
      </ul>
  );
};

export default Navbar;