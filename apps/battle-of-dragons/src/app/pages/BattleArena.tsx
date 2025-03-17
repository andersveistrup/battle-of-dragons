import { useEffect } from 'react';
import { useGetTagsQuery } from '../api/dragonsApi';
import BattleCard from '../components/BattleCard';

export function BattleArena() {
  const { data } = useGetTagsQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex flex-row">
      <BattleCard></BattleCard>
      <BattleCard></BattleCard>
    </div>
  );
}

export default BattleArena;
