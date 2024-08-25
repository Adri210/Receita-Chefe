import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { db } from '../Adicionar/firebaseconection'; // Ajuste o caminho conforme necessário
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import chefData from './../../chef.json'; // Importar dados do chef.json
import './receitas.css';

function Receitas() {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);
  const navigate = useNavigate(); // Navegar após exclusão

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'receitas'));
        const firestoreReceitas = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const receitaFirestore = firestoreReceitas.find((r) => r.id === id);
        const receitaLocal = chefData.find((r) => r.id === Number(id));

        if (receitaFirestore) {
          setReceita(receitaFirestore);
        } else if (receitaLocal) {
          setReceita(receitaLocal);
        } else {
          setReceita(null);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setReceita(null);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      // Excluir do Firestore
      await deleteDoc(doc(db, 'receitas', id));
      alert('Receita excluída com sucesso!');
      navigate('/'); // Redirecionar após exclusão
    } catch (error) {
      console.error('Erro ao excluir receita:', error);
    }
  };

  if (!receita) {
    return <div>Receita não encontrada</div>;
  }

  // Assegure-se de que ingredientes é um array
  const ingredientes = Array.isArray(receita.ingredientes) ? receita.ingredientes : [];

  return (
    <div>
      <div className="container">
        <h1>{receita.titulo}</h1>
        <h2>Ingredientes:</h2>
        <ul>
          {ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
        <h2>Modo de Preparo:</h2>
        <p>{receita.modoPreparo}</p>
        <div className='delete-button'>
        <Link to={'/'} className='link-home'>Voltar menu</Link>
        <button onClick={handleDelete}>Excluir Receita</button>
        </div>
      </div>
    </div>
  );
}

export default Receitas;
