import React from 'react';
import Counter from './Counter';
import Greetings from './Greetings';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';

const App: React.FC = () => {
  //   const onClick = (name: string) => {
  //     console.log(`${name} says hello`);
  //   };
  //   return <Greetings name="hello" onClick={onClick} />;
  // return <Counter />;
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  // return <MyForm onSubmit={onSubmit} />;
  return <ReducerSample />;
};

export default App;
