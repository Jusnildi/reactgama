import React,{useState} from 'react'
import {Button, TextField} from "@material-ui/core";

function DadosEndereco({saveCadastro}) {

    const [rua, setRua] = useState("");
    const [cep, setCEP] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUF] = useState("");
    const [numero, setNumero] = useState("");

    return (
        <form 
        onSubmit={(event) => {
            event.preventDefault();
            saveCadastro({cep, rua, numero, cidade, uf});}}
        >
            <h2>Cadastro de Endereço</h2>
            <TextField label='CEP' variant='filled' fullWidth
            onChange={(event) => setCEP(event.target.value)}
            />

            <TextField label='Rua' variant='filled' fullWidth
            onChange={(event) => setRua(event.target.value)}
            />

            <TextField label='Número' variant='filled' fullWidth
            onChange={(event) => setNumero(event.target.value)}
            />

            <TextField label='Cidade' variant='filled' fullWidth
            onChange={(event) => setCidade(event.target.value)}
            />

            <TextField label='Estado' variant='filled' fullWidth
            onChange={(event) => setUF(event.target.value)}
            />

            <Button type='submit' variant='contained' fullWidth
            >Continuar</Button>

        </form>
    )
}

export default DadosEndereco

