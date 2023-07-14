import { useState } from '#app';

export default function useDarkMode() {
  type Theme = 'light' | 'dark';

  const LOCAL_STORAGE_THEME_KEY = 'theme';

  const darkMode = useState(LOCAL_STORAGE_THEME_KEY, () => false);

  const setTheme = (theme: Theme) => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);

    darkMode.value = theme === 'dark';
  };

  return {
    darkMode,
    setTheme,
    LOCAL_STORAGE_THEME_KEY,
  };
}
