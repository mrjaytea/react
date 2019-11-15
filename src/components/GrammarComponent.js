import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import baseURL from '../baseURL'
import classnames from 'classnames';

import { Fade } from 'react-animation-components';


class Grammar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'spanish'
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(language) {
        this.setState({
            activeTab: language
        });
    }

    render() {
        if (this.props.grammar.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        } else if (this.props.grammar.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>1</h4>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Grammar</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Grammar</h3>
                            <hr />
                            <div>
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === 'spanish' })}
                                            onClick={() => { this.toggle("spanish"); }}
                                            href="#"
                                        >
                                            <img src={baseURL + 'images/spanish.png'} width="40px" className="mr-2"/>
                                            Spanish
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === 'german' })}
                                            onClick={() => { this.toggle("german"); }}
                                            href="#"
                                        >
                                            <img src={baseURL + 'images/german.png'} width="40px" className="mr-2"/>
                                            German
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === 'finnish' })}
                                            onClick={() => { this.toggle("finnish"); }}
                                            href="#"
                                        >
                                            <img src={baseURL + 'images/finnish.png'} width="40px" className="mr-2"/>
                                            Finnish
                                        </NavLink>
                                    </NavItem>
                                </Nav>

                                <Fade in>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="spanish">
                                        <Row>
                                            <Col>
                                                <h2 className="mt-3 mb-3">Verb Endings in Present Tense</h2>
                                                <Table bordered striped>
                                                    <thead>
                                                        <tr>
                                                            <th>Pronouns/ Verb Endings</th>
                                                            <th>-ar</th>
                                                            <th>-er</th>
                                                            <th>-ir</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Yo</th>
                                                            <td>-o</td>
                                                            <td>-o</td>
                                                            <td>-o</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Tú</th>
                                                            <td>-as</td>
                                                            <td>-es</td>
                                                            <td>-es</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">El/Ella/Usted</th>
                                                            <td>-a</td>
                                                            <td>-e</td>
                                                            <td>-es</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Nosotros</th>
                                                            <td>-amos</td>
                                                            <td>-emos</td>
                                                            <td>-imos</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Vosotros</th>
                                                            <td>-áis</td>
                                                            <td>-éis</td>
                                                            <td>-ís</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Ellos/Ellas/Ustedes</th>
                                                            <td>-an</td>
                                                            <td>-en</td>
                                                            <td>-en</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <h2 className="mt-3 mb-3">Verb Endings in Past Tense</h2>
                                                <Table bordered striped>
                                                    <thead>
                                                        <tr>
                                                            <th>Pronouns/ Verb Endings</th>
                                                            <th>-ar</th>
                                                            <th>-er / -ir</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Yo</th>
                                                            <td>-é</td>
                                                            <td>-í</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Tú</th>
                                                            <td>-aste</td>
                                                            <td>-iste</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">El/Ella/Usted</th>
                                                            <td>-ó</td>
                                                            <td>-ió</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Nosotros</th>
                                                            <td>-amos</td>
                                                            <td>-imos</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Vosotros</th>
                                                            <td>-asteis</td>
                                                            <td>-isteis</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Ellos/Ellas/Ustedes</th>
                                                            <td>-aron</td>
                                                            <td>-ieron</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="german">
                                        <Row>
                                            <Col>
                                                <h2 className="mt-2 mb-3">German Definite Articles</h2>
                                                <Table bordered striped>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Masculine</th>
                                                            <th>Feminine</th>
                                                            <th>Neuter</th>
                                                            <th>Plural</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Nominative</th>
                                                            <td>der</td>
                                                            <td>die</td>
                                                            <td>das</td>
                                                            <td>die</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Accusative</th>
                                                            <td>den</td>
                                                            <td>die</td>
                                                            <td>das</td>
                                                            <td>die</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Dative</th>
                                                            <td>dem</td>
                                                            <td>der</td>
                                                            <td>dem</td>
                                                            <td>den</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Genitive</th>
                                                            <td>des</td>
                                                            <td>der</td>
                                                            <td>des</td>
                                                            <td>der</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="finnish">
                                        <Row>
                                            <Col>
                                                <h2 className="mt-2 mb-3">Finnish Cases (Singular)</h2>
                                                <Table bordered striped>
                                                    <thead>
                                                        <tr>
                                                            <th>Cases</th>
                                                            <th>Suffix</th>
                                                            <th>Meaning</th>
                                                            <th>Example</th>
                                                            <th>English</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" colSpan="5" className="table-cat">GRAMMTICAL</th>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Nominative</th>
                                                            <td>--</td>
                                                            <td>--</td>
                                                            <td>Talo</td>
                                                            <td>House</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Genitive</th>
                                                            <td>-n</td>
                                                            <td>-'s</td>
                                                            <td>Talon</td>
                                                            <td>House's</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Accusative</th>
                                                            <td>- or -n</td>
                                                            <td>Whole object</td>
                                                            <td>Talon/Talo</td>
                                                            <td>(Whole) house</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Partitive</th>
                                                            <td>-(t)a or -(t)ä</td>
                                                            <td>Part of the Object</td>
                                                            <td>Taloa</td>
                                                            <td>(Part of the) house</td>
                                                        </tr>

                                                        <tr>
                                                            <th scope="row" colSpan="5" className="table-cat">LOCATIVE (internal)</th>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Inessive</th>
                                                            <td>-ssa or -ssä</td>
                                                            <td>in</td>
                                                            <td>Talossa</td>
                                                            <td>in the house</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Elative</th>
                                                            <td>-sta or -stä</td>
                                                            <td>from (outside)</td>
                                                            <td>Talosta(ni)</td>
                                                            <td>out of (my) house</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Illative</th>
                                                            <td>-an, -en, -on...</td>
                                                            <td>into</td>
                                                            <td>Talon(sa)</td>
                                                            <td>into (his/her) house</td>
                                                        </tr>

                                                        <tr>
                                                            <th scope="row" colSpan="5" className="table-cat">LOCATIVE (external)</th>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Adessive</th>
                                                            <td>-lla or -llä</td>
                                                            <td>at, on</td>
                                                            <td>Talolla</td>
                                                            <td>at the house</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Ablative</th>
                                                            <td>-lta or -ltä</td>
                                                            <td>from</td>
                                                            <td>Talolta</td>
                                                            <td>from the house</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Allative</th>
                                                            <td>-lle</td>
                                                            <td>to (outside), onto</td>
                                                            <td>Talolle</td>
                                                            <td>to the house</td>
                                                        </tr>

                                                        <tr>
                                                            <th scope="row" colSpan="5" className="table-cat">MARGINAL</th>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Essive</th>
                                                            <td>-na or -nä</td>
                                                            <td>as</td>
                                                            <td>Talona</td>
                                                            <td>as the house</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Translative</th>
                                                            <td>-ksi</td>
                                                            <td>into (transformation)</td>
                                                            <td>Taloksi</td>
                                                            <td>turn into the house</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Abessive</th>
                                                            <td>-tta or -ttä</td>
                                                            <td>without</td>
                                                            <td>Talotta</td>
                                                            <td>without a house</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                                </Fade>
                            </div>
                        </div>                
                    </div>
                </div>
            );
        }
    }
}

export default Grammar;