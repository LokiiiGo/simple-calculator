'use client';
import React, { useState } from 'react';

export default function Home() {
  const [numero1, setNumero1] = useState<string>('');
  const [numero2, setNumero2] = useState<string>('');
  const [resultado, setResultado] = useState<number>(0);

  const handleCalcular = (operador: string) => {
    // Permite que o usuário digite com vírgula, mas calcula com ponto
    const num1 = parseFloat(numero1.replace(',', '.'));
    const num2 = parseFloat(numero2.replace(',', '.'));

    if (isNaN(num1) || isNaN(num2)) {
      alert('Entrada Inválida: Por favor, digite números válidos em ambos os campos.');
      return;
    }

    let calculoFinal = 0;
    switch (operador) {
      case '+':
        calculoFinal = num1 + num2;
        break;
      case '-':
        calculoFinal = num1 - num2;
        break;
      case '*':
        calculoFinal = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          alert('Não é possível dividir por zero.');
          return;
        }
        calculoFinal = num1 / num2;
        break;
      default:
        break;
    }
    setResultado(calculoFinal);
  };
  return (
    <div className="p-4 flex flex-col min-h-screen items-center justify-center bg-gray-900 text-white">
  <h1 className="text-2xl md:text-3xl mt-5 font-bold">Simple Calculator</h1>
  
  <div className="border-t border-white w-full max-w-xs md:max-w-md mx-auto mb-6 mt-5"></div>

  <div className="w-full max-w-md p-6 md:p-10 bg-amber-400 border-amber-50 border-2 rounded-2xl text-xl md:text-2xl font-bold text-center">
    <span className="block mb-4">Operações Matemáticas</span>
    
    <div className="mt-6 text-left">
      <label htmlFor="numeroInput1" className="block mb-2">Número 1:</label>
      <input 
        type="number" 
        id="numeroUm" 
        className="w-full text-black border-black bg-white p-3 rounded-md focus:ring-2 focus:ring-black outline-none" 
        value={numero1} 
        onChange={(e) => setNumero1(e.target.value)} 
      />
    </div>

    <div className="mt-6 text-left">
      <label htmlFor="numeroInput2" className="block mb-2">Número 2:</label>
      <input 
        type="number" 
        id="numeroDois" 
        className="w-full text-black border-black bg-white p-3 rounded-md focus:ring-2 focus:ring-black outline-none" 
        value={numero2} 
        onChange={(e) => setNumero2(e.target.value)} 
      />
    </div>
  </div>

  <div className="mt-8 p-4 bg-amber-400 rounded-lg  border-amber-50 border-2 w-full max-w-md">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <button className="bg-white text-black py-4 rounded-md font-bold text-2xl hover:bg-gray-200 transition-colors" onClick={() => handleCalcular('+')}>+</button>
      <button className="bg-white text-black py-4 rounded-md font-bold text-2xl hover:bg-gray-200 transition-colors" onClick={() => handleCalcular('-')}>-</button>
      <button className="bg-white text-black py-4 rounded-md font-bold text-2xl hover:bg-gray-200 transition-colors" onClick={() => handleCalcular('*')}>*</button>
      <button className="bg-white text-black py-4 rounded-md font-bold text-2xl hover:bg-gray-200 transition-colors" onClick={() => handleCalcular('/')}>/</button>
    </div>
  </div>

  <div className="mt-8 p-6 bg-amber-400 rounded-lg font-bold text-2xl  border-amber-50 border-2 w-full max-w-md text-center">
    <p className="text-black">Resultado: <span className="underline">{resultado}</span></p>
  </div>

  <footer className="mt-10 text-white">&copy; {new Date().getFullYear()} Simple Calculator</footer>
</div>
  );
}
