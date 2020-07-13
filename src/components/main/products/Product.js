import React from 'react'
import Card from './Card';

const Product = () => {
  return (
    <section className="section section--product">
      <h2 className="section__title">Let’s talk product</h2>
      <p className="section__body body1 text-thin ml-auto mr-auto">
        This is the paragraph where you can write more
        details about your product. Keep you user
        engaged by providing meaningful information.
        Remember that by this time, the user is curious,
        otherwise he wouldn't scroll to get here. Add a
        button if you want the user to see more.
      </p>

      <div className="section__card">
        <div className="row">
          <div className="col col-4-lg ">
            <Card
              imgSrc="feature-1"
              title="First Feature"
              body="Divide details about your product or agency work into 
                parts. Write a few lines about each one. A paragraph 
                describing a feature will be enough."
            />
          </div>
          <div className="col col-4-lg">
          <Card
              imgSrc="feature-2"
              title="Second Feature"
              body="Divide details about your product or agency work into 
                parts. Write a few lines about each one. A paragraph 
                describing a feature will be enough."
            />
          </div>
          <div className="col col-4-lg">
          <Card
              imgSrc="feature-3"
              title="Third Feature"
              body="Divide details about your product or agency work into 
                parts. Write a few lines about each one. A paragraph 
                describing a feature will be enough."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
