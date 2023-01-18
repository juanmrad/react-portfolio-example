import './Color.css';

function Color(props) {

  let handleClick = () => {
    props.lock(props.position)
  }

  return (
    <div
      onClick={handleClick}
      className="circle"
      style={{ backgroundColor: props.color }}>
      {props.locked ? 'locked' : ''}
    </div>
  )
}

export default Color;