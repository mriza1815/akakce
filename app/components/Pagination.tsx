export default function Pagination(
    {prevBtnColor, nextBtnColor, getPrevious, getNext}: 
    {prevBtnColor: string, nextBtnColor: string, getPrevious: () => void, getNext: () => void}
) {
  return (
    <ul className="flex justify-center justify-items-center mb-5">
        <li className={`mx-1 px-3 py-2 bg-gray-200 ${prevBtnColor} rounded-lg`}>
            <button className="flex items-center font-bold" onClick={getPrevious}>
                <span className="mx-1">Previous</span>
            </button>
        </li>
        <li className={`mx-1 px-3 py-2 bg-gray-200 ${nextBtnColor} rounded-lg`}>
            <button className="flex items-center font-bold" onClick={getNext}>
                <span className="mx-1">Next</span>
            </button>
        </li>
      </ul>
  );
}