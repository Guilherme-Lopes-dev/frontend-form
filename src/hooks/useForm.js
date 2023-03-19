import { useState } from 'react';
import Info from '../components/Info';
import Plan from '../components/Plan';
import Summary from '../components/Summary';
import Addons from '../components/Addons';
import Confirmation from '../components/Confirmation';

const useForm = () => {
  const [current, setCurrent] = useState(1);
  let component;

  const handleClick = (i) => {
    setCurrent(i);
  };

  const nextStep = () => {
    setCurrent(current + 1);
  };

  const previousStep = () => {
    setCurrent(current - 1);
  };

  switch (current) {
    case 1:
      component = <Info />;
      break;
    case 2:
      component = <Plan />;
      break;
    case 3:
      component = <Addons />;
      break;
    case 4:
      component = <Summary />;
      break;
    case 5:
      component = <Confirmation />;
      break;
    default:
      component = <Info />;
  }

  return { current, component, handleClick, nextStep, previousStep };
};

export default useForm;
