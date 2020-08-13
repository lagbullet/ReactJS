import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Card } from './Card';
import CardHeader from './card-header';
import CardBody from './card-body';

configure({ adapter: new Adapter() });

describe('<Card />', () => {
  let wrapper;

  const caption = 'some caption';
  const children = 'some children';
  const defaultProps = {
    caption,
    children,
    readOnly: false,
    selectHandler: jest.fn(),
    editHandler: jest.fn(),
    redirectToCard: <div>REDIRECT</div>,
  };

  beforeEach(() => {
    defaultProps.selectHandler.mockClear();
    defaultProps.editHandler.mockClear();
    wrapper = shallow(<Card {...defaultProps} />);
  });

  it('should have CardHeader component', () => {
    expect(wrapper.find(CardHeader).length).toBe(1);
    expect(wrapper.state('caption')).toBe(caption);
  });

  it('should have CardBody component', () => {
    expect(wrapper.find(CardBody).length).toBe(1);
    expect(wrapper.state('children')).toBe(children);
  });

  describe('getDerivedStateFromProps', () => {
    it('readOnly = false', () => {
      const state = { tempCaption: 'tempCaption', tempChildren: 'tempChildren' };
      expect(Card.getDerivedStateFromProps({ readOnly: false }, state)).toMatchObject(state);
    });

    it('readOnly = true', () => {
      const state = { tempCaption: 'tempCaption', tempChildren: 'tempChildren' };
      expect(Card.getDerivedStateFromProps({ readOnly: false }, state)).toMatchObject(state);
    });
  });

  it('editCard', (done) => {
    const card = wrapper.instance();
    wrapper.setState({ checked: undefined, editable: undefined });
    wrapper.update();
    card.editCard();
    wrapper.update();
    setTimeout(() => {
      expect(wrapper.state()).toMatchObject({ checked: false, editable: true });
      done();
    }, 0);
  });

  it('handleCaptionChange', (done) => {
    const card = wrapper.instance();
    card.handleCaptionChange({ target: { value: 'test' } });
    wrapper.update();
    setTimeout(() => {
      expect(wrapper.state('caption')).toBe('test');
      done();
    }, 0);
  });

  it('handleTextChange', (done) => {
    const card = wrapper.instance();
    card.handleTextChange({ target: { value: 'test' } });
    wrapper.update();
    setTimeout(() => {
      expect(wrapper.state('children')).toBe('test');
      done();
    }, 0);
  });

  it('toggleCheckboxChange', (done) => {
    const card = wrapper.instance();
    wrapper.setState({ checked: undefined });
    wrapper.update();
    card.toggleCheckboxChange();
    wrapper.update();
    setTimeout(() => {
      expect(wrapper.state('checked')).toBe(true);
      expect(defaultProps.selectHandler).toHaveBeenCalled();
      done();
    }, 0);
  });

  describe('handleRedirect', () => {
    it('readOnly = false, editable = false', (done) => {
      const card = wrapper.instance();
      wrapper.setState({ editable: false, redirect: false });
      wrapper.update();
      card.handleRedirect();
      wrapper.update();
      setTimeout(() => {
        expect(wrapper.state('redirect')).toBe(true);
        expect(wrapper.text()).toBe('REDIRECT');
        done();
      }, 0);
    });

    it('readOnly = true, editable = true', (done) => {
      const card = wrapper.instance();
      wrapper.setState({ editable: true, redirect: false });
      wrapper.setProps({ readOnly: true });
      wrapper.update();
      card.handleRedirect();
      wrapper.update();
      setTimeout(() => {
        expect(wrapper.state('redirect')).toBe(true);
        expect(wrapper.text()).toBe('REDIRECT');
        done();
      }, 0);
    });

    it('readOnly = false, editable = true', (done) => {
      const card = wrapper.instance();
      wrapper.setState({ editable: true, redirect: false });
      wrapper.update();
      card.handleRedirect();
      wrapper.update();
      setTimeout(() => {
        expect(wrapper.state('redirect')).toBe(false);
        expect(wrapper.text()).not.toBe('REDIRECT');
        done();
      }, 0);
    });
  });

  it('cancelChanges', (done) => {
    const tempCaption = 'temp caption';
    const tempChildren = 'temp children';
    const card = wrapper.instance();
    wrapper.setState({ tempCaption, tempChildren, editable: true });
    wrapper.update();
    card.cancelChanges();
    wrapper.update();
    setTimeout(() => {
      expect(wrapper.state('editable')).toBe(false);
      expect(wrapper.state('caption')).toBe(tempCaption);
      expect(wrapper.state('children')).toBe(tempChildren);
      done();
    }, 0);
  });

  it('saveChanges', (done) => {
    const card = wrapper.instance();
    wrapper.setState({ editable: true });
    wrapper.update();
    card.saveChanges();
    wrapper.update();
    setTimeout(() => {
      expect(wrapper.state('editable')).toBe(false);
      expect(wrapper.state('tempCaption')).toBe(caption);
      expect(wrapper.state('tempChildren')).toBe(children);
      expect(defaultProps.editHandler).toHaveBeenCalledWith(caption, children);
      done();
    }, 0);
  });
});
