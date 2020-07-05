import React from 'react'

const Square = ({ black, children }) => {
  const fill = black ? 'black' : 'white'
  const stroke = black ? 'white' : 'black'

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: 100,
        height: 100,
	textAlign: 'center'
      }}
    >
      {children}
    </div>
  )
}

export default Square
