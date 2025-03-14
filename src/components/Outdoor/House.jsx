import Bathroom from "../House/Bathroom"
import Bedroom from "../House/Bedroom"
import Kitchen from "../House/Kitchen"
import LivingRoom from "../House/LivingRoom"
import Lunchroom from "../House/Lunchroom"
import Roof from "../House/Roof"
import Walls from "../House/Walls"

const House = (props) => {
  return (
    <>
      <Walls nodes={props.nodes} />
      <Roof nodes={props.nodes} />
      <Kitchen nodes={props.nodes} />
      <Bedroom nodes={props.nodes} />
      <LivingRoom nodes={props.nodes} />
      <Lunchroom nodes={props.nodes} />
      <Bathroom nodes={props.nodes} />
    </>
  )
}

export default House