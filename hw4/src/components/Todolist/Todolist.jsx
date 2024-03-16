import React, { PureComponent } from "react";

export default class Todolist extends PureComponent {
    constructor(){
        super();

        this.handleTitle = this.handleTitle.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    state = {
        list: [],
        newTodo: {
            title: ``,
            completed: false,
        }
    };
  
    async componentDidMount() {
        try {
            let request = await fetch(`https://65ef5bb3ead08fa78a5055fb.mockapi.io/todos`),
              response = await request.json();
      
            console.log(response.slice(0, 10));

            this.setState({
                list: response.slice(0, 10),
              });
          } catch (err) {
            console.log(err);
          }
    }

    async handleDelete(id) {
        try {
          await fetch(`https://65ef5bb3ead08fa78a5055fb.mockapi.io/todos/${id}`, {
            method: `DELETE`,
          });
    
          this.setState((actualState) => ({
            list: actualState.list.filter((item) => item.id !== id),
          }));
        } catch (err) {
          console.log(err);
        }
      }
    
    async handleComplete(item){
        try{
            let request = await fetch(`https://65ef5bb3ead08fa78a5055fb.mockapi.io/todos/${item.id}`, {
                method: `PUT`,
                body: JSON.stringify({completed: !item.completed}),
                headers: {
                    "Content-type": "application/json"
                }
            }),
            response = await request.json();

            this.setState(actualState => ({
                list: actualState.list.map(el => {
                    if(el.id === response.id) el=response;
                    return el;
                })
            }));

        } catch(err){
            console.log(err);
        }
    }

    async handleTitleChange(event, item) {
        try{
            let request = await fetch(`https://65ef5bb3ead08fa78a5055fb.mockapi.io/todos/${item.id}`, {
                method: `PUT`,
                body: JSON.stringify({title: event.target.value}),
                headers: {
                    "Content-type": "application/json"
                }
            }),
            response = await request.json();

            this.setState(actualState => ({
                list: actualState.list.map(el => {
                    if(el.id === response.id) el=response;
                    return el;
                })
            }));

        } catch(err){
            console.log(err);
        }
    }

    handleTitle(e){
        this.setState(actualState => ({
            newTodo: {...actualState.newTodo, title: e.target.value}
        }))
    }

    handleCompleted(e){
        this.setState(actualState => ({
            newTodo: {...actualState.newTodo, completed: e.target.checked}
        }))
    }

    async handleSubmit(e){
        e.preventDefault();

        try{
            let request = await fetch(`https://65ef5bb3ead08fa78a5055fb.mockapi.io/todos`, {
                method: `POST`,
                body: JSON.stringify(this.state.newTodo),
                headers: {
                    "Content-type": "application/json"
                }
            }),
            response = await request.json();
            
            this.setState(actualState => ({
            list: [...actualState.list, response]
            }), () => {
            this.setState({
                newTodo: {
                    title: ``,
                    completed: false,
                }
            })
            })

        } catch(err){
            console.log(err);
        }
    }
  
    render() {
  
      const { list, newTodo } = this.state;
  
      return <>  
        <form onSubmit={this.handleSubmit}>
            <label>
                Title: <input type="text" value={newTodo.title} onChange={this.handleTitle} />
            </label>
            <label>
                Completed: <input type="checkbox" checked={newTodo.completed} onChange={this.handleCompleted} />
            </label>
            <button>Add todo</button>
        </form>
        {list.length ? (
            <ul>
                {list.map((item) => (
                <li key={item.id}>
                    {item.title}{" "}
                    <input type="checkbox" defaultChecked={item.completed} onChange={() => this.handleComplete(item)} />
                    <input type="text" onChange={() => this.handleTitleChange(event, item)} />
                    <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                </li>
                ))}
            </ul>
        ) : null}
        </>
    }
  }