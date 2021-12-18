import React from 'react'
import { Search } from '../components/Search'
import { Card } from '../components/Card'
export const Home = () => {
	const cards = new Array(15).fill('').map((_, i) => i)
	console.log(cards)

	return (
		<>
			<Search />
			<div className="row">
				{cards.map((card) => {
					return (
						<div className="mb-4 col-sm-4 mt-4" key={card}>
							<Card />
						</div>
					)
				})}
			</div>
		</>
	)
}
