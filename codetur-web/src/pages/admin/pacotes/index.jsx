import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import {Container} from 'react-bootstrap';

const Pacotes = () => {
    return (
        <div>
            <Menu />
            <Container className='form-height'>
                <h1>Pacotes</h1>
            </ Container>
            <Rodape />
        </div>
    )
}

export default Pacotes;