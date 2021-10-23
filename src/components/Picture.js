import React, { useState } from "react";
import Modal from "@mui/material/Modal";

export default function Picture(image, index) {
  const [open, setOpen] = useState(false);

 
    console.log(image)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div key={index} className="artwork-container">
      <button className="artwork-button" onClick={handleOpen}>
        <img className="artwork" alt="p" src={image.image}></img>
      </button>
      <Modal className="modal" open={open} key={index} onClose={handleClose}>
        <div className="modal-picture">
          <img alt="artwork" className="modal-picture" src={"%PUBLIC_URL%" + image.image}></img>
        </div>
      </Modal>
    </div>
  );
}

