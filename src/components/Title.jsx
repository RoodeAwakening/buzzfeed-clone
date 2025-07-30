import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div>
      <h1 className='title'>{title}</h1>
      <p className='subtitle'>{subtitle}</p>
    </div>
  )
}

export default Title