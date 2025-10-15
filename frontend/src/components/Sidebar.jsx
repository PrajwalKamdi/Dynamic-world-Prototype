import { ChevronDown, ChevronRight } from "lucide-react";

const Sidebar = ({
  sidebarData,
  expandedItems,
  toggleExpand,
  handleItemClick,
  isLoading = false,
}) => {
  return (
    <aside className="w-full lg:w-72 h-full">
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 overflow-hidden min-h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="text-sm sm:text-base font-bold tracking-wide text-center">
              About DYNAMIC WORLD
            </h2>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-blue-400/50 via-blue-300/50 to-cyan-300/50" />
        </div>

        {/* Body */}
        <div className="p-2 sm:p-3">
          {isLoading ? (
            <div className="p-4">
              <div className="flex flex-col gap-3 animate-pulse">
                <div className="h-3.5 w-2/3 rounded bg-gray-200" />
                <div className="space-y-2">
                  <div className="h-3 w-5/6 rounded bg-gray-100" />
                  <div className="h-3 w-3/4 rounded bg-gray-100" />
                  <div className="h-3 w-4/6 rounded bg-gray-100" />
                </div>
                <div className="h-3.5 w-1/2 rounded bg-gray-200 mt-2" />
                <div className="space-y-2">
                  <div className="h-3 w-5/6 rounded bg-gray-100" />
                  <div className="h-3 w-2/3 rounded bg-gray-100" />
                </div>
              </div>
            </div>
          ) : sidebarData && sidebarData.length > 0 ? (
            <ul className="space-y-1">
              {sidebarData.map((section, index) => {
                const isOpen = !!expandedItems[index]; // keep existing API
                const items = Array.isArray(section.items) ? section.items : [];
                const panelId = `section-panel-${index}`;
                const buttonId = `section-button-${index}`;

                return (
                  <li
                    key={`${section.title}-${index}`}
                    className="rounded-lg border border-transparent hover:border-gray-200 transition"
                  >
                    <button
                      id={buttonId}
                      onClick={() => toggleExpand(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className={`group w-full flex items-center justify-between gap-2 px-3 py-2.5 sm:px-3.5 sm:py-3 rounded-lg text-left transition-colors
                        ${isOpen ? "bg-gray-50" : "hover:bg-gray-50"}
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400`}
                    >
                      <span className="text-gray-800 text-sm sm:text-[15px] font-medium truncate">
                        {section.title}
                      </span>

                      <span className="flex items-center gap-2 shrink-0">
                        {items.length > 0 && (
                          <span className="hidden sm:inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                            {items.length}
                          </span>
                        )}
                        {isOpen ? (
                          <ChevronDown className="w-4 h-4 text-gray-500 transition-transform" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-0.5" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="ml-2.5 pl-2.5 sm:ml-3 sm:pl-3 border-l border-gray-200 pb-2"
                      >
                        {items.length === 0 ? (
                          <div className="px-2.5 py-2 text-xs text-gray-500">
                            No items
                          </div>
                        ) : (
                          items.map((item) => {
                            const canClick = Boolean(section.type);
                            const onClick = () =>
                              canClick
                                ? handleItemClick(item, section.type)
                                : undefined;

                            return (
                              <button
                                key={`${section.title}::${item}`}
                                onClick={onClick}
                                disabled={!canClick}
                                className={`w-full text-left px-2.5 py-2 rounded-md text-[13px] sm:text-sm transition-colors truncate
                                  ${
                                    canClick
                                      ? "text-gray-700 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                                      : "text-gray-400 cursor-not-allowed"
                                  }`}
                                title={item}
                              >
                                {item}
                              </button>
                            );
                          })
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="p-4 text-center text-gray-500">
              <p className="text-sm">No data available</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
