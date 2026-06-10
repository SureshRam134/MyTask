import React from 'react'

const Wrapper = ({margin = '', padding = '', children }) => {
  return (
    <div className={` ${margin ? margin : "px-[5%] py-[2%]"} ${padding ? padding : ""} `}>
        {children}
    </div>
  )
}

export default Wrapper