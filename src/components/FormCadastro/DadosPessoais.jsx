import React,{useState} from 'react';
import {Button, TextField, Switch} from "@material-ui/core";

export default function DadosPessoais({saveCadastro}){

    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [novidades, setNovidades] = useState(true);
    const [senha, setSenha] = useState("");
    const [checkSenha, setCheckSenha] = useState("");


    return(
        <form
        onSubmit={(event)=>{
            event.preventDefault();
           saveCadastro({nome, email, senha, novidades});
        }}
        >
            <h2>Crie sua conta</h2>
            <TextField value={nome} label='Nome' variant='filled' fullWidth
            onChange={(event) => setNome(event.target.value)}
            />

            <TextField value={email} label='Email' variant='filled' fullWidth
            onChange={(event) => setEmail(event.target.value)}
            />

            <TextField value={senha} label='Senha' variant='filled' fullWidth
            onChange={(event) => setSenha(event.target.value)}
            />

            <TextField value={checkSenha} label='Confirmar Senha' variant='filled' fullWidth
            onChange={(event) => setCheckSenha(event.target.value)}
            />

            
            <Switch checked={novidades} color='default'
            onChange={(event) => setNovidades(event.target.checked)}
            ></Switch>
            <label>Receber notificações via e-mail</label>

            <Button type='submit' variant='contained' fullWidth
            >Cadastrar</Button>



        </form>

        
    );


}