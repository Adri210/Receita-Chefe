import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { db } from '../Adicionar/firebaseconection'; // Ajuste o caminho conforme necessário
import { collection, addDoc } from 'firebase/firestore';
import './newreceita.css';

function AdicionarReceita() {
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');
  const navigate = useNavigate(); 

  const adicionarReceita = async () => {
    try {
     
      const ingredientesArray = ingredientes.split(',').map((ingrediente) => ingrediente.trim());

      await addDoc(collection(db, 'receitas'), {
        titulo: titulo,
        ingredientes: ingredientesArray, 
      });

      alert('Receita adicionada com sucesso!');
      setTitulo('');
      setIngredientes('');
      setModoPreparo('');
      navigate('/');
    } catch (error) {
      console.error('Erro ao adicionar receita:', error);
    }
  };

  return (
    <div className="add-recipe-container">
  <h1>Adicionar Receita</h1>
  <input
    type="text"
    placeholder="Título"
    value={titulo}
    onChange={(e) => setTitulo(e.target.value)}
    className="input-field"
  />
  <textarea
    placeholder="Ingredientes (separados por vírgula)"
    value={ingredientes}
    onChange={(e) => setIngredientes(e.target.value)}
    className="textarea-field"
  />
  <textarea
    placeholder="Modo de Preparo"
    value={modoPreparo}
    onChange={(e) => setModoPreparo(e.target.value)}
    className="textarea-field"
  />
  <button onClick={adicionarReceita} className="submit-button">Adicionar Receita</button>
</div>

  );
}

export default AdicionarReceita;
