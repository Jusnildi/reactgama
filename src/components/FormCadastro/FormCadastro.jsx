/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import DadosPessoais from './DadosPessoais';
import DadosEndereco from './DadosEndereco';
import CadastroConcluido from './CadastroConcluido';
import { Step, StepLabel, Stepper } from '@material-ui/core';



export default function FormCadastro(){

    const [etapaCadastro, setEtapaCadastro] = useState(0);
    const [cadastroColetado, setCadastroColetado] = useState({});
    const [arrayCadastros, setArrayCadastros] = useState(JSON.parse(localStorage.getItem("Cadastros")) || [])

    useEffect(() => {
        if(etapaCadastro === formsCadastro.length-1){
            setArrayCadastros([...arrayCadastros,cadastroColetado]);
        }
    }, [cadastroColetado]);

    useEffect(() => {
        if(etapaCadastro === formsCadastro.length-1){
            localStorage.setItem("Cadastros",JSON.stringify(arrayCadastros))
        }
    }, [arrayCadastros]);

    const formsCadastro = [
        <DadosPessoais saveCadastro={SaveCadastro}/>,
        <DadosEndereco saveCadastro={SaveCadastro}/>,
        <CadastroConcluido />
    ]

    function ProximaEtapa(){

        setEtapaCadastro(etapaCadastro+1);

    }

    function SaveCadastro(cadastroSalvar){

        setCadastroColetado({...cadastroColetado, ...cadastroSalvar})
        ProximaEtapa();

    }


    return(
        <>
        <Stepper activeStep={etapaCadastro}>
            <Step><StepLabel>Conta</StepLabel></Step>
            <Step><StepLabel>Endereço</StepLabel></Step>
            <Step><StepLabel>Final</StepLabel></Step>
        </Stepper>
        {formsCadastro[etapaCadastro]}
        </>
    );

}