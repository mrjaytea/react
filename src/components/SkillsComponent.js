import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Progress, Media, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import baseURL from '../baseURL'

function Skills (props) {
    if (props.skills.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.skills.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.skills.errMess}</h4>
                </div>
            </div>
        );
    } else {
        const skills = props.skills.skills.map((skill) => {
            return (            
                <div key={ skill.id }>             
                    <RenderSkills skill={skill} className="mt-1"/>
                </div>            
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Skills</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h1>Skills</h1>
                        <hr />
                    </div>
                    <div className="col-12">
                        {skills}
                    </div>
                </div>
            </div>
        );
    }

    function RenderSkills(skill) {
        const more = () => {
            if(skill.skill.cert){
                return(
                    <Link to={`/skills/${skill.skill.id}`}><Button color="primary" className="mt-2" >More</Button></Link>
                )
            }
        }

        const colour = () => {
            if(skill.skill.proficiency < 4) {
                return "danger";
            } else if (skill.skill.proficiency < 7) {
                return "warning";
            } else {
                return "success";
            }
        }
        return(
            <Media className="mt-2 mb-5">
                <Media left className="align-items-center">
                    <Media object src={baseURL + skill.skill.image} alt={skill.skill.name} width="150px" className="mr-5"/>
                </Media>
                <Media body>
                    <Media heading>
                        <h2>{skill.skill.name}</h2>
                    </Media>
                    <h4>{skill.skill.category}</h4>
                    <p>Proficiency: </p>
                    <Progress color={colour()} value={skill.skill.proficiency} max={10}>{skill.skill.proficiency}</Progress>
                    <div>{more()}</div>
                </Media>
            </Media>
        );
    }
}

export default Skills;