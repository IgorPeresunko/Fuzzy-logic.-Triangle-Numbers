import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
	border: none;
	border-bottom: 1px solid #448AFF;
	width: 40px;
	padding: 5px;
	margin: 5px 0;
	font-size: 20px;
	outline: none;
`
const TextField = props => (
	<Input {...props}/>
)

export const Button = styled.div`
	padding: 15px 45px;
	font-size: 1rem;
	position: relative;
	user-select: none;
	color: #fff;
	background: #448AFF;
	border: 0;
	box-shadow: 0px 3px 6px rgba(0,0,0,0.3);
	transition: all 200ms ease-in-out;
	width: 200px;
	margin: 20px auto;
	cursor: pointer;
	overflow: hidden;
	&:hover {
		box-shadow: 0px 6px 8px -3px rgba(0,0,0,0.3);
		transform: scale(0.98);
	}
	&:focus {
		outline: none;
	}
`

export const Container = styled.div`
	width: 100%;
	display: flex;
	min-height: 70vh;
	justify-content: center;
`

export const Rules = ({ data }) => (
	<RulesWrap>
		{ data.map(rule =>
			<Rule key={rule.name}>
				<div className="rule-con">
					<div>μ{rule.name} = </div>
					<div className="symbol">{'{'}</div>
					<div className="r">{rule.rule.map(r => <div key={r}>{r}</div>)}</div>
				</div>
				<div>μ{rule.name} = { rule.alphaNum }</div>
				<div>{rule.name}α = {rule.alpha}</div>
			</Rule>
		)}
	</RulesWrap>
)
const RulesWrap = styled.div`
	display: flex;
	flex-direction: column;
`
const Rule = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin: 10px 0;

	& div.rule-con {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	& div.symbol {
		font-size: 60px;
		margin: 4px 3px;
	}
	& div.r {
		flex-direction: column;
		& div {
			font-size: 16px;
		}
	}
`

export const Alpha = ({ onChange, value }) => (
	<AlphaWrap>
		<span>X</span>
		<TextField onChange={onChange} value={value} required />
	</AlphaWrap>
)
const AlphaWrap = styled.div`
	display: flex;
	align-items: center;
	& span {
		padding: 0 47px 0 24px;
		font-size: 22px;
	}
`

export default TextField