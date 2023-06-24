const TodoHeader = ({title,stack}) =>{

  return (<div className='container'>
    <div>{title}</div>
    <div>{stack}</div>
  </div>)

}

export default TodoHeader