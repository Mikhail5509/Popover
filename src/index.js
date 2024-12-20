import './popover.css';
import Popover from './popover';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.popover-button');
  new Popover(button, 'Popover Title', 'This is the content of the popover.');
});
