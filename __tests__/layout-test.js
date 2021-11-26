import React from 'react'
import renderer from  'react-test-renderer'
import Layout from '../src/components/Layout'

test('renders correctly', () => {
    const tree = renderer.create(<Layout />).toJSON();
    expect(tree).toMatchSnapshot();
});
