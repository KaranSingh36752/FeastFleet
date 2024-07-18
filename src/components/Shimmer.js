const Shimmer = () => {
    return (
        <>
        <div data-testid="Shimmer" className="flex flex-wrap justify-center">
        {new Array(20)
        .fill("")
        .map((e, index) => (                      //always use partenthesis in map function
    <div key={index} className=" w-56 h-56 p-2 m-2 shadow-lg bg-gray-300 rounded-md">
        {""}
        </div>
  ))}
        </div>
        </>
    )
};

export default Shimmer;