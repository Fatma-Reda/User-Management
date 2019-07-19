// this folder only for testing configurations
const React = require('react');
const ReactDOM = require('react-dom');
const renderer = require('react-test-renderer');
const { configure, shallow, mount } = require('enzyme');
// const { expect } = require('chai');
const Adapter = require('enzyme-adapter-react-16');
const enzymeSerializer = require('enzyme-to-json/serializer');
expect.addSnapshotSerializer(enzymeSerializer);
configure({ adapter: new Adapter() });

export {
  React,
  ReactDOM,
  renderer,
  configure,
  shallow,
  mount,
  Adapter,
  enzymeSerializer
};
