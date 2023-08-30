import './index.css'

const VisitCountry = props => {
  const {visitedInfo, onRemove} = props
  const onRemoveBtn = () => {
    onRemove(visitedInfo.id)
  }
  return (
    <div>
      <img src={visitedInfo.imageUrl} alt={visitedInfo.name} />
      <p>{visitedInfo.name}</p>
      <button type="button" onClick={onRemoveBtn}>
        Remove
      </button>
    </div>
  )
}

export default VisitCountry
