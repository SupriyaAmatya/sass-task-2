import React from 'react'
import Button from '../buttons/Button'
import { FaPlay } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="container container--hero">
      <div className="hero">
        <h1 className="hero__title">Write the best title for your page.</h1>
        <p className="hero__body body1 text-normal mt-3x">
          Every landing page needs a small description
          after the big bold title, that's why we added this
          text here. Add here all the information that can
          make you or your product create the first
          impression.
					</p>
        <Button
          onClick={() => console.log('btn clicked')}
          buttonStyle="btn--error"
          buttonSize="btn--large"
          type="button"
        > <FaPlay style={{ position: 'relative', marginRight: '5px', top: '2px' }} />
        Watch Video
      </Button>
      </div>
    </div>

  )
}

export default Hero
