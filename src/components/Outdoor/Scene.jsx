import House from "./House"
import Island from "./Island"

const Scene = (props) => {
  return (
    <>
      <Island nodes={props.nodes} />
      <House nodes={props.nodes} />
    </>
  )
}

export default Scene