import React from 'react';
import Card from './Card';

const CardList = ({ lecturers }) => {

	return (
		<div>
			{
				lecturers.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={lecturers[i].id} 
							name={lecturers[i].name} 
							email={lecturers[i].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;