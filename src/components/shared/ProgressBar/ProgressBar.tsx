import "./ProgressBar.scss"

type ProgressBarProps = {
    title: string;
    percent: number
}
const ProgressBar = ({title, percent}: ProgressBarProps) => {
  return (
    <div>
      <p>{title}</p>
      <div className="progressbar">
        <span className="percent" style={{width: `${percent}%`}}></span>
      </div>
    </div>
  )
}

export default ProgressBar
