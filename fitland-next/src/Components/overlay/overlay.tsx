import React from 'react'
import ReactDOM from 'react-dom';

type  OverlayProps  ={
  onClick : () => void
}

function Overlay({onClick}: OverlayProps) {

    return ReactDOM.createPortal(
      <div onClick={onClick} className="fixed inset-0 bg-black/50 z-40 backdrop-blur-xl cursor-pointer " />,
      document.body
    );
}

export default Overlay
