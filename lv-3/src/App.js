import React from 'react';
import FlowSelect from "./components/FlowSelect";
import CustomModal from "./components/CustomModal";
import Icon1 from "./static/Icon1";
import Icon2 from "./static/Icon2";
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton/CustomButton";

const App = () => {
  const icon = Icon1()
  const icon2 = Icon2()

  return (
    <div id='root'>
      <div id='buttonContainer' style={{width: '600px'}}>
        <h1>Button</h1>
        <CustomButton theme="" size='large' icon={icon} border='type1'>Large Primary Button</CustomButton>
        <CustomButton theme="type1" size='medium'>Medium</CustomButton>
        <CustomButton theme="type1" size='small' >Small</CustomButton>
        <CustomButton theme="" size='large' border='type2' icon={icon2}>Large Negative Button</CustomButton>
        <CustomButton theme="type2" size='medium' icon={icon}>Medium</CustomButton>
        <CustomButton theme="type2" size='small'>Small</CustomButton>
      </div>
      <div id='inputContainer' >
        <h1>Input</h1>
        <CustomInput></CustomInput>
      </div>
      <div id='modalContainer'>
        <h1>Modal</h1>
        <CustomModal name={'첫번째 모달'} size={'medium'} theme={'type1'} type={'type1'}/>
        <CustomModal name={'두번째 모달'} size={'medium'} theme={'type2'} type={'type2'}/>
      </div>
      <div style={{overflow: 'hidden', width: 'auto', height: '150px', border: '4px solid skyblue'}}>
        <h1>Select</h1>
        <FlowSelect/>
        <div id='warp'></div>
      </div>
    </div>
  );
};

export default App;