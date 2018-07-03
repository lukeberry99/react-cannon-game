import React from 'react'
import { skyAndGroundWidth } from '../utils/constants'

const Sky = () => {
  const skyStyle = {
    fill: '#30ABEF'
  }

  const skyWidth = skyAndGroundWidth
  const gameHeight = 1800

  return (
    <rect
      style={skyStyle}
      x={skyWidth / -2}
      y={100 - gameHeight}
      width={skyWidth}
      height={gameHeight}
    />
  )
}

export default Sky
