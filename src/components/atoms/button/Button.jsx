const button = ({handleClik, name, className, ...rest}) => {

  return (
    <button onClick={handleClik} className={`bg-yellow-300 w-max h-12 font-medium text-xl px-5 rounded-lg text-black ${className} `} {...rest}>{name}</button>
  )
}

export default button