import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Jumbotron, Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Card, CardImg, CardText, CardBody, CardHeader, CardTitle, CardSubtitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import jumbotron from '../assests/jumbotron.png';
import baseURL from '../baseURL';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOPen: false
        };
        // This will make toggleNav available
        // Create a bind function that has the same body as the original one
        // make it available for invoking the function by "this.toggleNav"
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        // Toggle the isNavOpen state from true to false and vice versa
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOPen: !this.state.isModalOPen
        });
    }

    render(){
        return (
        <div>
            <Navbar dark color="primary" expand="md">
                <div className="container">
                    <NavbarToggler onClick={ this.toggleNav } />
                    <NavbarBrand href="/">Terry LAU's Page</NavbarBrand>            
                    <Collapse navbar isOpen={ this.state.isNavOpen }>
                        <Nav navbar>
                            {/* NavLink make the page's link "active" */}
                            <NavItem>
                                <NavLink className="nav-link" onClick={ this.toggleNav } to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" onClick={ this.toggleNav } to='/aboutme'><span className="fa fa-info fa-lg"></span> About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" onClick={ this.toggleNav } to='/qualifications'><span className="fa fa-check fa-lg"></span> Qualifications</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" onClick={ this.toggleNav } to='/skills'><span className="fa fa-cogs fa-lg"></span> Skills</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" onClick={ this.toggleNav } to='/grammar'><i className="fa fa-book fa-lg" aria-hidden="true"></i> Grammar</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button color="dark" outline onClick={this.toggleModal}>
                                    <span className="fa fa-quote-left"><span className="fa fa-quote-right"> My Favourite Quote</span></span>
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

            <Modal isOpen={this.state.isModalOPen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal} className="modal-header">My Favourite Quote</ModalHeader>
                <ModalBody>
                <Card className="mt-1">
                    <CardBody>
                        <CardImg width="100%" src={baseURL + "/images/wblake.jpg"} alt="William Blake"/>
                        <CardText>
                            <blockquote className="blockquote">
                                <p className="mb-0">He, who desires, but acts not, breeds pestilence.</p>
                                <footer className="blockquote-footer">William Blake,
                                    <cite title="Source Title"> Proverbs of Hell, 1929</cite>
                                </footer>
                            </blockquote>
                        </CardText>
                    </CardBody>
                </Card>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.toggleModal}>Close</Button>
                </ModalFooter>
            </Modal>

            <Jumbotron style={{ backgroundImage: `url(${jumbotron})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPositionY: '+50%', margin:'0px'}}>
                <div className="container">
                    <div className="row row-header">
                        <div className='col-12 col-sm-6'>
                            <h1 className="jumbotron-text">Terry LAU's Page</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
        );
    }
}

export default Header;
