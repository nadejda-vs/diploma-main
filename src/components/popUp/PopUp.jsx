import styled from 'styled-components';
export const PopUp = ({ closeModal }) => {
	return (
		<Background onClick={closeModal}>
			<Container onClick={(event) => event.stopPropagation()}>
				<div>
					Спасибо, что оставили заявку. В ближайшее время мы Вам перезвоним
				</div>
			</Container>
		</Background>
	);
};
const Background = styled.div`
	position: absolute;
	background: #bebebc;
	padding-top: 70px;
	opacity: 0.9;
	width: 400px;
	height: 485px;
	border-radius: 5%;
	z-index: 5;
`;

const Container = styled.div`
	/* width: 60%; */
	/* height: 100%; */
`;
