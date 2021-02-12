import React from 'react';
import './index.css';

//components
import Rodape from '../../../components/rodape';
import Menu from '../../../components/menu';

//libs
import {useFormik} from 'formik';
import {useHistory} from 'react-router-dom';
import {Container, Form, Button} from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';

//services
import ContaServico from '../../../services/contaServico';

const Login = () => {

    //const [email, setEmail] = useState('');
    //const [senha, setSenha] = useState('');

   const history = useHistory();
   const { addToast } = useToasts();
   const formik = useFormik({
       initialValues :{
           email : '',
           senha : ''
       },
       onSubmit : (values, { setSubmitting }) => {
           ContaServico
               .logar(values)
               .then(resultado => {
                console.log(`Resultado ${resultado.data}`)
                setSubmitting(false)
                   if(resultado.sucesso){
                       //apresenta notificação
                       addToast(resultado.data.mensagem, {
                           appearance: 'success',
                           autoDismiss: true,})
                       //salva token localstorage
                       localStorage.setItem('token-codetur', resultado.data.token);
                       //redireciona pagina admin
                       history.push('/admin');
                   } else {
                       addToast(resultado.data.mensagem, {
                           appearance: 'error',
                           autoDismiss: true,
                       })
                   }
               })
               .catch(erro => {
                   console.error('erro na api ' + erro);
               })
       
       }
   })

   return (
       <div>
           <Menu />
           <Container className='form-height'>
               <Form className='form-signin' onSubmit={formik.handleSubmit}>
                   <h1>Login</h1>
                   <small>Informe os seus dados abaixo</small>
                       
                   <hr/>
                   <Form.Group >
                       <Form.Label>Email</Form.Label>
                       <Form.Control type="email" 
                                    name="email"
                                    placeholder="Informe o email" 
                                    value={formik.values.email} 
                                    onChange={formik.handleChange} 
                                    required />
                   </Form.Group>

                   <Form.Group>
                       <Form.Label>Senha</Form.Label>
                       <Form.Control type="password" 
                                    name="senha"
                                    placeholder="Senha"   
                                    value={formik.values.senha}
                                    onChange={formik.handleChange}
                                    required/>
                   </Form.Group>
                   <Button variant="primary" type="submit">Enviar</Button>
                   <br/><br/>
                   <a href='/resetar-senha' style={{ marginTop :'30px'}}>Esqueci a senha!</a>
               </Form>
           </Container>
           <Rodape />
       </div>
   )

}

export default Login;