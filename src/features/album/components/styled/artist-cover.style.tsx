import styled from 'styled-components';

interface Props {
    img: string | null;
    width: string;
}

export const StyledArtistCover = styled.div`
  background-image: url(${(props: Props) => props.img ? props.img : '/placeholder/artist.png'});
  background-size: cover;
  background-position: center;
  width: ${(props: Props) => props.width};
  aspect-ratio: 21 / 9;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column-reverse;
  box-shadow: inset 0px -60px 50px 0px rgba(0, 0, 0, 0.3);
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: white;
  }

  @media (min-width: 768px){
    aspect-ratio: 21 / 6;
  }
`;