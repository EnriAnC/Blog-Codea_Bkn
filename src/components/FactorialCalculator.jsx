import React, { useState } from 'react'

const FactorialCalculator = ({withSelectOptions}) => {
    const [inputValue, setInputValue] = useState('')
    const [resultado, setResultado] = useState('')

    const SelectOptions = () => {
        const options = [];
        for (let i = 1; i <= 30; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };

    const obtenerFactorial = () => {

        let resultado = 1
        for (let i = 2; i <= inputValue; i++) {
        resultado = resultado * i
        }
        setResultado(resultado)
    }

    return (
        <div className="card shadow-lg m-auto col-12 col-sm-5 justify-content-around" style={{minHeight:"200px"}}>
            {
                withSelectOptions 
                ?   <select className='form-select' onChange={(e) => setInputValue(e.target.value)}>
                        {SelectOptions()}
                    </select> 
                :   <input 
                        type="text" 
                        className='form-control' 
                        placeholder='ingrese número'
                        onChange={(e)=>setInputValue(e.target.value)}
                    />
            }
            <button className='btn btn-dark' onClick={obtenerFactorial}>
            Obtener factorial
            </button>
            <p className='shadow p-3'>Resultado: <span>{resultado}</span></p>
        </div>
    )
}

export default FactorialCalculator