import _ from 'lodash';
import './style.css';
import Icon from './icon.png'
import Data from './data.xml'

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack', JSON.stringify(Data)], ' ');
  element.classList.add('hello');

  // add the image to exiting diev
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}
// https://webpack.js.org/guides/asset-management
document.body.appendChild(component());