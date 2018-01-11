import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LatestMovieReviewsContainer from '../src/components/LatestMovieReviewsContainer';
import testReviews from './test-reviews';

Enzyme.configure({ adapter: new Adapter() })

const Noop = (props) => { return <p>Noop</p> };

describe('<LatestMovieReviewsContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !LatestMovieReviewsContainer.prototype ?
      shallow(<Noop />) : shallow(<LatestMovieReviewsContainer />);
  });

  it('should have state', () => {
    const tryToGetState = () => { wrapper.state(); }
    expect(LatestMovieReviewsContainer.prototype, 'Component is not yet defined.').to.exist;
    expect(tryToGetState).to.not.throw('Component should be class component.');
  });

  it('should have a state property "reviews"', () => {
    expect(LatestMovieReviewsContainer.prototype, 'Component is not yet defined.').to.exist;
    expect(wrapper.state()).to.have.key('reviews');
  });

  it('should have top-level element with class "latest-movie-reviews"', () => {
    expect(wrapper.hasClass('latest-movie-reviews')).to.be.true;
  });



});
