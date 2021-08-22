import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

it('shows a comment box', () => {
    const wrapped = shallow(<App />);
    // console.log((wrapped.find(CommentBox)));
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comments list', () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find(CommentList).length).toEqual(1);
});