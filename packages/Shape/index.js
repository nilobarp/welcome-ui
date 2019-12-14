import { node, number, oneOf, oneOfType, string } from 'prop-types'
import React, { forwardRef } from 'react'

import { SHAPES_TYPE } from '../Core/utils/propTypes'

import * as S from './styles'

export const Shape = forwardRef(({ children, dataTestId, ...rest }, ref) => (
  <S.Shape data-testid={dataTestId} ref={ref} {...rest}>
    {children}
  </S.Shape>
))

Shape.displayName = 'Shape'

Shape.propTypes = {
  children: node.isRequired,
  height: oneOfType([string, number]),
  shape: oneOf(SHAPES_TYPE),
  width: oneOfType([string, number]).isRequired
}

export default Shape
