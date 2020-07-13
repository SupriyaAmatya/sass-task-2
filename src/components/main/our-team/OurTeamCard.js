import React from 'react'
import SocialIcons from '../../SocialIcons';

const OurTeamCard = ({ members }) => {
	
	return (
		<div className="row">
			{
				members ? members.map(member => {
					
					return (
						<div className="col col-4-lg" key={member.name}>
							<div className="card card--team mb-27x col-12-md">
								<div className={`card__image card__image--${member.imgSrc}`}>
								</div>
								<div className="card__content mt-10x">
									<h4 className="card__title">
										{member.name}
									</h4>
									<small className="card__subtitle">{member.profession}</small>
									<p className="card__body body2 mt-5x">
										{member.about}
									</p>

									<ul className="socials socials--team">
										{
											member.socials.map(icon => {
												return(
												<li key={icon.title} className="socials__item">
													<a href={icon.href} target="_blank" rel="noopener noreferrer">
														<SocialIcons iconName={icon.title} />
													</a>
												</li>
												)
											})
										}
									</ul>
								</div>
							</div>
						</div>
					)
				}) : null
			}
		</div>
	)
}

export default OurTeamCard
