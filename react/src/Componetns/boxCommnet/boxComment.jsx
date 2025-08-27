import React from 'react'

function BoxComment() {
    return (
        <div className='box__comment-main '>
                            <div>
                                <div className="box  rounded-lg border border-[#CBCBCB] py-2 px-6">
                                    <div className="header  flex items-center gap-x-5 text-xs md:text-base">
                                            <img src="/images/main/boxCommnet.png" alt="" />
                                            <span>رسول</span>
                                    </div>
                                    <div className="body__comment ">
                                        <p className='text-[#404040]  max-w-[700px] text-start mx-auto text-base md:text-lg'>بسیار ممنونم از اینکه این کفش خوب رو برامون گذاشتید. خییلییی خفنه</p>
                                    </div>
                                </div>
                            </div>
                    </div>
    )
}

export default BoxComment
