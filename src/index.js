import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import initialData from './initial_data';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './column';
import '@atlaskit/css-reset' ;
import reportWebVitals from './reportWebVitals';
// import App from './App';

const Container = styled.div`
  display:flex;
  flex-direction:column;
`;

class App extends React.Component {
  state = initialData;

  onDragStart = start => {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

    this.setState({
      homeIndex,
    });
  };

  onDragUpdate = update => {
    const {destination} = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.exercises).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;

  }

  onDragEnd = result => {

    this.setState({
      homeIndex: null,
    })
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';

    const {destination, source, draggableId} = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newExerciseIds = Array.from(start.exerciseIds);
      newExerciseIds.splice(source.index, 1);
      newExerciseIds.splice(destination.index, 0, draggableId);
  
      const newColumn = {
        ...start, 
        exerciseIds: newExerciseIds,
      };
  
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };
  
      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startExerciseIds = Array.from(start.exerciseIds);
    startExerciseIds.splice(source.index, 1);
    const newStart = {
      ...start,
      exerciseIds: startExerciseIds,
    };

    const finishExerciseIds = Array.from(finish.exerciseIds);
    finishExerciseIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      exerciseIds: finishExerciseIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };
  render() {  
    return (
    <DragDropContext 
      onDragStart={this.onDragStart}
      // onDragUpdate={this.onDragUpdate}
      onDragEnd={this.onDragEnd}>
    <Container>
    {this.state.columnOrder.map((columnId, index) => {
      const column = this.state.columns[columnId];
      const exercises = column.exerciseIds.map(exerciseId => this.state.exercises[exerciseId]);

      // const isDropDisabled = index <this.state.homeIndex;
      const isDropDisabled =false;
      return <Column key={column.id} column={column} exercises={exercises} isDropDisabled={isDropDisabled} />; 
    })}
      </Container>
    </DragDropContext>
    );
  }
}


ReactDOM.render(<App/> , document.getElementById('root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
