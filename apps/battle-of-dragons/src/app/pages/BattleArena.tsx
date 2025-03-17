import { useEffect } from 'react';
import { useGetTagsQuery } from '../api/dragonsApi';
import BattleCard from '../components/BattleCard';

export function BattleArena() {
  const { data } = useGetTagsQuery();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="flex flex-row justify-center items-center">
      <BattleCard></BattleCard>
      <button className="p-2 h-8 rounded text-center bg-red-400 flex items-center justify-center">
        Fight!!!
      </button>
      <BattleCard></BattleCard>
    </div>
  );
}

export default BattleArena;
