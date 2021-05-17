import React from 'react';
import { Button, Container } from './Elements';

const Header : React.FC = ():JSX.Element => {
    return (<Container>
        <Button><a href = "/#/dynamic_data">Home</a></Button>
        <Button><a href = "/#/statistics">Statistic</a></Button>
    </Container>)
};

export default Header;