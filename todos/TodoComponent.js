import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField'

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowDescription: false,
            descriptionValue: '',
            isEditTitle: false,
            title: props.title
        };

        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
        this.onShowHideDescription = this.onShowHideDescription.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onStartEditTitle = this.onStartEditTitle.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onUpdateTitle = this.onUpdateTitle.bind(this);
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeCheckbox(e) {
        this.props.updateTodo({
            id: this.props.id,
            status: e.target.checked
        })
    }

    onDeleteTodo() {
        this.props.deleteTodo(this.props.id);
    }

    onShowHideDescription() {
        this.setState({
            isShowDescription: !this.state.isShowDescription
        });
    }

    onChangeInput(e) {
        this.setState({
            descriptionValue: e.target.value
        });
        this.props.updateTodo({
            id: this.props.id,
            description: e.target.value
        })
    }

    onStartEditTitle() {
        this.setState({
            isEditTitle: true
        }) 
    }

    onUpdateTitle() {
        this.props.updateTodo({
            id: this.props.id,
            title: this.state.title
        });
        this.setState({
            isEditTitle: false
        })
    }

    render() {
        return (
                <div className="todoContent">

                   
                    <div className={`todoComponentTitleContainer ${this.props.status ? 'done' : ''}`}>
                    <div className="Checkbox">              
                    <Checkbox 
                        checked={this.props.status}
                        onChange={this.onChangeCheckbox}
                        color="primary"
                    />

                    {this.state.isEditTitle 
                    ? (
                        <div>
                            <TextField label="Title"
                                       value={this.state.title}
                                       onChange={this.onChangeTitle}
                            />
                            <Button onClick={this.onUpdateTitle}>Save</Button>
                        </div>
                        
                    ) 
                    : (
                        <div className="todoComponentTitle" onClick={this.onStartEditTitle}>
                        {this.props.title}
                        </div>
                    ) }
                    </div>    
                    
                    <div>
                    <Button color="primary" onClick={this.onShowHideDescription}>
                            {this.state.isShowDescription ? 'Hide' : 'Show more'}
                    </Button>
                      
                    <IconButton onClick={this.onDeleteTodo}>
                        <CancelIcon />
                    </IconButton>
                    </div>

                    </div>
                
                    {this.state.isShowDescription && (
                            <div>
                                <TextField onChange={this.onChangeInput}
                                    value={this.state.descriptionValue}
                                    label="Multiline"
                                    variant="outlined" 
                                    rowsMax="5"
                                    multiline
                                    fullWidth
                                />
                            </div>
                        )}

                   

                </div>

                
                 
           
        );
    }
}



export default TodoComponent