import { useSelector } from "react-redux"

function Footer() {
  const counter = useSelector(state => state.counter)

  return (
    <>
      <p>Footer</p>
      <div>Counter: {counter}</div>
    </>
  )
}

export default Footer