import { IconButton, Button } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./Sidebar.css";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import SidebarOption from "./SidebarOption";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        className="sidebar_compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={false}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
      <SidebarOption Icon={NoteIcon} title="Drafrs" number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
