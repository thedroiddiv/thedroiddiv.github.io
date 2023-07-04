interface Props {
  isDarkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
}

export const ThemeSwitch: React.FC<Props> = ({ isDarkMode, setDarkMode }) => {
  return (
    <div className="flex items-center">
      <label htmlFor="dark-mode-toggle" className="cursor-pointer">
        <input
          type="checkbox"
          id="dark-mode-toggle"
          className="hidden"
          checked={isDarkMode}
          onChange={(_) => setDarkMode(!isDarkMode)}
        />
        <div className="relative">
          <div className="w-10 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <div
              className={`${isDarkMode ? 'translate-x-3 ' : 'translate-x-0'}
                                         absolute left-1 w-5 h-5 bg-gray-700 rounded-full transform duration-300`}
            ></div>
            <div
              className={`${isDarkMode ? 'opacity-0' : 'opacity-100'} 
                                        absolute left-1 w-5 h-5 bg-yellow-100 rounded-full transform duration-300`}
            ></div>
            <div
              className={`${isDarkMode ? 'opacity-100' : 'opacity-0'}
                                         absolute right-1 w-5 h-5 bg-gray-700 rounded-full transform duration-300`}
            ></div>
          </div>
        </div>
      </label>
    </div>
  );
};
