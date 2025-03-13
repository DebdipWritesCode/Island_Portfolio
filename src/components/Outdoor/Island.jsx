import Bush from "../Island/Bush"
import Outdoor from "../Island/Outdoor"
import Palm from "../Island/Palm"
import Rock from "../Island/Rock"
import Sand from "../Island/Sand"

const Island = (props) => {
  return (
    <>
      <Sand nodes={props.nodes} />
      <Rock nodes={props.nodes} />
      <Bush nodes={props.nodes} />
      <Palm nodes={props.nodes} />
      <Outdoor nodes={props.nodes} />
    </>
  )
}

export default Island