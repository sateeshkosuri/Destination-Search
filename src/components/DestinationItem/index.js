import './index.css'

const DestinationItem = props => {
  const {Destinations} = props
  const {imgUrl, name} = Destinations

  return (
    <li className="items-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="title">{name}</p>
    </li>
  )
}

export default DestinationItem
