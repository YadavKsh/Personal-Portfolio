import { useState } from 'react';
import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, type, feedback }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.text();
      alert('Feedback submitted successfully!');
      // Optionally, redirect or clear form
      console.log(result);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback.');
    }
  };

    const handleRedirect = () => {
    navigate('/'); // Programmatically navigate to the home page
    };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder='Enter your name'
          className={styles.input} 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
        />

        <label htmlFor="email" className={styles.label}>Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder='Enter you EMail'
          className={styles.input} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        
        <label htmlFor="type" className={styles.label}>Type:</label>
        <input 
          type="text" 
          id="type" 
          name="type" 
          placeholder='Enter your type (Suggestion, Query or Appreciation)'
          className={styles.input} 
          value={type}
          onChange={(e) => setType(e.target.value)}
          required 
        />
        
        <label htmlFor="message" className={styles.label}>Message:</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder='Enter your message'
          className={styles.textarea} 
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required 
        ></textarea>
        
        <button type="submit" className={styles.button}>Send</button>
        <button type="button" className={styles.button} onClick={handleRedirect}>Redirect</button>
      </form>
    </div>
  );
};

export default Form;