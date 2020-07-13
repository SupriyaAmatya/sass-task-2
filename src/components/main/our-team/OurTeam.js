import React from 'react'
import OurTeamCard from './OurTeamCard'

const membersDetails = [
 {
    imgSrc: 'team-1',
    name: 'Gigi Hadid',
    profession: 'Model',
    about: 'You can write here details about one of your team members. You can give more details about what they do.Feel free to add some links for people to be able to follow them outside the site.',
    socials:[
      {title: 'twitter',href:'https://twitter.com/GiGiHadid'
      },
      {title: 'instagram',href:'https://www.instagram.com/gigihadid/'},
      {title: 'facebook',href:'https://www.facebook.com/officialgigihadid/'}
    ]
  },

  {
    imgSrc: 'team-2',
    name: 'Christian Louboutin',
    profession: 'Designer',
    about: 'You can write here details about one of your team members. You can give more details about what they do.Feel free to add some links for people to be able to follow them outside the site.',
    socials:[
      {title: 'twitter',href:'https://twitter.com/LouboutinWorld'},
      {title: 'linkedin',href:'https://www.linkedin.com/company/christian-louboutin'}
    ]
  },

  {
    imgSrc: 'team-3',
    name: 'Kendal Jenner',
    profession: 'Model',
    about: 'You can write here details about one of your team members. You can give more details about what they do.Feel free to add some links for people to be able to follow them outside the site.',
    socials:[
      {title: 'twitter', href:'https://twitter.com/KendallJenner'},
      {title: 'youtube',href:'https://www.youtube.com/channel/UCnQnYo2NI4ozagGFCcsj9DQ'},
      {title: 'google',href:'https://www.google.com/kendalljenner/'}
    ]
  }
]

const OurTeam = () => {
  return (
    <section className="section section--our-team mt-24x">
      <h2 className="section__title">Here is Our Team</h2>
      <div className="section__card mt-21x">
          <OurTeamCard members={membersDetails}/>
      </div>
    </section>
  )
}

export default OurTeam
