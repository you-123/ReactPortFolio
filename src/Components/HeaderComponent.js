import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron ,Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label  } from 'reactstrap';
import { NavLink , Link} from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);

       
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
             this.toggleNav = this.toggleNav.bind(this);
            this.toggleModal = this.toggleModal.bind(this);
            this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
    <Jumbotron fluid>
    <div className="container">
        <div className="row">
        <div className="col">
          <h1>XYZ Is A Shopping Way</h1>
          <h2> Stay On Updates </h2>
          </div>
         </div>
         </div>
     </Jumbotron>
     <Navbar dark sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="30" width="30" alt="XYZ Logo" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link " to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/catalog">
                                    <i className="fa fa-list fa-lg" /> Catalog
                                </NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <i className="fa fa-info fa-lg" /> About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                  <span><i className="fa fa-address-card fa-lg" /> Contact Us</span>  
                                </NavLink>
                            </NavItem> */}
                        </Nav>
                        <div className="search-box">
                        <Input type="text" className="form-cont"/>
            <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
                             </div>
                             <span className="navbar-text ml-auto">
                                <Button outline >
                            <Link to='/cart.html'><i className="fa fa-shopping-basket" aria-hidden="true"></i>Cart<span>0</span></Link>
                                </Button>
                            </span>
                        <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in " /> Login
                                </Button>
                            </span>
                            <span className="navbar-text ml-auto">
                                <Button outline >
                                    <i className="fa fa-user-plus " /> SignUp
                                </Button>
                            </span>
                    </Collapse>
                </div>
            </Navbar>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
     </React.Fragment>   
            );
        }
    }
    
    export default Header;