import React from 'react';
import './index.css';

//Components
import Rodape from '../../../components/rodape';
import Menu from '../../../components/menu';

//libs
import {useFormik} from 'formik';
import {Container, Form, Button} from 'react-bootstrap';
import ResetarSenha from '../resetarsenha';

 const Login = () => {

    //implementando o Formik - yarn add formik
    //gerenciamento do formulario + valores
    const formik = useFormik({
        
        //todo formulario tem suas entradas
        initialValues: {
            email : '',
            senha : ''
        },//e suas ações
        onSubmit : values => {
            alert(values);
        }
    });

    return (
        <div>
            <Menu />
            <Container className='form-height'> /* */
                <Form className='form-signin' onSubmit={formik.handleSubmit} >
                    <h1>Login</h1>
                    <small>Informe os dados Abaixo</small>
                        
                    <hr/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha"   required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    <br/><br/>
                    <a href='/conta/resetar-senha' style={{ marginTop :'30px'}}>Esqueci a senha!</a>
                </Form>
            </Container>
            <Rodape />
        </div>
    )

}

export default Login;