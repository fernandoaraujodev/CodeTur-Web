import React from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import {Container, Form, Button} from 'react-bootstrap';
import './index.css';

 const ResetarSenha = () => {

    return (
        <div>
            <Menu />
            <Container className='form-height'>
                <Form className='form-signin'>
                    <h1>Esqueci minha senha</h1>
                    <small>Informe os dados Abaixo</small>
                        
                    <hr/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    <br/><br/>
                    <a href='/' style={{ marginTop :'30px'}}>Logar no sistema</a>
                </Form>
            </Container>
            <Rodape />
        </div>
    )

}

export default ResetarSenha;