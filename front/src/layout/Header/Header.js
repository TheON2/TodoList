import { Container} from "./style";

const Header = ({title,stack,user}) =>{
  return (<Container>
    <div>{title}</div>
    <div>{stack}</div>
  </Container>)
}

export default Header