import React,{useState,useCallback} from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title'

function ParentComp() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(500);

  const incrementAge = useCallback(()=>{
    setAge(age +1 )
  },[age])
  const incrementSalary = useCallback(()=>{
    setSalary(salary + 100)
  },[salary])
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>

    </div>
  )
}

export default ParentComp
