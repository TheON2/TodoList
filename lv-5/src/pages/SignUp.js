import useInput from "../hooks/useInput";
import useMutate from "../hooks/useMutate";
import {addUser} from "../api/user";
import {v4 as uuidv4} from "uuid";

function Signup() {
  const [email, onChangeEmail] = useInput('');
  const [nickName, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [confirmPassword, onChangeConfirmPassword] = useInput('');
  const addUser_mutate = useMutate(addUser,'user');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your signup logic here
    if(password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = {
      email,
      password,
      nickName,
      id: uuidv4(),
    };

    addUser_mutate.mutate(newUser)
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={onChangeEmail} required />
        </div>
        <div>
          <label>NickName:</label>
          <input type="name" value={nickName} onChange={onChangeNickname} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={onChangePassword} required />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={onChangeConfirmPassword} required />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
