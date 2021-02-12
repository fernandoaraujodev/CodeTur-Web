import React, { useEffect, useState } from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import {Form, Button, Table, Card, Container, Jumbotron, Spinner} from 'react-bootstrap';
import PacoteServico from '../../../services/pacoteServico';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import './index.css';
import { useToasts } from 'react-toast-notifications';

const Pacotes = () => {

    const [pacotes, setPacotes] = useState([]);
    const { addToast } = useToasts();
    const formik = useFormik({
        initialValues : {
            imagem : '',
            titulo : '',
            descricao : '',
            ativo : ''
        },
        onSubmit : values => {
            PacoteServico
                .cadastrar(values)
                .then(resultado => {
                    if(resultado.data.sucesso){
                        addToast(resultado.data.mensagem, {
                            appearance: 'success',
                            autoDismiss: true,
                        })
                        formik.resetForm();
                        listarPacotes();
                    } else {
                        addToast(resultado.data.mensagem, {
                            appearance: 'error',
                            autoDismiss: true,
                        })
                    }
                    formik.setSubmitting(false);
                })
        },
        validationSchema : Yup.object().shape({
            titulo: Yup.string()         
              .min(3, 'O Título deve ter no minimo 3 caracteres')
              .max(120, 'O Título deve ter no máximo 120 caracteres')
              .required('Campo Título Obrigatório'),
            descricao: Yup.string()
              .required('Campo Descrição Obrigatório'),
            imagem: Yup.string()
              .required('Campo Imagem Obrigatório'),
          })
    })
    const limparCampos = () => {
        formik.setValues({
            imagem : '',
            titulo : '',
            descricao : '',
            ativo : ''
        })
    }
    const listarPacotes = () => {
        PacoteServico
        .listar()
        .then(resultado => {
            setPacotes(resultado.data.data);
        })
    }
    useEffect(() => {
        listarPacotes();
    },[])

    return (
        <div>
            <Menu />
            <Container>
                {/* <Titulo titulo="Eventos" chamada="Gerencia as seus eventos" /> */}
                <Jumbotron>
                    <h1>Pacotes</h1>
                    <p>Gerencie os Pacotes da CodeTur</p>
                </Jumbotron>
                <Card>
                    <Card.Body>
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control type="text" value={formik.values.titulo} onChange={formik.handleChange} name="titulo" placeholder="Título do pacote"  />
                                {formik.errors.titulo  && formik.touched.titulo ? (<div className="error">{formik.errors.titulo}</div>) : null}
                            </Form.Group>
                                                        
                            <Form.Group>
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control as="textarea" rows={3} value={formik.values.descricao} onChange={formik.handleChange} name="descricao"  />
                                {formik.errors.descricao && formik.touched.descricao ? (<div className="error">{formik.errors.descricao}</div>) : null}
                            </Form.Group>
                            <Form.Group >
                                <Form.Check type="checkbox" label="Ativo" value={formik.values.ativo} onChange={formik.handleChange} name="ativo"  />
                            </Form.Group>
                            <Form.Group>
                                {/* <Form.File id="imagemPacote" label="Imagem do pacote" /> */}
                                <Form.Control type="text" value={formik.values.imagem} onChange={formik.handleChange} name="imagem" placeholder="Url da Imagem"  />
                                {formik.errors.imagem && formik.touched.imagem  ? (<div className="error">{formik.errors.imagem}</div>) : null}
                                {formik.values.imagem && <img src={formik.values.imagem} style={{ width : '450px'}} />}
                            </Form.Group>
                            <Button type="submit" disabled={formik.isSubmitting}> {formik.isSubmitting ? <Spinner animation="border" size="sm" /> : null} Salvar</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>Título</th>
                            <th>Descrição</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            pacotes.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td><img src={item.imagem} style={{ width : '120px'}}/></td>
                                        <td>{item.titulo}</td>
                                        <td>{item.descricao}</td>
                                        <td>{item.ativo ? 'Ativo' : 'Inativo'}</td>
                                        <td>
                                            <Button variant="warning" value={item.id}  >Editar</Button>
                                            <Button variant="danger" value={item.id}  style={{ marginLeft : '40px'}}>{item.ativo ? 'Desativar' : 'Ativar'}</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </ Container>
            <Rodape />
        </div>
    )
}

export default Pacotes;