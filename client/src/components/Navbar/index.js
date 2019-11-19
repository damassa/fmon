import React from 'react';
import { TimelineLite } from "gsap/all";

import { 
  Nav, 
  Logo, 
  LogoFake,  
  MenuMobile,
  MenuMobileIcon,
  FakeSpace,
} from './style';

import MenuUser from './menuUser';
import MenuLinks from './menuLinks';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    
    this.menu = null; 

    this.menuAnimation = new TimelineLite({ paused: true });
  }

  state = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    open: false
  }

  listenScrollEvent = () => {
    if (window.scrollY > 10) {
      this.setState({backgroundColor: 'rgba(0,0,0,0.75)'})
      this.setState({boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.25)'})
    } else {
      this.setState({backgroundColor: 'transparent'})
      this.setState({boxShadow: 'none'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)

    this.menuAnimation
      .from(this.menu, 1, { left: 800 }, 0);
  }

  handlerClick() {
    if(!this.state.open){
      this.menuAnimation.play();
      this.setState({open: true});
    } else {
      this.menuAnimation.reverse();
      this.setState({open: false});
    }
  }

  render() {
    return (
      <>
        <Nav 
          style={{
            backgroundColor: this.state.backgroundColor,
            boxShadow: this.state.boxShadow
        }}>
          <Logo to="/" />
          <LogoFake />
          <MenuLinks />
          <MenuUser />
          <MenuMobileIcon onClick={() => this.handlerClick()}/>
        </Nav>
        <MenuMobile ref={div => this.menu = div}>
          <span>teste</span>
          <span>teste</span>
          <span>teste</span>
          <span>teste</span>
        </MenuMobile>
        <FakeSpace />
      </>
    )
  };
}
