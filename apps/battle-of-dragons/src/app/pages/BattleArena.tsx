import { useEffect } from 'react';
import { useGetTagsQuery } from '../api/dragonsApi';
import BattleCard from '../components/BattleCard';
import { useAppDispatch } from '../redux/hooks';
import { setFirstDragon, setSecondDragon } from '../redux/dragonSlice';
import FightButton from '../components/FightButton';

export function BattleArena() {
  const { data } = useGetTagsQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="flex flex-row justify-center items-center">
      <BattleCard
        onSelect={(dragon) => {
          dispatch(setFirstDragon(dragon.id));
        }}
      ></BattleCard>
      <FightButton />
      <BattleCard
        onSelect={(dragon) => {
          dispatch(setSecondDragon(dragon.id));
        }}
      ></BattleCard>
    </div>
  );
}

export default BattleArena;
