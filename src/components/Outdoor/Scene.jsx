import Island from "./Island"

const Scene = (props) => {
  return (
    <>
      <Island nodes={props.nodes} />
    </>
  )
}

export default Scene