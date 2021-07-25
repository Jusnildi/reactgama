import React,{useState} from 'react';
import * as S from './styled.js'
import {Link} from 'react-router-dom';


function FormProdutos() {



    return (
        <>            
        <h2>O que você gostaria de fazer?</h2>
            <Link to='/CadastroProduto'>
                <S.buttonMenu>Cadastrar novo produto</S.buttonMenu>
            </Link>
            <Link to='/MeusProdutos'>
                <S.buttonMenu>Gerenciar meus produtos</S.buttonMenu>
            </Link>
        </>
    )



}

export default FormProdutos
