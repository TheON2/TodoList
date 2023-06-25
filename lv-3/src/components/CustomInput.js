import React, { useState } from 'react';

const CustomInput = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    // 숫자만 입력받도록 하고, 콤마를 추가합니다.
    const value = e.target.value.replace(/[^0-9]/g, '');
    const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setPrice(formattedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 콤마가 없는 가격을 출력합니다.
    const unformattedPrice = price.replace(/,/g , '');
    alert(`name: ${name}, price: ${unformattedPrice}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
      <input type="text" value={price} onChange={handlePriceChange} placeholder="Price" />
      <button type="submit">저장</button>
    </form>
  );
};

export default CustomInput;
