import React from 'react'

const Card = ({
	imgSrc,
	title,
	body
}) => {
	return (
		<div className="card  mb-27x">
			<div className={`card__image card__image--${imgSrc}`}>
			</div>
			<div className="card__content mt-10x">
				<h4 className="card__title">
          {title}
        </h4>
				<p className="card__body body2 mt-5x">
					{body}
				</p>
				
			</div>
		</div>
	)
}

export default Card
