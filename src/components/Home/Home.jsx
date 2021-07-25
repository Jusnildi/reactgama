import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import * as S from './styled.js'


function Home({estaLogado}) {

    const [loginState] = useState(estaLogado);
    const [pag, setPag] = useState(0);

    useEffect(() => {
        if(loginState === true){
            setPag(1);
        }else{
            setPag(0);
        }
    }, [loginState]);

    const paginas = [
        <>
        <h1>Seja bem vindo</h1>
        <Link to='/Cadastrar'>
        <S.buttonMenu>
            Cadastrar
        </S.buttonMenu>
        </Link>
        </>
        ,
        <>
        <Link to='/Cadastrar'>
        <S.buttonMenu>
            Logado
        </S.buttonMenu>
        </Link>
        </>
    ]

    return (
        <S.divContainer>
            

            {paginas[pag]}

            <Link to='/ListaCadastros'>
                <S.buttonMenu variant='contained' fullWidth>
                    Lista de Cadastros
                </S.buttonMenu>
            </Link>
            <Link to='/FormProdutos'>
                <S.buttonMenu variant='contained' fullWidth>
                    Meus Produtos
                </S.buttonMenu>
            </Link>

        </S.divContainer>
    )

}

export default Home
