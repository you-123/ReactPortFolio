import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, FormFeedback
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function RenderHeader(props) {
    const [{ basket }, dispatch] = useStateValue();
    return (<React.Fragment>   <span className="navbar-text ml-auto">
        <div className="menu-bar">
            <Button outline >
                <Link to='/cart'><i className="fa fa-shopping-basket" aria-hidden="true"></i>Cart<span>{basket?.length}</span></Link>
            </Button>
        </div>
    </span></React.Fragment>);


}
//
class Header extends Component {
    constructor(props) {
        super(props);


        this.state = {

            isNavOpen: false,
            isModalOpen: false,
            isModalOpenSignUp: false,
            firstName: '',
            lastName: '',
            userName: '',
            password:'',
            email: '',
            touched: {
                firstName: false,
                lastName: false,
                userName: false,
                password:false,
                email: false
            }  
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModalSignUp = this.toggleModalSignUp.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
    toggleModalSignUp() {
        this.setState({
            isModalOpenSignUp: !this.state.isModalOpenSignUp
        });
    }
    handleLogin(event) {
        alert(`UserName: ${this.userName.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
    
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value =  target.value;
        
      
        this.setState({
            [name]: value
        });
     
         event.preventDefault();
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    validate(firstName, lastName,  userName, email) {

        const errors = {
            firstName: '',
            lastName: '',
            userName: '',
            email: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }
       
           const regu = /^[A-Z0-9._]{2,4}$/i;
           const  reg= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (this.state.touched.userName && !regu.test(userName)) {
            errors.userName= 'The userName  should contain  Alpah numeric 2-4 only .';
        }

        if (this.state.touched.email && !reg.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }


    render() {
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.userName, this.state.email);  
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
                                <NavItem>
                                    <NavLink className="nav-link" to="/wish">
                                        <i className=" fa fa-heart-o fa-lg" /> WishList
                                </NavLink>
                                </NavItem>
                            </Nav>
                            <div className="search-box">
                                <Input type="text" className="form-cont" />
                                <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                            <RenderHeader />

                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in " /> Login
                                </Button>
                            </span>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModalSignUp}>
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
                                <Label htmlFor="userName">Username</Label>
                                <Input type="text" id="userName" name="userName"
                                    innerRef={input => this.userName = input} />
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
                <Modal isOpen={this.state.isModalOpenSignUp} toggle={this.toggleModalSignUp}>
                    <ModalHeader toggle={this.toggleModalSignUp}>SignUp</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                                <Label htmlFor="firstName">FirstName</Label>
                                <Input type="text" id="firstName" name="firstName"
                                   value={this.state.firstName}
                                    invalid={errors.firstName}
                                    onBlur={this.handleBlur("firstName")}
                                    onChange={this.handleInputChange} />
                             <FormFeedback>{errors.firstName}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastName">LastName</Label>
                                <Input type="text" id="lastName" name="lastName"
                                      value={this.state.lastName}
                                    invalid={errors.lastName}
                                    onBlur={this.handleBlur("lastName")}
                                    onChange={this.handleInputChange}   />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="text" id="email" name="email"
                                     value={this.state.email}
                                    invalid={errors.email}
                                    onBlur={this.handleBlur("email")} 
                                    onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="userName">Username</Label>
                                <Input type="text" id="userName" name="userName"
                                       value={this.state.userName}
                                    invalid={errors.userName}
                                    onBlur={this.handleBlur("userName")}
                                    onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.userName}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}/>
                            </FormGroup>
                           
                            <Button type="submit" value="submit" color="primary">SignUp</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;