import styled from 'styled-components';

export const Gallery = ({ photos, onClick,  }) => {
	return (
		<Container>
			{photos.map((item) => {
				return <Image onClick={onClick} src={item.src} id={item.id} />;
			})}
		</Container>
	);
};
const Container = styled.div`
	background-color: black;
	display: flex;
	flex-flow: wrap;
	justify-content: center;
`;

const Image = styled.img`
	height: 200px;
`;
