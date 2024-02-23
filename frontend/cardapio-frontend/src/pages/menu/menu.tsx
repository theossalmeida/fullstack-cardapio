import { useState } from 'react';
import './menu.css'
import { Card } from '../../components/card/card.tsx';
import { useFoodData } from '../../hooks/useFoodData.ts';
import { CreateModal } from '../../components/create-modal/create-modal.tsx';


function MenuPage() {
  const { data } = useFoodData();
  const [ isModalOpen, setIsModalOpen ]= useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
  
  return (
      <div className="container">
        <div className='menu-header'><h1>Cardápio</h1></div>
        <div className='card-grid'>
          {data?.map(FoodData => 
            <Card 
              price={FoodData.price} 
              image={FoodData.image} 
              title={FoodData.title}
            />
          )}
          {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
          <button onClick={handleOpenModal}>novo</button>
        </div>   
      </div>
  )
}

export default MenuPage