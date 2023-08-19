import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 将数据发送到后端
    axios.post('/submitContact', formData)
      .then((response) => {
        // 处理返回结果（可选）
        console.log('Save Success:', response.data);
      })
      .catch((error) => {
        // 处理错误（可选）
        console.error('Save Failed:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='footer-input'
        name='name'
        type='name'
        placeholder='Name'
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className='footer-input'
        name='email'
        type='email'
        placeholder='Your Email'
        value={formData.email}
        onChange={handleChange}
      />
      <input
        className='footer-input'
        name='tel'
        type='tel'
        placeholder='Tel'
        value={formData.tel}
        onChange={handleChange}
      />
      <br />
      <input
        className='footer-input-mes'
        name='message'
        type='text'
        placeholder='Message'
        value={formData.message}
        onChange={handleChange}
      />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default ContactForm;
