import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/slice';
import CardBody from '../components/Card';

function Redux() {
  const dispatch = useDispatch();
  const { data: posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h2>Посты:</h2>
      <button onClick={() => dispatch(fetchPosts())}>Обновить</button>
      <div style={{display: 'flex', flexWrap: "wrap", gap: 20}}>
        {posts.map((post) => (
          <CardBody key={post.id} title={post.title} body={post.body}/>
        ))}
      </div>
    </div>
  );
}

export default Redux;
