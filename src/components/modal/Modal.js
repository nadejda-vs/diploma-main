import styled from 'styled-components';

import ImageSlider from '../slider/ImageSlider';
import { photos } from '../photos';
export const Modal = ({ closeModal, findId }) => {
	return (
		<Background onClick={closeModal}>
			<Container onClick={(event) => event.stopPropagation()}>
				<ImageSlider slides={photos} findId={findId} />
			</Container>
		</Background>
	);
};
const Background = styled.div`
	position: fixed;

	width: 100%;
	background: #000000cc;
	top: 0;
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	width: 60%;
	height: 100%;
`;
