import React from 'react';
import {Link} from 'react-router-dom';
import {StyledFlex, StyledHeader} from './styled/';

function Header() {
    return (
        <StyledHeader>
            <StyledFlex justifyContent={'space-between'}>
                <Link to={`/`}><b>JukeBox!</b></Link>
                <Link to={`/favorites`}>Track Favorites</Link>
            </StyledFlex>
        </StyledHeader>
    );
}

export default Header;
