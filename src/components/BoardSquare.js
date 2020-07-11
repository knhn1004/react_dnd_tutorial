import React from 'react'
import Square from './Square'
import { useDrop } from 'react-dnd'
import { itemTypes } from '../constants'
import { moveKnight, canMoveKnight } from './Game'

const Overlay = ({ color }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: ' 100%',
        zIndex: 5,
        opacity: .5,
	background: color
      }}
    />
  )
}

export default function BoardSquare({ x, y, children }) {
  const black = (x + y) % 2 === 1

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: itemTypes.KNIGHT,
    drop: () => moveKnight(x, y),
    canDrop: () => canMoveKnight(x, y),
    collect: mon => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop(),
    }),
  })

  return (
    <div
      ref={drop}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  )
}
