import { IconButton, Checkbox } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();

  return (
    <div onClick={() => history.push("/mail")} className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow_title">{title}</h3>
      <div className="emailRow_message">
        <h4>
          {subject}
          {""} <span className="emailRow_description">{description}</span>
        </h4>
      </div>
      <div className="emailRow_time">{time}</div>
    </div>
  );
};

export default EmailRow;
