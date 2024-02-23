import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();










// function Page(){
//    return (
//     <div>
//     <Header /> 
//     <MainContent />
//     <Footer />
//    </div>
//    );
// }




// Doing Same thing with Function //

const page = (
  <div>
    <header>
      <nav className='nav'>
    <img src='/logo192.png' alt='React Logo' width='40px' height='40px'></img>
        
      </nav>
    </header>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013 </li>
      <li>Was originally created by Jordan Walke </li>
      <li>He Well over 100k stars on GitHub </li>
      <li>Is maintained by Facebook </li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    <footer>
    <small> © 2024 Samagra development. All rights reserved. </small>
    </footer>
   </div>
)