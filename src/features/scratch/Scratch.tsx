import { Button } from "semantic-ui-react"
import { useAppDispatch, useAppSelector } from "../../app/store/store"
import { decrement, increment, incrementByAmount } from "./testSlice"

export default function Scratch() {

  const {data} = useAppSelector(state => state.test)
  const dispatch =useAppDispatch()
  return (
    <>
        <h1>Scratch Page</h1>
        <h3>Data is : {data}</h3>
        <Button content='increment' color="green" onClick={()=> dispatch(increment())}/>
        <Button content='decrement' color="red" onClick={()=> dispatch(decrement())}/>
        <Button content='increment 5' color="teal" onClick={()=> dispatch(incrementByAmount(5))}/>
    </>
  )
}