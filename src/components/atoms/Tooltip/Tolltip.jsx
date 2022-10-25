export const Tolltip = ({message, children} ) => {

  return (
    <div className="relative  flex-col items-center group">
      {children}
      <div className="absolute bottom-0  flex-col items-center hidden mb-10 group-hover:flex">
      <span className="relative z-10 p-2 text-xl  leading-none text-white whitespace-no-wrap rounded-xl bg-gray-600 shadow-lg">{message}</span>
        <div className="w-6 h-6 -mt-5 rotate-45 bg-gray-600"></div>
      </div>
    </div>
  )
}

