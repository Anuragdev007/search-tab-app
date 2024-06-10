import { useState } from 'react';

const Navbar = ({ onSearch, data }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSearch = (query) => {
        setSearchQuery(query);
        onSearch(query);
    };

    const handleFocus = () => {
        setShowDropdown(true);
    };

    const handleBlur = () => {
        setTimeout(() => setShowDropdown(false), 200);
    };

    const handleSelect = (item) => {
        setSearchQuery(item);
        onSearch(item);
        setShowDropdown(false);
    };

    return (
        <nav className="bg-zinc-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold">My WebApp</div>
                <div className="relative">
                    <input
                        type="text"
                        className="p-2 rounded"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    {showDropdown && (
                        <ul className="absolute left-0 right-0 bg-white shadow-lg max-h-60 overflow-y-auto border ">
                            {data.map((item, index) => (
                                <li
                                    key={index}
                                    className="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                                    onMouseDown={() => handleSelect(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
