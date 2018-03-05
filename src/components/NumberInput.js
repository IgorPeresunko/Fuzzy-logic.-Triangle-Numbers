import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TextField from './TextField'

const propTypes = {
	number: PropTypes.object,
	onChange: PropTypes.func
}

const Wrapper = styled.div`
	display: flex;
	font-size: 14px;
	align-items: center;
	justify-content: center;
	& div {
		font-size: 22px;
		padding-right: 30px;
	}
`
const NumberInput = ({ number, onChange }) => (
	<Wrapper>
		<div>{number.name}</div>
		X1 <TextField value={number.x1} onChange={onChange(number.name, 'x1')} type="number" required/>
		X2 <TextField value={number.x2} onChange={onChange(number.name, 'x2')} type="number" required/>
		X3 <TextField value={number.x3} onChange={onChange(number.name, 'x3')} type="number" required/>
	</Wrapper>
)

NumberInput.propTypes = propTypes

export default NumberInput