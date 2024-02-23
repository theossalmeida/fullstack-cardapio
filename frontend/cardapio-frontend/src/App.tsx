import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card.tsx';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal.tsx';


function App() {
  const { data } = useFoodData();
  const [ isModalOpen, setIsModalOpen ]= useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
  
  return (
      <div className="container">
        <h1>Cardápio</h1>
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

export default App
