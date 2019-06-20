import React from 'react';
import { render as renderJSX } from 'react-dom';
import MyButton from './MyButton';

export default function render({ first, second }){
  renderJSX((
    <main> 
      <MyButton
        text={ first.text }
        disabled={ first.disabled } 
      />
      <MyButton
        text={ second.text }
        disabled={ second.disabled } 
      />
    </main>
  ), document.getElementById('app')
  );
};

