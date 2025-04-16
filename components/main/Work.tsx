import React from 'react'
import Title from '../common/Title'

const Work = () => {
    const headerItems = ["See our latest work","See all projects"];
  return (
    <div className='main-padding'>
      <div className="text-center mb-5">
        <Title items={headerItems} />
      </div>
      <hr className="border border-gray-300" />
    </div>
  )
}

export default Work
