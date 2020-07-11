import React from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'
import { itemTypes, knightImage } from '../constants'

const Knight = () => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: itemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0 : 1,
          fontSize: 100,
          fontWeight: 'bold',
          cursor: 'move',
        }}
      >
        ♘
      </div>
    </>
  )
}

export default Knight
