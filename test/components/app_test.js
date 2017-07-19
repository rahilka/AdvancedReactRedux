// the purpose of this file is to test the component App

import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests, and pass whatever string we want, it will appear in the report after testing
describe('App', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});
		
	it('shows a comment box', () => {
		expect(component.find('.comment-box')).to.exist;
	});

});
