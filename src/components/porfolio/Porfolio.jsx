import React from 'react';
import { Modal } from '../modal';
import { Gallery } from '../gallery';
import { photos } from '../photos';
import { useState } from 'react';
import styled from 'styled-components';

export const Porfolio = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [findId, setFindId] = useState();
	const onClick = (event) => {
		setIsOpenModal(true);

		setFindId(event.target.id);
	};
	const closeModal = () => {
		setIsOpenModal(false);
	};
	return (
		<div>
			<Container>
				<Gallery photos={photos} onClick={onClick} />
				{isOpenModal ? <Modal findId={findId} closeModal={closeModal} /> : null}
			</Container>
		</div>
	);
};
const Container = styled.div`
	display: flex;
`;
