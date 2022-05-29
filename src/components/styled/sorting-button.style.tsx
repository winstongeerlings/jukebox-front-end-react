import styled from 'styled-components';

interface Props {
    isActive?: boolean;
    sortBy?: string;
}

export const StyledSortingButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-weight: ${(props: Props) => props.isActive ? 'bold': 'default'};
  color: ${(props: Props) => props.isActive ? ({theme}) => theme.colors.secondary: 'black'};
  
  img{
    transform: rotate(${(props: Props) => props.sortBy === 'ASC' ? '0deg': '180deg'});
    margin-left: 5px;
  }
`;