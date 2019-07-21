import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Link, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const arrval = [{
    "id":1,
    "desc":"1.jpg",
    "path":"https://cdn.eso.org/images/thumb700x/potw1148a.jpg"
}, {
    "id":2,
    "desc":"2.jpg",
    "path":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Messier_95.jpg/767px-Messier_95.jpg"
}, {
    "id":3,
    "desc":"3.jpg",
    "path":"http://www.easytipsntricks.com/wp-content/uploads/2019/04/041019_LG-EV-MT_EHT_inline2_730.jpg"
}];

class MainComponent extends Component {
    constructor() {
        super();
        this.state = {
            jsonDataArr : []
        }
        this.removePhoto = this.removePhoto.bind(this)
        this.resetPhoto = this.resetPhoto.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
    }

    componentDidMount() {
        this.setState((state)=> ({
            jsonDataArr:arrval
            })
        )
    }

    removePhoto(data) {
        this.setState((state)=> ({
            jsonDataArr:state.jsonDataArr.filter((dataItem)=>{
                return dataItem !== data
            })
        }))
    }

    resetPhoto() {
        this.setState((state)=>({
            jsonDataArr:arrval
        }))
    }

    addPhoto(newData) {
        console.log(newData)
        this.setState((state)=>({
            jsonDataArr: [...state.jsonDataArr, newData]
        }))
    }

    render () {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md = {12}>
                        <Title nameProp = {"My Photos"}/>
                    </Col>
                </Row>
                <br/><br/><br/>
                <Route exact path = "/" render = {() => (
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md={1}>
                                <Link className="btn btn-secondary" to="AddPhoto">Add</Link>
                            </Col>
                            <Col md={1}>
                                <Button className="btn btn-secondary" onClick={this.resetPhoto}>reset</Button>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            {this.state.jsonDataArr
                                .sort((x, y) => { return y-x})
                                .map( (jsonData, index) => <PhotoWall key={index} jsonData={jsonData} onRemovePhoto={this.removePhoto}/> )}
                        </Row>
                    </Container>
                )}/>
                <Route path = "/AddPhoto" render = {({history}) => (
                    <Row>
                        <AddPhoto onAddPhoto = {(newAddedPost) => {
                            this.addPhoto(newAddedPost);
                            history.push('/')
                        }}/>
                    </Row>
                )}/>
            </Container>
        )
    }
}

export default MainComponent;