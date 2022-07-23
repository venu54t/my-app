
import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
 
import './App.css';
import { getEnhancers } from './common/enhancers';
import { GET_MEME, init } from './meme/meme.actions';

import { memeReducer } from './meme/meme.reducer';
import {Router , Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import MemeComponent from './meme/meme.route';
import { _history } from './common/history';
const store = createStore(memeReducer, getEnhancers());
init()(store.dispatch)
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={_history}>
            <Route path = "/" component={MemeComponent} />
        </Router>
      </Provider>
      
    </div>
  );
}

export default App;
