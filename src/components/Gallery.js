import React from "react";

import Header from "./Header";
import Artwork from "./Artwork";

export default function Galley() {
  return (
    <div>
      <Header />
      <div className="artwork-wrapper">
        <Artwork />
      </div>
    </div>
  );
}

