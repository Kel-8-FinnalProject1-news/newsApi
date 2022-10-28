import { Line, Table } from '../../components'

const Saved = () => {
  const data = Object.keys(localStorage)
  const savedNews = data.filter((item) =>  item !== 'token')
  
  
  return (
    <div>
        <table className='w-full text-left text-2xl mt-10'>
          <thead className=''>
            <tr className='border-b-4 py-10 border-current  bg-slate-500 h-10 '>
                <th className='w-2/12'>Source</th>
                <th className='w-4/12'>Title</th>
                <th className='w-5/12'>Description</th>
                <th className='w-1/12'>action</th> 
            </tr>
          </thead>
          {savedNews?.map((item, i)=>{
            const data = JSON.parse(localStorage.getItem(item))
             if(typeof data === 'object'){
              return(
                <Table key={i} data={data[data.length -1 ]}/>
              )
             } 
            })}
      </table>
    </div>
  )
}

export default Saved