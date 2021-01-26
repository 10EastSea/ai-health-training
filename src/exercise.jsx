import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
    border: 3px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-right: 8px;
    background-color: ${props =>
        props.isDragDisabled
            ? 'lightgrey'
            : props.isDragging
                ? 'lightgreen'
                : 'white'};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;


    &:focus {
        outline: none;
        border-color: red;
    }
`;

// const situp = require("./images/sit_up_icon.png")


export default class Exercise extends React.Component {
    render() {
        // const isDragDisabled = this.props.exercise.id === 'sit_up';
        const isDragDisabled = false;

        function activateLasers() {
            "Hello World!";
        }
        return(
            <Draggable 
                draggableId={this.props.exercise.id} 
                index={this.props.index}
                isDragDisabled ={isDragDisabled}    
            >
                {(provided, snapshot)=> ( 
                <Container 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging = {snapshot.isDragging}
                    isDragDisabled = {isDragDisabled}
                >
                    <button onClick={activateLasers}>
                        Activate Lasers
                    </button>
                    <img src={this.props.exercise.thumb} width="75%" height="75%" alt="" />
                    <strong> {this.props.exercise.name} </strong>
                </Container>
                )}
            </Draggable>
            );    
    }
} 