import React from 'react'
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
        <h2>Which page you want to view?</h2>
        <div style={{display: 'flex', gap: 10}}>
            <Link to={"/redux"}><button>Redux Toolkit</button></Link>
            <Link to={"/zustand"}><button>Zustand</button></Link>
            <Link to={"/query"}><button>Query</button></Link>
        </div>
    </div>
  )
}

export default MainPage