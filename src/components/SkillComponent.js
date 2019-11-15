import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Progress, Media, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import baseURL from '../baseURL'

function Skill (props) {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else {
        const colour = () => {
            if(props.skill.proficiency < 4) {
                return "danger";
            } else if (props.skill.proficiency < 7) {
                return "warning";
            } else {
                return "success";
            }
        }

        return(            
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem>Skills</BreadcrumbItem>
                        <BreadcrumbItem active>{props.skill.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h1>{props.skill.name}</h1>
                        <hr />
                    </div>
                    <div className="col-12">
                    <Media className="mt-2 mb-5">
                        <Media left className="align-items-center">
                            <Media object src={baseURL + props.skill.image} alt={props.skill.name} width="150px" className="mr-5"/>
                        </Media>
                        <Media body>
                            <Media heading>
                                <h2>{props.skill.name}</h2>
                            </Media>
                            <h4>{props.skill.category}</h4>
                            <p>Proficiency: </p>
                            <Progress color={colour()} value={props.skill.proficiency} max={10}>{props.skill.proficiency}</Progress>
                        </Media>
                    </Media>
                        <img src={baseURL + props.skill.cert} width="100%" className="mb-5"/>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Skill;