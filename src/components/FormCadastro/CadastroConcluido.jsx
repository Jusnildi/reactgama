import React from 'react';
import {Button} from "@material-ui/core";
import {Link} from 'react-router-dom';

function CadastroConcluido() {
    return (
        <>
        <h1>Cadastro Concluído</h1>
          <Link to='/ListaCadastros'>
            <Button>
                Ver página de cadastros
            </Button>
          </Link>  
        </>
    )
}

export default CadastroConcluido
