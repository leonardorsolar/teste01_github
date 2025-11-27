import React from 'react';

interface HeaderProps {
  onSearch: (term: string) => void;
  searchTerm: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch, searchTerm }) => {
  return (
    <header className="flex flex-none items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 py-3">
      <div className="flex items-center gap-4">
        <div className="text-primary">
          <span className="material-symbols-outlined !text-3xl">
            dashboard_customize
          </span>
        </div>
        <h1 className="text-lg font-bold">ProjectFlow</h1>
      </div>
      <div className="flex flex-1 justify-end gap-4 items-center">
        <div className="relative w-full max-w-sm hidden md:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="material-symbols-outlined text-text-light-secondary dark:text-dark-secondary">
              search
            </span>
          </div>
          <input
            className="w-full rounded-lg border-0 bg-background-light dark:bg-background-dark py-2 pl-10 pr-4 text-sm placeholder:text-text-light-secondary placeholder:dark:text-dark-secondary focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
            placeholder="Search tasks..."
            type="search"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light-secondary dark:text-dark-secondary hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light-secondary dark:text-dark-secondary hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
        <div
          className="h-10 w-10 rounded-full bg-cover bg-center border border-border-light dark:border-border-dark"
          data-alt="User avatar image"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxxohjPCCzVK8T0B_HkMWD4o4MbZcG1EvMVHY2SGVGtdE9q2umnh9LFc-bbvwjnUOvu-jzQn6jYeeGO4CpSUywc73M_JUz2kmg-KIBYEcKorJ58R1a5r7c6457d6k41Qei9-AUJlj9UydIhrS10O6d86lK3bTVJfej01_GycR_ZMY7eHvah1XqZlaiVl5V9zbkY-ubjErHtwcCUy_mXBpJ5_U2iQON8tA1zE1o2QzKyBd8W4aPzSCxthx5CUJRH8rG_POqYQFVbOi3")' }}
        ></div>
      </div>
    </header>
  );
};

export default Header;