import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({}) => {
    return(
        <main className="TodoListTemplate">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;