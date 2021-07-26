import React from "react";
import "./HeaderComponent.css";

function HeaderComponent() {
  return (
    <div>
      <header>
        <div className="headerTitle">
          {" "}
          <a href="https://www.foldscope.com/">
            FoldScope Instruments Spy Decryption
          </a>{" "}
        </div>
      </header>
    </div>
  );
}

export default HeaderComponent;
