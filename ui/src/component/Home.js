import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
//import 'bootstrap/dist/css/bootstrap.min.css';

import Redirect from "react-router-dom/withRouter";
import axios from "axios";

class Login extends Component {


    constructor(props) {
        super(props);
        this.state={
            mail:'',
            pwd:'',
            redirectToReferrer: false
        }
        this.LoginClicked = this.LoginClicked.bind(this);
        this.handleChangemail= this.handleChangemail.bind(this);
        this.handleChangepwd= this.handleChangepwd.bind(this);
    }

    LoginClicked() {
        console.log("login click")
    }


    async handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData();

        formData.append( 'mail', this.state.mail );
        formData.append( 'pwd', this.state.pwd );

        const url= "http://localhost:80/omobio/login.php";
        axios.post(url,formData).then( res=>console.log(res.data) )

    }
    handleChangemail(event) {
        this.setState( {mail: event.target.value});

    }
    handleChangepwd(event) {
        this.setState( {pwd: event.target.value} );
    }

    render() {
        if (this.state.redirectToReferrer || sessionStorage.getItem('userData')){
            return (<Redirect to={'/'}/>)
        }

        return (

            <div>
                <Form className=" text-center mb-6 " style={{marginTop: "5em",padding:" 40px 500px 60px"}} onSubmit={this.handleSubmit} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" id="mail" onChange={this.handleChangemail}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" id="pwd" onChange={this.handleChangepwd}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" id="lgbtn" onClick={this.LoginClicked} >
                        Login
                    </Button>
                </Form>
            </div>





        );
    }
}

export default Login;
