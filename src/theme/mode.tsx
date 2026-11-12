import React, {
    FC,
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

/**
 * Режим темы: системная / светлая / тёмная.
 *
 * Выбор хранится в localStorage (ключ `theme` по умолчанию) и применяется атрибутом `data-theme`
 * на <html>. Режим «системная» слушает prefers-color-scheme и переключается на лету. Чтобы тёмная
 * тема не мигала белым до запуска React, приложение ставит атрибут заранее скриптом из
 * `getThemeModeInitScript` (встроенным в <head> или отдельным файлом, если CSP не пускает инлайн).
 */

export type TThemeMode = 'system' | 'light' | 'dark';

type TThemeModeContext = { mode: TThemeMode; setMode: (mode: TThemeMode) => void; dark: boolean };

const ThemeModeContext = createContext<TThemeModeContext>({
    mode: 'system',
    setMode: () => undefined,
    dark: false,
});

export const useThemeMode = () => useContext(ThemeModeContext);

const DARK_QUERY = '(prefers-color-scheme: dark)';

const isMode = (value: unknown): value is TThemeMode =>
    value === 'system' || value === 'light' || value === 'dark';

const readMode = (storageKey: string): TThemeMode | null => {
    try {
        const stored = localStorage.getItem(storageKey);
        return isMode(stored) ? stored : null;
    } catch {
        // приватный режим или запрещённое хранилище — остаёмся на системной
        return null;
    }
};

const prefersDark = () => typeof window !== 'undefined' && window.matchMedia(DARK_QUERY).matches;

type TProps = {
    children: ReactNode;
    storageKey?: string;
    /** Режим до чтения хранилища и для нового пользователя. */
    defaultMode?: TThemeMode;
};

export const ThemeModeProvider: FC<TProps> = ({ children, storageKey = 'theme', defaultMode = 'system' }) => {
    const [mode, setModeState] = useState<TThemeMode>(defaultMode);
    const [systemDark, setSystemDark] = useState(false);

    useEffect(() => {
        const stored = readMode(storageKey);
        if (stored) setModeState(stored);
        setSystemDark(prefersDark());

        const mq = window.matchMedia(DARK_QUERY);
        const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, [storageKey]);

    const dark = mode === 'dark' || (mode === 'system' && systemDark);

    useEffect(() => {
        document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    }, [dark]);

    const setMode = useCallback(
        (next: TThemeMode) => {
            setModeState(next);
            try {
                localStorage.setItem(storageKey, next);
            } catch {
                // не сохранится — выбор проживёт до перезагрузки
            }
        },
        [storageKey],
    );

    const value = useMemo(() => ({ mode, setMode, dark }), [mode, setMode, dark]);
    return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
};

/** Текст скрипта, который до первой отрисовки ставит `data-theme` на <html> по сохранённому выбору. */
export const getThemeModeInitScript = (storageKey = 'theme') =>
    `(function(){var m;try{m=localStorage.getItem(${JSON.stringify(storageKey)})}catch(e){}` +
    `var d=m==='dark'||(m!=='light'&&window.matchMedia('${DARK_QUERY}').matches);` +
    `document.documentElement.dataset.theme=d?'dark':'light'})();`;
