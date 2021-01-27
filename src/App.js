import React, { Component } from 'react';
import styled from 'styled-components';
import initialData from './initial_data';
import { DragDropContext } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
import Column from './column';
import {Button, goLink} from "./components/Button";


const Container = styled.div`
  display:flex;
  flex-direction:column;
`;

class App extends Component {

  constructor(props){
    super(props);
    this.child = React.createRef();
  }

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
    const { destination } = update;
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

    const { destination, source, draggableId } = result;

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

  onClickLetsGo = () => {
    console.log("is onClickLetsgo called?");
    this.child.current.saveRoutine();
  }

  render() {
    return (
      <>
      <DragDropContext
        onDragStart={this.onDragStart}
        // onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}>
        <Container>
          {this.state.columnOrder.map((columnId, index) => {
            const column = this.state.columns[columnId];
            const exercises = column.exerciseIds.map(exerciseId => this.state.exercises[exerciseId]);

            // const isDropDisabled = index <this.state.homeIndex;
            const isDropDisabled = false;
            return <Column ref={this.child} key={column.id} column={column} exercises={exercises} isDropDisabled={isDropDisabled} />;
          })}
        </Container>
      </DragDropContext>
      <Button
        onClick={this.onClickLetsGo}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--large"
      >
        LET'S GO!!
      </Button>
      </>
    );
  }
}

export default App;
