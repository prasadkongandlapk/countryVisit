import './index.css'

const VisitList = props => {
  const {info, onVisit} = props

  const onClickBtn = () => {
    onVisit(info.id)
  }

  return (
    <div>
      <div className="countries-li">
        <p>{info.name}</p>
        <button className="button-visit" type="button" onClick={onClickBtn}>
          Visit
        </button>
      </div>
      <hr />
    </div>
  )
}

export default VisitList
