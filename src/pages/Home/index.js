import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../Adicionar/firebaseconection'; // Ajuste o caminho conforme necessário
import { collection, onSnapshot } from 'firebase/firestore';
import chefData from './../../chef.json'; // Importar dados do chef.json
import './home.css';

function Home() {
  const [apiReceitas, setApiReceitas] = useState([]);
  const [firestoreReceitas, setFirestoreReceitas] = useState([]);
  const [allReceitas, setAllReceitas] = useState([]);

  // Buscar receitas do arquivo JSON
  useEffect(() => {
    // Verificar o conteúdo de chefData
    console.log('Dados do JSON:', chefData);

    // Definir apiReceitas com os dados do chef.json
    setApiReceitas(chefData);
  }, []);

  // Buscar receitas do Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'receitas'), (snapshot) => {
      const listaReceitas = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFirestoreReceitas(listaReceitas);
    });

    return () => unsubscribe();
  }, []);

  // Combinar receitas da API e do Firestore
  useEffect(() => {
    setAllReceitas([...apiReceitas, ...firestoreReceitas]);
  }, [apiReceitas, firestoreReceitas]);

  return (
    <div>
      <header className="header">
        <div className="header-text">
          <h1>Receitas</h1>
        </div>
      </header>

      <section className="grid">
        {allReceitas.map((receita) => (
          <div className="grid-item" key={receita.id}>
            <h3>
              <Link to={`/receitas/${receita.id}`}>
                {receita.titulo}
              </Link>
            </h3>
           
          </div>
        ))}
      </section>

        <div className='container-button'>
        <Link to="/AdicionarReceita" className="add-recipe-button">Adicionar Receita</Link>
        </div>
    
    </div>
  );
}

export default Home;
