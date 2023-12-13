import Axios from "axios";
import PokeCard from "../Components/PokeCard";

export default function Home() {
  let endpoint = "https://pokeapi.co/api/v2/pokemon/";
  const [endUpdate, setEndUpdate] = useState("")


  function getPokemon(){ Axios.get(endpoint + {endUpdate}).then((res) => {
        
  });
}
  return (
    <div className="bg-slate-800 flex flex-col items-center justify-center gap-4">
      <h1 className="text-slate-50">Capturalos todos!</h1>
      <input type="text" className=""  onChange={(event)=>setEndUpdate(event.target.value)}/>
      <button className="border-2 border-slate-50 bg-slate-400">
        Busca a tu pokémon!
      </button>
      <PokeCard />
    </div>
  );
}
