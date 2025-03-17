import { Dragon } from '../types';

export interface DragonDetailsProps {
  readonly selectedDragon: Dragon;
}

export function DragonDetails(props: DragonDetailsProps) {
  const { selectedDragon } = props;

  return (
    <div className="w-full h-80 p-8 m-8 bg-green-400 rounded shadow-md"></div>
  );
}

export default DragonDetails;
