import React, { Component } from 'react';

class TodoItemList extends Component{
    render(){
        const{ todos, onToggle, onRemove } = this.props;
        // todos: todo 객체들이 들어가는 배열
        // onToggle: 체크박스를 키고 끄는 함수
        // onRemove: 아이템을 삭제시키는 함수
        return (
            <div>
            <TodoItem text="안녕"/>
            <TodoItem text="리액트"/>
            <TodoItem text="방가"/>
            </div>
        );
    }
};

export default TodoItemList;