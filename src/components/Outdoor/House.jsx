import Roof from "../House/Roof"
import Walls from "../House/Walls"

const House = (props) => {
  return (
    <>
      <Walls nodes={props.nodes} />
      <Roof nodes={props.nodes} />
    </>
  )
}

export default House