import { Dragon } from '../types';
import Select from 'react-select';

export interface DragonSelectProps {
  readonly handleSelect: (dragon: Dragon) => void;
  readonly dragonsList: Dragon[];
  readonly selectedDragon: Dragon | null;
}

export function DragonSelect(props: DragonSelectProps) {
  const { handleSelect, dragonsList = [], selectedDragon } = props;

  const options = dragonsList.map((dragon) => ({
    value: dragon.id,
    label: dragon.name,
  }));

  return (
    <Select
      options={options}
      value={options.find((option) => selectedDragon?.id === option.value)}
      onChange={(selectedOption) => {
        const selectedDragon = dragonsList.find(
          (dragon) => dragon.id === selectedOption?.value
        );
        if (selectedDragon) {
          handleSelect(selectedDragon);
        }
      }}
    />
  );
}

export default DragonSelect;
