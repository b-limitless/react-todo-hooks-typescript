import React from 'react';
import { Button, Container } from './Elements';

const Header : React.FC = ():JSX.Element => {
    return (<Container>
        <Button><a href = "/#/dynamic_data">Dynamic</a></Button>
        <Button><a href = "/#/graphs">Graph</a></Button>
    </Container>)
};

export default Header;