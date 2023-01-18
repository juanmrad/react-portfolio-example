import './MemoryCard.css';
import logo from './dc-logo.svg';

function MemoryCard(props) {

  let _handleClick = () => {
    props.pickCard(props.index)
  }

  return (
    <div className="MemoryCard">
      <div className={`MemoryCardInner ${props.isFlipped ? 'flipped' : ''} `} onClick={_handleClick}>
        <div className="MemoryCardBack">
          <img alt="" src={logo} />
        </div>
        <div className="MemoryCardFront">
          {props.symbol}
        </div>
      </div>
    </div>
  )
}

export default MemoryCard;

