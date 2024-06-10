const Tabs = ({ tabs, activeTab, onTabClick }) => {
    return (
        <div className="flex space-x-4 border-b">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`p-2 ${activeTab === tab ? 'border-b-2 border-blue-500' : ''
                        }`}
                    onClick={() => onTabClick(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
