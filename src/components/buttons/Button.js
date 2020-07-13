import React from 'react'

const STYLES = [
	"btn--primary",
	"btn--error"
]
const SIZES = [
	"btn--regular",
	"btn--large"
]

const Button = (props) => {
	const {children, onClick, buttonStyle, buttonSize,type } = props

	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<button type={type} onClick={onClick} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
			{children}
		</button>
	)
}

export default Button
