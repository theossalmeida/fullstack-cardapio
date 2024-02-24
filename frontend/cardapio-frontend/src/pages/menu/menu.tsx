import { useState } from 'react';
import './menu.css';
import { Card } from '../../components/card/card.tsx';
import { useFoodData } from '../../hooks/useFoodData.ts';
import { CreateModal } from '../../components/create-modal/create-modal.tsx';
import React from "react";

function MenuPage() {
    const [searchText, setSearchText] = useState('');
    const { data } = useFoodData(searchText);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const numberOfItems = data ? data.length : 0;

    const styleGrid:React.CSSProperties = {
        gridTemplateColumns: `repeat(${Math.min(numberOfItems, 7)}, 1fr)`,
        display: 'grid',
        gap: '16px',
        marginTop: '10%',
        marginBottom: '20px',
      };

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev);
    }

    const handleSearchChange = (e: any) => {
        const searchText = e.target.value;
        setSearchText(searchText);
    };
    
    if (!searchText) {
        return (
            <div className='menu-container'>
                <div className='menu-header'><h1>Cardápio</h1></div>
                <div className="body-container">
                    <div className='search-box'>
                        <input 
                            name='searchText' 
                            className='search-field' 
                            value={searchText} 
                            onChange={handleSearchChange} // Atualiza o estado de pesquisa ao digitar
                            placeholder='Digite que para procurar'
                        />
                    </div>
                    <div style={styleGrid}>
                        {data?.map(FoodData => 
                            <Card 
                                key={FoodData.id} 
                                price={FoodData.price} 
                                image={FoodData.image} 
                                title={FoodData.title}
                            />
                        )}
                        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
                        <button onClick={handleOpenModal}>+</button>
                    </div>   
                </div>
            </div>
        );
    } else {
        return (
            <div className='menu-container'>
                <div className='menu-header'><h1>Cardápio</h1></div>
                <div className="body-container">
                    <div className='search-box'>
                        <input 
                            name='searchText' 
                            className='search-field' 
                            value={searchText} 
                            onChange={handleSearchChange} // Atualiza o estado de pesquisa ao digitar
                            placeholder='Digite que para procurar'
                        />
                    </div>
                    <div style={styleGrid}>
                        {data?.map(FoodData => 
                            <Card 
                                key={FoodData.id} 
                                price={FoodData.price} 
                                image={FoodData.image} 
                                title={FoodData.title}
                            />
                        )}
                    </div>   
                </div>
            </div>
        );
    }

    
}

export default MenuPage