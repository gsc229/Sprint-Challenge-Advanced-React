import React from 'react';

// form component to input player data will need name, country and searches input

function ChoosePlayerForm() {
  return (
    <div>
      <form action=''>
        <input placeholder='Player Name' type='text' />
        <input placeholder='Country' type='text' />
        <input placeholder='Number of searches' type='number' name='' id='' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ChoosePlayerForm;
