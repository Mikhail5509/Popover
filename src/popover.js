export default class Popover {
  constructor(button, title, content) {
    this.button = button;
    this.title = title;
    this.content = content;
    this.popover = null;

    this.init();
  }

  init() {
    this.button.addEventListener('click', () => this.togglePopover());
  }

  togglePopover() {
    if (this.popover) {
      this.popover.remove();
      this.popover = null;
    } else {
      this.createPopover();
    }
  }

  createPopover() {
    const popover = document.createElement('div');
    popover.className = 'popover';

    popover.innerHTML = `
      <h3>${this.title}</h3>
      <p>${this.content}</p>
    `;

    document.body.appendChild(popover);

    const { top, left, width } = this.button.getBoundingClientRect();
    popover.style.top = `${top - popover.offsetHeight - 10}px`;
    popover.style.left = `${left + width / 2 - popover.offsetWidth / 2}px`;

    this.popover = popover;
  }
}
