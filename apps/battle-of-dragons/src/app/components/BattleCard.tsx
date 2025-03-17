import { useState } from 'react';
import { useGetTagsQuery } from '../api/dragonsApi';
import DragonDetails from './DragonDetails';
import DragonSelect from './DragonSelect';
import { Dragon } from '../types';

export function BattleCard() {
  const { data: dragonsList, isLoading } = useGetTagsQuery();
  const [selectedDragon, setSelectedDragon] = useState<Dragon | null>(null);

  const handleSelect = () => {
    console.log('handleSelect');
  };

  return (
    <div className="w-full h-80 p-8 m-8 bg-green-400 rounded shadow-md flex flex-col items-center ">
      {!isLoading && dragonsList && (
        <DragonSelect
          handleSelect={handleSelect}
          dragonsList={dragonsList}
          selectedDragon={selectedDragon}
        />
      )}

      {selectedDragon && (
        <DragonDetails selectedDragon={selectedDragon}></DragonDetails>
      )}

      {!selectedDragon && <div className="mt-12">Select a dragon</div>}
    </div>
  );
}

export default BattleCard;
