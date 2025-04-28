import React, { useState } from 'react'
import { isCartOpen } from '../store/cartStore';
import { counter } from '../store/counter';
import { useStore } from '@nanostores/react';

const ReactCard = () => {
  const [data, setData] = useState('');
  const $isCartOpen = useStore(isCartOpen);
  const $counter = useStore(counter);

  const dataInput = (e) => {
    setData(e.target.value)
  }

  return (
    <div>
      <div className='flex flex-row space-x-10'>
        <button className='bg-green-500 px-2 py-1 rounded-md' onClick={() => isCartOpen.set(!$isCartOpen)}>Cart</button>
        <button className='bg-gray-500 px-2 py-1 rounded-md text-white' onClick={() => counter.set($counter + 1)}>Increment</button>
      </div>

      <p>Clicked {$counter} {$counter === 1 ? 'time' : 'times'}</p>
      <input type="text" onChange={dataInput} />
      {$isCartOpen && <p>Cart is Open</p>}
    </div>
  )
}

export default ReactCard