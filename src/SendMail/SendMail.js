import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";

const SendMail = () => {
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail_close" />
      </div>
      <form></form>
    </div>
  );
};

export default SendMail;
