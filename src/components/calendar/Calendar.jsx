import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import MomentLocaleUtils, {
	formatDate,
	parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/it';

export const CalendarDay = () => {
	const [startDate, setStartDate] = useState(new Date());
	const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
		<button className="example-custom-input" onClick={onClick} ref={ref}>
			{value}
		</button>
	));
	return (
		<DatePicker
			selected={startDate}
			onChange={(date) => setStartDate(date)}
			customInput={<Input />}
		/>
	);
};
const Container = styled.div`
	color: #252525;
	line-height: 1.3;
`;
const Input = styled.input`
	width: 154px;
	text-align: center;
	font-size: 16px;
	position: sticky;
`;
