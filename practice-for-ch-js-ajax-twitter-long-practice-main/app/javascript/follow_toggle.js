import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    const boundClick = this.handleClick.bind(this);
    this.toggleButton.addEventListener('click', boundClick);
  }
  
  async handleClick(event) {
    // Your code here
    event.preventDefault();
    // debugger
    console.log(event);
    
  }

  async follow() {
    // Your code here
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}