import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
    return (
        <div>
            <div className="loading__container fixed inset-0 size-full flex-center z-10000  bg-[#00000083]">
              <ClipLoader color="#1565C0" size={70} />
            </div>
        </div>
    )
}

export default Loading
