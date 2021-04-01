import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
   {
      title: 'Who is the teacher of the Teenage Mutant Ninja Turtles?',
      content: 'Master Splinter'
   },
   {
      title: 'Who was the host of TV’s “Unsolved Mysteries”?',
      content: 'Robert Stack'
   },
   {
      title: 'In the TV show "The Simpsons", who is also known as "The Listen Lady"?',
      content: 'Marge Simpson'
   }
];

const options = [
   {
      label: 'Red',
      value: 'red'
   },
   {
      label: 'Blue',
      value: 'blue'
   },
   {
      label: 'Green',
      value: 'green'
   }
];

const App = () => {
   const [selected, setSelected] = useState(options[0]);
   return (
      <div>
         <Header />
         <Route path="/">
            <Accordion items={items} />
         </Route>
         <Route path="/search">
            <Search />
         </Route>
         <Route path="/dropdown">
            <Dropdown
               label="Select a Color"
               options={options}
               selected={selected}
               onSelectedChange={setSelected}
            />
         </Route>
         <Route path="/translate">
            <Translate />
         </Route>
      </div>
   );
}

export default App;

