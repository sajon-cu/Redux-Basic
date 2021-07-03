import store from './store';
// import * as actions from './actionTypes';
import {bugAdded, bugRemoved, bugResolved} from './actionCreator'


// store.subscribe(()=>{
//   console.log("State changed: ", store.getState());
// })

// one way
/*
store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: 'Bug 1'
  }
});

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: '1'
  }
});

store.dispatch({
  type: actions.BUG_RESOLVED,
  payload: {
    id: '1'
  }
});

*/

// another way of using actionCreator

store.dispatch(bugAdded('Bug 1'));
store.dispatch(bugAdded('Bug 2'));
store.dispatch(bugAdded('Bug 3'));
store.dispatch(bugAdded('Bug 4'));

//store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(1))
store.dispatch(bugResolved(4))


console.log(store.getState());

function App() {
  return (
    <div className="App">
      <p>Hello react developer!</p>
      <p>Hello react developer!</p>
    </div>
  );
}

export default App;
