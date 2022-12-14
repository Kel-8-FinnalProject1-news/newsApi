const input = ({HandleInput, value, className, ...rest}) => {
  return (
    <input onChange={HandleInput} value={value}  className={`text-black border-slate-500 w-full px-3 h-12 text-xl font-semibold flex justify-center tracking-widest rounded-lg ${className}`}  type="text" {...rest}/>
  )
}

export default input