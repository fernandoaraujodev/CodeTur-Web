import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import {Container} from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div>
            <Menu />
            <Container className='form-height'>
                <h1>DashBoard</h1>
            </ Container>
            <Rodape />
        </div>
    )
}

export default Dashboard;