import React, { useEffect } from 'react'
import { useStore } from '../store/zustand'
import CardBody from '../components/Card';

function Zustand() {

    const { posts, isLoading, error, fetchData} = useStore()

    useEffect(() => {
        fetchData(); 
    }, [fetchData]);

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
        <h2>Zustand</h2>
        <button onClick={fetchData}>Обновить</button>
        <div style={{display: 'flex', flexWrap: "wrap", gap: 20}}>
            {
                posts.map( post => (
                    <CardBody key={post.id} body={post.body} title={post.title}/>
                ))
            }
        </div>
    </div>
  )
}

export default Zustand