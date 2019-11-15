import React, { Component } from 'react';
import Loading from './LoadingComponent';
import { Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import baseURL from '../baseURL';
import { Link } from 'react-router-dom';


function Qualifications(props) {
    if (props.quali.isLoading) {
        console.log(props.quali);
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.quali.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.quali.errMess}</h4>
                </div>
            </div>
        );
    } else {
        const qualis = props.quali.quali.map((quali) => {
            return (            
                <div key={ quali.id }>
                    <RenderQualis quali={quali} className="mt-1"/>
                </div>            
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Qualifications</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h1>Qualifications</h1>
                        <hr />
                    </div>
                    <div className="col-12">
                        {qualis}
                    </div>
                </div>
            </div>
        )
    }

    function RenderQualis(quali) {
        console.log(baseURL + quali.quali.image);
        return(
            <Media className="mt-2 mb-5">
                <Media left>
                    <Media object src={baseURL + quali.quali.image} alt={quali.quali.name} width="150px" className="mr-5"/>
                </Media>
                <Media body>
                    <Media heading>
                        <h2>{quali.quali.name}</h2>
                    </Media>
                    <h5>{quali.quali.type}</h5>
                    <p>{quali.quali.year}</p>
                    <p>{quali.quali.description}</p>
                </Media>
            </Media>
        );
    }
}

export default Qualifications;