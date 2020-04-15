import React from "react";
import Grid from '@material-ui/core/Grid';
import TodoComponent from "./TodoComponent";
import bg from "../img/bg.png"

const TodoListComponent = (props) => {
    const {todos, updateTodo, deleteTodo} = props;
    return (
        <Grid item xs={12} classes={{item: 'todo-list-container'}} >
            <div className='back-container'>
                <img style={{width: '100%'}} src={bg} />
            </div>
            {todos.map((item) => (
                <TodoComponent  status={item.status}
                                title={item.title}
                                description={item.description}
                                key={item.id}
                                id={item.id}
                                updateTodo={updateTodo}
                                deleteTodo={deleteTodo}
                 />
            ))}
        </Grid>
    );
};

export default TodoListComponent;