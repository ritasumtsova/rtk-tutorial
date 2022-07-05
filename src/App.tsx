import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './app/features/cake/cakeSlice';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { totalCakes } = useSelector((state: any) => state.cakes);

  const buyCake = () => {
    if (1 > 0) {
      dispatch(ordered());
    } else {
      console.error('No cakes left :(')
    }
  };

  const refillCakes = () => {
    dispatch(restocked(5));
  };

  return (
    <div className="App">
     <h3>total cakes {totalCakes}</h3>
     <button onClick={buyCake}>buy cake</button>
     <button onClick={refillCakes}>refillCakes</button>
    </div>
  );
};

export default App;
