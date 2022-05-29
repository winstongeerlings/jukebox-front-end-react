import styled from 'styled-components';

interface Props {
    justifyContent?: string;
    alignItems?: string;
}

export const StyledFlex = styled.div`
    display: flex;
    justify-content: ${(props: Props) => props.justifyContent};
    align-items: ${(props: Props) => props.alignItems};;
    padding: 10px;
`;