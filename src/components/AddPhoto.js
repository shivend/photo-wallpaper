import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AddPhoto extends React.Component {
    constructor() {
        super();
        this.state = {
            id: Number(new Date),
            desc: null,
            path: null
        };
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handlePathChange = this.handlePathChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDescChange(event) {
        this.setState({
            desc: event.target.value
        })
    }

    handlePathChange(event) {
        this.setState({
            path: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.desc && this.state.path) {
            console.log(this.state.id)
            this.props.onAddPhoto(this.state)
        } else {
            
        }
        
    }

    render() {
        return (
            <Container>
                <form className="complete-div">
                    <br/>
                    <Row className="justify-content-md-center">
                        <Col md = {8}>
                            <h3>Add New  Photo</h3>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="justify-content-md-center">
                        <Col md = {1}>
                            <span>Link: </span>
                        </Col>
                        <Col md = {7}>
                            <input type = "text" className="form-control" name = "path" onChange={this.handlePathChange}/>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="justify-content-md-center">
                        <Col md = {1}>
                            <span>Description: </span>
                        </Col>
                        <Col md = {7}>
                            <input type = "text" className="form-control" name = "desc" onChange={this.handleDescChange}/>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="justify-content-md-center">
                        <Col md = {1}>
                            <Link className="btn btn-secondary" to = "/">Back</Link>
                        </Col>
                        <Col md = "auto">
                            <input type = "submit" className="btn btn-secondary" value = "Add New Photo" onClick = {this.handleSubmit}/>
                        </Col>
                    </Row>
                </form>
            </Container>



            
        )
    }
}

export default AddPhoto;