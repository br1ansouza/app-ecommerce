import { createContext, useState, useContext } from 'react'

// 1 - Criar contexto
const ThemeContext = createContext()

// 2 - Provedor do Contexto
// export function ThemeProvider() {
//     return ()
// }
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Hook personalizado
export const useTheme = () => useContext(ThemeContext)