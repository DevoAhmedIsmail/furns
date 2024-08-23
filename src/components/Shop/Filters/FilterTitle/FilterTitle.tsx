import "./FilterTitle.scss"
const FilterTitle = ({title}: {title: string}) => {
  return (
    <div className='border-b border-[#ebebeb]'>
      <h3 className='relative pb-3 uppercase p-medium-14 filter__title tracking-[1.2px]'>{title}</h3>
    </div>
  )
}

export default FilterTitle
