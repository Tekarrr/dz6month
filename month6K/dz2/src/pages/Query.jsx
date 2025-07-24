import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
    console.log('🔄 fetchPosts вызывается');

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Ошибка при загрузке данных');
  const data = res.json()
  console.log(data);
  
  return data;
};

function Query() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  return (
    <div>
      <h1>Посты:</h1>
      <button onClick={() => refetch()}>🔄 Обновить</button>

      {isLoading && <p>Загрузка...</p>}
      {isError && <p>Ошибка: {error.message}</p>}

      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Query;
