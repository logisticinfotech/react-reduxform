import React from 'react';

import ExampleForm from './Components/ExampleForm';
import { Provider } from 'react-redux';
import configureStore from '../src/redux/ConfigureStore';
const store = configureStore();

class App extends React.Component {
  submit = (values) => {
    this.setState({
      userParam: values
    });
  };

  render() {
    return (
      <Provider store={store}>
        <ExampleForm
          onSubmit={this.submit} />
      </Provider>
    );
  }
}

export default App;
