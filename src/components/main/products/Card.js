import React from 'react'
import SvgIcons from '../../SvgIcons'

const Card = ({
  name="",
  size="",
  color="",
	title="",
	body=""
}) => {
	return (
		<div className="card  mb-27x">
			<div className="card__image">
        <SvgIcons name={name} width={size} height={size} fill={color} />
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
