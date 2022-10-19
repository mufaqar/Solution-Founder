import React from 'react'

export default function Loader() {
    return (
        <>
            <div className={`grid items-center justify-center`}>
                <h4 className='mb-2 text-xl text-center text-white '>Form Sending</h4>
                <div className="gooey">
                    <span className="dot"></span>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </>


    )
}
