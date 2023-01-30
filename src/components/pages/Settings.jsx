import React from "react";
import "../../styles/settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings-body">
        <h2 className="settings-head">Тохиргоо</h2>
        <div className="settings-inputs">
          <div className="settings-art">
            <span>Settings</span>
            <input type="text" placeholder="****" />
          </div>
          <div className="settings-art">
            <span>Шинэ нууц үг</span>
            <input type="text" placeholder="1234567@AA" />
          </div>
          <div className="settings-art">
            <span>Шинэ нууц үг давтах</span>
            <input type="text" placeholder="1234567@AA" />
          </div>
          <button>Хадаглах</button>
        </div>
      </div>
    </div>
  );
}
