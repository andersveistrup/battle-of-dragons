import { selectFirstDragon, selectSecondDragon } from '../redux/dragonSlice';
import { useAppSelector } from '../redux/hooks';

export function FightButton() {
  // const firstDragon = useAppSelector(selectFirstDragon);
  // const secondDragon = useAppSelector(selectSecondDragon);

  const handleFight = () => {
    console.log('Fight');
    // console.log('firstDragon: ', firstDragon);
    // console.log('secondDragon: ', secondDragon);
  };

  return (
    <button
      onClick={() => {
        handleFight();
      }}
      className="p-2 h-8 rounded text-center bg-red-400 flex items-center justify-center"
    >
      Fight!!!
    </button>
  );
}

export default FightButton;
