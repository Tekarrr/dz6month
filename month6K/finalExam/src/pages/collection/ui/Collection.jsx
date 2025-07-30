import CardComp from "../../../shared/ui/Card";
import { useCollectionStore } from "../model/useCollection";

const Collection = () => {
  const { collection } = useCollectionStore();
  console.log(collection);

  return (
    <div>
      <h2>Collection</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {collection.map((pokemon) => (
          <CardComp
            key={pokemon.title}
            title={pokemon.title}
            img={pokemon.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
