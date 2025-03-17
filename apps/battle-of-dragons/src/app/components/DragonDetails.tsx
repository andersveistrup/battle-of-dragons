import { Dragon } from '../types';

export interface DragonDetailsProps {
  readonly selectedDragon: Dragon;
}

export function DragonDetails(props: DragonDetailsProps) {
  const { selectedDragon } = props;

  return (
    <div className="w-full h-80 p-8 mt-2 bg-yellow-400 rounded shadow-md">
      <div className="text-center">
        <h2 className="text-2xl font-bold">{selectedDragon.name}</h2>
        <p className="text-lg">{selectedDragon.description}</p>
      </div>
      <div className="flex flex-row justify-between mt-4">
        <div>
          <h3 className="text-lg font-bold">Type</h3>
          <p>{selectedDragon.type}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Level</h3>
          <p>{selectedDragon.level}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Attack</h3>
          <p>{selectedDragon.attack}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Defense</h3>
          <p>{selectedDragon.defense}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Health</h3>
          <p>{selectedDragon.health}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Speed</h3>
          <p>{selectedDragon.speed}</p>
        </div>
      </div>
    </div>
  );
}

export default DragonDetails;
