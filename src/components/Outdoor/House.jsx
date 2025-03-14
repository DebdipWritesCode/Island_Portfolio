import Bedroom from "../House/Bedroom"
import Kitchen from "../House/Kitchen"
import Roof from "../House/Roof"
import Walls from "../House/Walls"

const House = (props) => {
  return (
    <>
      <Walls nodes={props.nodes} />
      <Roof nodes={props.nodes} />
      <Kitchen nodes={props.nodes} />
      <Bedroom nodes={props.nodes} />
    </>
  )
}

export default House