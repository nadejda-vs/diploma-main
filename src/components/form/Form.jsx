import styled from 'styled-components';
import { CalendarDay } from '../calendar';
import { Button } from '../button';
import { PopUp } from '../popUp';
import { useState } from 'react';

// import ReactDOM from 'react-dom';
export const Form = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const onClick = (event) => {
		setIsOpenModal(true);
	};
	const closeModal = () => {
		setIsOpenModal(false);
	};
	return (
		<div>
			<Container>
				{isOpenModal ? <PopUp closeModal={closeModal} /> : null}
				<h6>Оставьте заявку и мы Вам перезвоним</h6>
				<Block>Выберите дату планируемого мероприятия</Block>
				<CalendarDay />
				<Block>Введите Ваше имя:</Block>
				<input type="text" name="name" size="20" />
				<Block>Введите Ваш телефон:</Block>
				<input type="tel" name="tel" size="20" />
				<br></br>
				<Button onClick={onClick} text={'Оставить заявку'}></Button>
			</Container>
		</div>
	);
};
const Container = styled.div`
	font-family: 'Poppins', sans-serif;
	line-height: 1.3;
	font-size: 32px;

	margin: 25px auto 0px auto;
	justify-content: flex-start;
	text-align: center;
	width: 400px;
	height: 500px;
	border-radius: 5%;
	border: 2px solid;
`;

const Block = styled.div`
	font-size: 24px;
`;
