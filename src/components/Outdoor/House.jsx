import Bathroom from "../House/Bathroom"
import Bedroom from "../House/Bedroom"
import Floor from "../House/Floor"
import Kitchen from "../House/Kitchen"
import LivingRoom from "../House/LivingRoom"
import Lunchroom from "../House/Lunchroom"
import Mug from "../House/Mug"
import Roof from "../House/Roof"
import ShaderSmoke from "../House/ShaderSmoke"
import ShaderTab from "../House/ShaderTab"
import Soap from "../House/Soap"
import VinylsCovers from "../House/Vinylcovers"
import Walls from "../House/Walls"
import Windows from "../House/Windows"

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
      <Floor nodes={props.nodes} />
      <Windows nodes={props.nodes} />
      <VinylsCovers nodes={props.nodes} />
      <Mug nodes={props.nodes} />
      <Soap nodes={props.nodes} />
      <ShaderTab />
      <ShaderSmoke />
    </>
  )
}

export default House