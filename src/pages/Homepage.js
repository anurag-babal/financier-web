import React from 'react'
import '../css/Homepage.css'
import Header from '../components/Header'
import Overview from '../components/Overview';
import Expenses from '../components/Expenses';
import { Link } from 'react-router-dom';

function Homepage() {
  const data = [
    { label: 'Jan', value: 9000 },
    { label: 'Feb', value: 9500 },
    { label: 'Mar', value: 13000 },
    { label: 'Apr', value: 11000 },
    { label: 'May', value: 7000 },
    { label: 'Jun', value: 5000 },
    { label: 'Jul', value: 4500 },
    { label: 'Aug', value: 8000 },
    { label: 'Sep', value: 9500 },
    { label: 'Oct', value: 10000 },
    { label: 'Nov', value: 12000 },
    { label: 'Dec', value: 14000 }
  ];
  return (
    <>
      <Header></Header>
      <div className='home'>
        <div className='overview'>
          <Overview data={data}></Overview>
        </div>
        <div className='add-btn'>
          <Link to='/add-expense'>
            <button className='add-exp-btn'>+ Add Expense</button>
          </Link>
        </div>
        <div className='recent-transactions'>
          <Expenses></Expenses>
        </div>
      </div>
    </>
  )
}

export default Homepage