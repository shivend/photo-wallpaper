import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function PhotoWall(props) {
    return (
        <Col md={3} className ="">
            <div className = "photo-frame">
                <h3>{props.jsonData.desc}</h3>
                <div className= "picture-box">
                    <img src={props.jsonData.path} className="img-thumbnail" alt="Cinque Terre"/>
                </div>
                <br/>
                <Button className="btn btn-secondary" onClick = {() => {
                    props.onRemovePhoto(props.jsonData);
                }}>Remove</Button>
            </div>
            <br/><br/>
        </Col>

    )
}


export default PhotoWall;