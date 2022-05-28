import styled from 'styled-components';

interface Props {
    columns: number;
}

export const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props: Props) => props.columns}, 1fr);
    gap: 10px;
    padding: 10px;

  @media (min-width: 768px){
    grid-template-columns: repeat(${(props: Props) => props.columns * 2}, 1fr);
  }
`;