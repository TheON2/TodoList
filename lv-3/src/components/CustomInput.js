import React, { useState } from 'react';

const CustomInput = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setPrice(formattedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const unformattedPrice = price.replace(/,/g , '');
    alert(`name: ${name}, price: ${unformattedPrice}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>이름</label>
      <input type="text" value={name} onChange={handleNameChange}/>
      <label>가격</label>
      <input type="text" value={price} onChange={handlePriceChange}/>
      <button type="submit">저장</button>
    </form>
  );
};

export default CustomInput;
