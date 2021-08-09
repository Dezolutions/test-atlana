import React from 'react'
import './loader.css'
const Loader = () => {
  return (
    <div className="lds-block">
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader
