import React from 'react';
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';
import Exercise from './exercise';

const Container =styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;

    display: flex;
    flex-direction:column;
    `;
const Title = styled.h3`
    padding: 8px;
`;
const ExerciseList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'transparent')};
    width: 1887px;
    height: 150px;
    display: flex;
`; 

const GET_TASK = "exercise";

export default class Column extends React.Component {
    // getTask = (exercise) => {
    //     localStorage.setItem(GET_TASK, exercise);
    //     console.log(exercise);
    // }
    
    saveRoutine = () => {
        console.log("is it called?");
        localStorage.setItem("routine", JSON.stringify(this.props.exercises));
    }

    render() {

        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable 
                    droppableId={this.props.column.id} 
                    direction ="horizontal"
                    isDropDisabled = {this.props.isDropDisabled}
                >
                    {(provided, snapshot) => (
                        <ExerciseList 
                        ref = {provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver = {snapshot.isDraggingOver}
                        >
                        {this.props.exercises.map((exercise, index) => (
                        <Exercise key={exercise.id} exercise={exercise} index={index}/>
                        ))}
                        {provided.placeholder}
                    </ExerciseList>
                    )}
                </Droppable>
            </Container>
        ); 
    }
}