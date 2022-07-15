import { useState, useEffect } from "react";
import "../style/button.css";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";

export default function PanicButton() {
  const SendMessage = () => {
    alert("Mensagem enviada! Procure um lugar seguro enquanto a ajuda chega.");
  };

  return (
    <div className="panic-button" onClick={SendMessage}>
      <PermPhoneMsgOutlinedIcon />
    </div>
  );
}
