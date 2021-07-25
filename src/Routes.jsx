import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FormCadastro from './components/FormCadastro/FormCadastro';
import Home from './components/Home/Home.jsx';
import PagCadastros from './components/PagCadastros/PagCadastros';
import Cabecalho from './components/Cabecalho/Cabecalho';
import FormProdutos from './components/FormProdutos/FormProdutos';
import * as S from './style.js'
import Login from './components/Home/Login';
import CadastroProduto from './components/FormProdutos/CadastroProduto';
import GerenciarProdutos from './components/FormProdutos/GerenciarProdutos';


function Routes() {

  const [loginState, setLoginState] = useState(false);


    useEffect(() => {
      console.log("Aeeee");
      
    }, [loginState]);

    return (
      <>
    <Router>
        <Cabecalho estaLogado={EstaLogado} />
        <S.divMain>
        <Switch>
          <Route exact path='/'>
            <Home estaLogado={loginState} />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/Cadastrar'>
            <FormCadastro />
          </Route>
          <Route path='/ListaCadastros'>
            <PagCadastros />
          </Route>
          <Route path='/FormProdutos'>
            <FormProdutos />
          </Route>
          <Route path='/CadastroProduto'>
            <CadastroProduto />
          </Route>
          <Route path='/MeusProdutos'>
            <GerenciarProdutos />
          </Route>
        </Switch> 
        </S.divMain>
    </Router>
    
    </>
    )
    function EstaLogado(status){
      console.log("Está?"+status);
      setLoginState(status);
    }
    
}

export default Routes
