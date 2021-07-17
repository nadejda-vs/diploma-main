import './button.css';

export const Button = ({ onClick, text, priority }) => {
	const className = priority === 'primary' ? 'button' : 'button second';
	return (
		<button className={className} onClick={onClick}>
			{text}
		</button>
	);
};
