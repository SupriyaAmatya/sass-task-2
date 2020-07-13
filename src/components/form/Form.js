import React from 'react'
import Button from '../buttons/Button'

const Form = () => {
	return (
		<form className="contact-form" id="form">
			<div className="contact-form__user-info">
				<div className="contact-form__group">
					<input type="text" name="name" required />
					<label className="label" htmlFor="name">Your Name</label>
				</div>
				<div className="contact-form__group">
					<input type="email" name="email" required />
					<label className="label" htmlFor="email">Your Email</label>
				</div>
			</div>
			<div className="contact-form__group">
				<textarea name="message" required ></textarea>
				<label className="label" htmlFor="message">Your Message</label>
			</div>
			<div className="contact-form__btn">
				<Button
					onClick={() => console.log('btn clicked')}
					buttonStyle="btn--primary"
					buttonSize="btn--regular"
					type="submit"
				> Send message </Button>
			</div>
		</form>
	)
}

export default Form
