import React from 'react'
import Square from './Square'
import Knight from './Knight'
import { moveKnight, canMoveKnight } from './Game'

function handleSquareClick(toX, toY) {
  console.log(`clicked (${toX}, ${toY})`)
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY)
  }
}

function renderSquare(i, [knightX, knightY]) {
  // generate x, y values
  const x = i % 8
  const y = Math.floor(i / 8)

  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere && <Knight />

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <Square black={black} onClick={() => handleSquareClick(x, y)}>
        {piece}
      </Square>
    </div>
  )
}

export default function Board({ knightPosition }) {
  const squares = []

  // generate x, y values
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        maxHeight: '80vh',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {squares}
    </div>
  )
}
