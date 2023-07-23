import React from 'react'
import FactorialCalculator from '../components/FactorialCalculator'

const CalculadoraFactorial = () => {
  return (
    <div className='row px-0 gap-0 mb-5 pb-5 h-100'>
      <h1 className='mt-4 mb-5'>Factorial</h1>
      <FactorialCalculator/>
      <FactorialCalculator withSelectOptions={true}/>
    </div>
  )
}

export default CalculadoraFactorial