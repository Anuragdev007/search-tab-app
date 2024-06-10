const SearchResults = ({ results }) => {
    if (!results.length) return null;

    return (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg overflow-y-auto">
            <ul>
                {results.map((result, index) => (
                    <li key={index} className="p-2 border-b border-gray-200">
                        {result}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
