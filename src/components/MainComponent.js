import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Media } from 'reactstrap';

import Home from './HomeComponent'
import About from './AboutComponent'
import Grammar from './GrammarComponent'
import Qualifications from './QualificationsComponent'
import Skills from './SkillsComponent'
import Skill from './SkillComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { fetchAbout, fetchGramamr, fetchQuali, fetchSkills } from '../redux/ActionCreators';

import { TransitionGroup, CSSTransition } from 'react-transition-group'

const mapStateToProps = state => {
    return{
        about: state.about,
        grammar: state.grammar,
        quali: state.quali,
        skills: state.skills
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchAbout: function() {
        dispatch(fetchAbout());
    },
    fetchGramamr: () => {dispatch(fetchGramamr())},
    fetchQuali: () => {dispatch(fetchQuali())},
    fetchSkills: () => {dispatch(fetchSkills())}
})

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }   
    }

    componentDidMount() {
        this.props.fetchAbout();
        this.props.fetchGramamr();
        this.props.fetchQuali();
        this.props.fetchSkills();
        console.log(this.props.about);
    }

    render() {
        const SkillWithId = ({match}) =>{
            return(  
                <Skill skill={this.props.skills.skills.filter((skill) => skill.id === parseInt(match.params.skillId, 10))[0]}
                isLoading={this.props.skills.isLoading} 
                errMess={this.props.skills.errMess}/>
            );   
        }

        return(
            <div>
                <Header/>
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames ='page' timeout={600}>
                            <Switch>
                                <Route path='/home' component={() => 
                                <Home/>} />
                                <Route exact path='/aboutme' component={() => 
                                <About about = {this.props.about} />} />
                                <Route exact path='/qualifications' component={() => 
                                <Qualifications quali = {this.props.quali} />} />
                                <Route exact path='/skills' component={() => 
                                <Skills skills={this.props.skills} />} />
                                <Route path='/skills/:skillId' component={SkillWithId} />
                                <Route exact path='/grammar' component={() => 
                                <Grammar grammar={this.props.grammar} />} />
                                <Redirect to='/home' />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
