import React, { Component } from 'react'

import Canvas from './Canvas'
import FuzzyNumber from './FuzzyNumber'
import NumberInput from './NumberInput'
import { Button, Container, Rules, Alpha } from './TextField' 

class View extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{
					x: [1, 5, 8],
					y: [0, 1, 0],
					type: 'scatter'
				}
			],
			numbers: [
				new FuzzyNumber('A', 1, 5, 8),
				new FuzzyNumber('B', 2, 6, 8),
				// new FuzzyNumber('C', 1, 3, 10),
			],
			rules: [],
			alphaNum: 5,
		}
	}

	onNumChange = (name, x) => e => {
		const num = e.target.value
		const numbers = this.state.numbers.map(n =>
			n.name === name ? n.replaceNum(x, num) : n)

		console.log(numbers)
		
		this.setState({ numbers })
	}

	onChangeAlpha = e => {
		const x = e.target.value

		const rules = this.state.numbers.map(number => ({
			name: number.name,
			rule: number.toStringRules(),
			alpha: number.toAlpha(),
			alphaNum: number.alpha(x)
		}))

		const data = [...this.state.numbers.map(number => ({
			name: number.name,
			x: [number.x1, number.x2, number.x3],
			y: [0, 1, 0],
			type: 'scatter'
		})), {
			name: 'X',
			x: [x, x],
			y: [0, 1],
			type: 'dash'
		}]	

		this.setState({ data, rules, alphaNum: x })
	}

	redrawChart = (numbers) => {
		const data = [...numbers.map(number => ({
			name: number.name,
			x: [number.x1, number.x2, number.x3],
			y: [0, 1, 0],
			type: 'scatter'
		})), {
			name: 'X',
			x: [this.state.alphaNum, this.state.alphaNum],
			y: [0, 1]
		}]	

		const rules = numbers.map(number => ({
			name: number.name,
			rule: number.toStringRules(),
			alpha: number.toAlpha(),
			alphaNum: number.alpha(this.state.alphaNum)
		}))

		this.setState({ data, rules })
	}

	calculate = () => {
		const { numbers } = this.state
		const newNums = [...numbers, numbers[0].add(numbers[1])]

		this.setState({ numbers: newNums })
		
		this.redrawChart(newNums)
	}

	componentDidMount() {
		this.redrawChart(this.state.numbers)
	}

	render() {
		const { data, numbers, rules } = this.state
		return (
			<Container>
				<div>
					{ numbers.map(num => <NumberInput number={num} onChange={this.onNumChange} key={num.name} /> )}
					<Alpha onChange={this.onChangeAlpha} value={this.state.alphaNum} />
					<Button onClick={this.calculate}>Calculate</Button>
					<Rules data={rules} />
				</div>
				<Canvas data={data} />
			</Container>
		)
	}
}

export default View