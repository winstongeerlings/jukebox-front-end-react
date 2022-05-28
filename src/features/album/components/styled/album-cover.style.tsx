import styled from 'styled-components';

interface Props {
    img: string | null;
    width: string;
}

export const StyledAlbumCover = styled.div`
  background-image: url(${(props: Props) => props.img ? props.img : '/placeholder/album.png'});
  background-size: cover;
  background-position: center;
  width: ${(props: Props) => props.width};
  padding: 20px;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;