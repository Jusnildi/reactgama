import React,{useState} from 'react';
import {TextField, Button} from "@material-ui/core";

function CadastroProduto() {

    const [nomeProduto, setNomeProduto] = useState('');
    const [qtdProduto, setQtdProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');
    const [descProduto, setDescProduto] = useState('');


    return (
        <>
            <TextField value={nomeProduto} label='Nome do Produto' variant='filled' fullWidth
            onChange={(event) => setNomeProduto(event.target.value)}
            />
            <TextField value={qtdProduto} label='Quantidade Disponível' variant='filled' fullWidth
            onChange={(event) => setQtdProduto(event.target.value)}
            />
            <TextField value={valorProduto} label='Valor de Venda' variant='filled' fullWidth
            onChange={(event) => setValorProduto(event.target.value)}
            />
            <TextField value={descProduto} label='Descrição' variant='filled' fullWidth
            onChange={(event) => setDescProduto(event.target.value)}
            />

            <Button type='submit' variant='contained' fullWidth
            >Cadastrar Produto</Button>
        </>
    )
}

export default CadastroProduto
