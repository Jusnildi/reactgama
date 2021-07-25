import React,{useState} from 'react'

function PagCadastros() {

    const [listaCadastros] = useState(JSON.parse(localStorage.getItem("Cadastros")) || []);

    return (
        <>
            <ul>
                {listaCadastros.map((item,index) => (
                    <li key={index}>
                        Nome: {item.nome} <br /> 
                        Email: {item.email} <br />
                        Endereço: {item.rua}, {item.numero} {item.cidade}-{item.uf}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default PagCadastros
