import Line from '../Line/Line'

const HeaderNews = ({name}) => {
  return (
    <div className='text-5xl mt-5 font-semibold text-center'>News {name} 
    <Line/>
     </div>
  )
}

export default HeaderNews