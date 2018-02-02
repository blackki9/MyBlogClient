import {createStore} from 'redux';
import postsReducer from '../reducers/posts';

export default () => {
    const store = createStore(postsReducer,      
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}