// the purpose of this file is to test the component App

import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests, and pass whatever string we want, it will appear in the report after testing
describe('App', () => {
		
	// Use 'it' to test a single attribute of a target, for one single test
	it('shows the correct text', () => {

		// create an instance of App
		const component = renderComponent(App);

		// Use 'expect' to make an 'assertion' about a target
		expect(component).to.contain('React simple starter');

	});

});
