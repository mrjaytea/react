import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import baseURL from '../baseURL';

function About(props) {
    if (props.about.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.about.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.about.errMess}</h4>
                </div>
            </div>
        );
    } else {
        const hobbies = props.about.about.hobbies.map((hobby) => {
            return (            
                <div key={ hobby.id }>
                    <RenderHobbies hobby={hobby}/>
                </div>            
            );
        });
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Me</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h1>About Me</h1>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Self-Introduction</h3>
                        <br/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-7">
                        <p>
                            A deligent individual who possesses an extreme desire to learn.
                        </p>

                        <p>
                            A strong believer of <strong>"Teamwork makes dream work"</strong> and <strong>"There is no 'I' in the word 'team'."</strong> Also, in Chinese, 團結實是力量.
                        </p>
                    </div>

                    <div className="col-12 col-md-4 offset-md-1 mb-5">
                        <Card className="mt-1">
                            <CardHeader style={{ backgroundColor: '#045394', color: '#EEEFFF'}}>
                                Info Card
                            </CardHeader>
                            <CardBody>
                                <CardTitle><h2>LAU Chi Pang</h2></CardTitle>
                                <CardSubtitle>Basic Info</CardSubtitle>
                                <CardImg width="50%" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="Card image cap" />
                                <CardText>
                                    Surname: {props.about.about.surname} <br/>
                                    Given Name: {props.about.about.givenname} <br/>
                                    Date of Birth: {props.about.about.dob} <br/>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>   
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h4>Hobbies</h4>
                        <hr/>
                    </div>
                    <div className="col-12 col-md-8">
                        {hobbies}   
                    </div>
                </div>        
            </div>
        );
    }
}

function RenderHobbies(hobby) {
    return(

        <Media tag="li" className="mt-5">                      
            <Media left middle>
                <Media object src={baseURL + hobby.hobby.image} alt={hobby.hobby.name} width="100px"/>	
            </Media>

            <Media body className="ml-5 mb-5">
                <Media heading>Hobby {hobby.hobby.id + 1}: {hobby.hobby.name}</Media>
                <p>{hobby.hobby.description}</p>
            </Media>
        </Media>
    )
}
export default About;