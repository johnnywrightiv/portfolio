import { useThemeContext } from '../contexts/ThemeContext';
import { capitalize } from '../utils/capitalize';

const ThemeSelector = () => {
  const { theme, changeTheme, systemTheme, availableThemes } = useThemeContext();

  const getButtonLabel = (t) => {
    if (t === 'system') return 'System Settings';
    return `${capitalize(t)} Mode`;
  };

  return (
    <div className="text-green-500">
      <p className='font-bold'>Current Theme: {theme === "system" ? `${theme} (${systemTheme})` : theme}</p>
      {availableThemes.map(t => (
        <div key={t}>
          <button onClick={() => changeTheme(t)}>
            {getButtonLabel(t)}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ThemeSelector;