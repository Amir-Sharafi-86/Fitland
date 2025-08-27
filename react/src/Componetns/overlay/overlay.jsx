import React from 'react'
import ReactDOM from 'react-dom';

function Overlay({isVisible , onClick}) {
    if (!isVisible) return null;

    return ReactDOM.createPortal(
      <div onClick={onClick} className="fixed inset-0 bg-black/50 z-40 " />,
      document.body
    );
}

export default Overlay
