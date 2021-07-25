/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { TextField} from "@material-ui/core";
import * as S from './styled.js';


function Cabecalho({estaLogado}) {

    const [emailLogin, setEmailLogin] = useState('');
    const [senhaLogin, setSenhaLogin] = useState('');
    const [listaCadastros] = useState(JSON.parse(localStorage.getItem("Cadastros")) || []);
    const [statusLogin, setStatusLogin] = useState(0);
    const [realizarLogin, setRealizarLogin] = useState([]);
    const [insertSenha, setInsertSenha] = useState('vazio');
    const [pagina, setPagina] = useState(0);
    const [nomeUsuario, setNomeUsuario] = useState('');

    const history = useHistory();


    useEffect(() => {
        switch(statusLogin){
            case 1:
                console.log("Logando");
                break;
            case 2:
                console.log('Logado');
                estaLogado(true);
                setPagina(1);
                history.push('/login');
                break;
            default:
                setRealizarLogin([]);
                setInsertSenha('vazio');
                break;
        }
    }, [statusLogin]);

    useEffect(() => {

        if(statusLogin === 1){
            if(realizarLogin.length > 0){
                realizarLogin.map((item) => setInsertSenha(item.senha));
                realizarLogin.map((item) => setNomeUsuario(item.nome));
                console.log(realizarLogin);
                setStatusLogin(0);
            }else{
                alert("Email e/ou senha incorreto(s");
                setStatusLogin(0);
            }
        }

        
    }, [realizarLogin]);


    useEffect(() => {
        
        if(insertSenha.length === 0 ){
            console.log("porra");
        }else{
        switch(insertSenha){
            case senhaLogin:
                console.log('logado');
                setStatusLogin(2);
                break;
            case 'vazio':
                console.log('putz');
                break;
            default:
                alert('Email e/ou senha incorreto(s)');
                setNomeUsuario('');
                setStatusLogin(0);
                break;
        }
    }
    }, [insertSenha]);

    const pagCabecalho = [
        <>
            <Link to="/Cadastrar">
                <S.btCabecalho>Cadastrar</S.btCabecalho>
            </Link>

            <S.btCabecalho onClick={Logar}>Login</S.btCabecalho>

            <TextField label='Senha' variant='outlined' size='small' onChange={
                (event) => setSenhaLogin(event.target.value)
                }>
            </TextField>
            <TextField label='Email' variant='outlined' size='small'onChange={
                (event) => setEmailLogin(event.target.value)
                }>
            </TextField>
        </>
        ,
        <>
                <p>Olá {nomeUsuario}</p>
                </>
    ]

    return (
        <S.divCabecalhoMain>
        <S.divCabecalho>
            <Link to='/'>
                <S.btCabecalho>
                    Home
                </S.btCabecalho>
            </Link>
            </S.divCabecalho>
            <S.divButtonsCabecalho>
            
            {pagCabecalho[pagina]}

            </S.divButtonsCabecalho>
            </S.divCabecalhoMain>
            
        
    )

    function Logar(){

        if(emailLogin.length > 0 && senhaLogin.length > 0){
        const usuario = listaCadastros.filter((login) => login.email === emailLogin)
        setStatusLogin(1);
        setRealizarLogin(usuario);
        console.log("logar");
        }else{
            alert('Email e/ou senha incorreto(s)');
        }
        

        }
    

}

export default Cabecalho
