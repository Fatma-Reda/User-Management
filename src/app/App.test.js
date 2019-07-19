import { React, shallow } from '../test/Configurations';
import App from './App';

import reducers from '../store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const myStore = createStore(reducers);

describe('<App />', () => {
  test('renders', () => {
    const wrapper = shallow(
      <Provider store={myStore}>
        <App />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
