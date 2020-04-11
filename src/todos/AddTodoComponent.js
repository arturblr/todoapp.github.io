import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


class AddTodoComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onClickAddTodo = this.onClickAddTodo.bind(this);
    }

    onChangeInput(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    onClickAddTodo() {
        this.setState({
            inputValue: ''
        });
        const newTodo = {
            status: false,
            title: this.state.inputValue
        };
        this.props.addTodo(newTodo);
    }

    render () {
        return (
            <Grid alignItems="center" item xs={12} container spacing={3}>
                <Grid item xs={8}>
                    <TextField onChange={this.onChangeInput}
                        value={this.state.inputValue}
                        fullWidth label="Todo title"
                        variant="outlined" 
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={this.onClickAddTodo} variant="contained" >
                        Add todo
                    </Button>
                </Grid>
            </Grid>
        )
    }
}


export default AddTodoComponent