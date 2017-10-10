import React from 'react';
import { Provider } from 'react-redux';

export default class Root extends React.Component {
	constructor({store}) {
		super({store})
	}

  render() {
    return (
			<Provider store={store}>

			</Provider>
    );
  }
}
