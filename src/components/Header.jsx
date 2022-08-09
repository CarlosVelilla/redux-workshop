import { useDispatch } from "react-redux"
import { increaseCounter, decreaseCounter } from "../redux/counter/actions"

function Header() {
  const dispatch = useDispatch()

  return (
    <>
      <p>Header</p>
      <button onClick={() => dispatch(increaseCounter())}>+1</button>
      <button onClick={() => dispatch(decreaseCounter())}>-1</button>
    </>
  )
}
export default Header