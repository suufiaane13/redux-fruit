import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFruit, viderFruit } from './Actions/actionsFruit';
import './App.css';
import ListFruits2 from './ListFruits2';

export default function App2() {
    const dispatch = useDispatch();
    const [nomFruit, setNomFruit] = useState('');

    return (
        <div className='container'>
            <h5>Composant App 2</h5>
            <label htmlFor='fruit'>
                <b>Fruit:</b>
            </label>
            <input
                onChange={(e) => setNomFruit(e.target.value)}
                id='fruit'
                value={nomFruit}
            />
            <button
                onClick={() => {
                    dispatch(addFruit(nomFruit));
                    setNomFruit('');
                }}
            >
                Ajouter
            </button>
            <ListFruits2 />
            <button onClick={() => dispatch(viderFruit())}>Vider la liste</button>
        </div>
    );
}
