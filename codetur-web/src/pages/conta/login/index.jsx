import React from 'react';
import './index.css';

//Components
import Rodape from '../../../components/rodape';
import Menu from '../../../components/menu';

//libs
import {useFormik} from 'formik';
import {Container, Form, Button} from 'react-bootstrap';

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
            alert(JSON.stringify(values));
        }
    });

    return (
        <div>
            <Menu />
            <Container className='form-height'> {/* quando houver uma ação SUBMIT pegar dados do formik */}
                <Form className='form-signin' onSubmit={formik.handleSubmit} >
                    <h1>Login</h1>
                    <small>Informe os dados Abaixo</small>
                        
                    <hr/>
                    <Form.Group>
                        <Form.Label>Email </Form.Label>
                        <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Informe o email" 
                        value={formik.values.email} 
                        onChange={formik.handleChange}
                        required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Senha</Form.Label>
                        <Form.Control 
                        type="password" 
                        name="senha"
                        placeholder="Senha" 
                        value={formik.values.senha} 
                        onChange={formik.handleChange}
                        required/>
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