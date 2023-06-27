import {Container} from "../redux/styles";

const TodoHeader = ({title,stack}) =>{
  return (<Container>
    <div>{title}</div>
    <div>{stack}</div>
  </Container>)

}

export default TodoHeader