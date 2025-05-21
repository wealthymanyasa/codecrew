export const themeConfig = {
  // Base colors
  primary: {
    light: '#6366f1',
    dark: '#4f46e5',
  },
  secondary: {
    light: '#8b5cf6',
    dark: '#7c3aed',
  },
  accent: {
    light: '#3b82f6',
    dark: '#2563eb',
  },
  background: {
    light: '#ffffff',
    dark: '#0f172a',
  },
  surface: {
    light: '#f8fafc',
    dark: '#1e293b',
  },
  text: {
    primary: {
      light: '#1e293b',
      dark: '#f8fafc',
    },
    secondary: {
      light: '#64748b',
      dark: '#94a3b8',
    },
  },
  gradient: {
    primary: {
      light: 'from-blue-500 to-purple-500',
      dark: 'from-blue-600 to-purple-600',
    },
    secondary: {
      light: 'from-blue-400 to-purple-400',
      dark: 'from-blue-500 to-purple-500',
    },
  },
  // Component-specific colors
  button: {
    primary: {
      light: 'from-blue-500 to-purple-500',
      dark: 'from-blue-600 to-purple-600',
    },
    outline: {
      light: 'from-blue-500 to-purple-500',
      dark: 'from-blue-400 to-purple-400',
    },
  },
  input: {
    background: {
      light: 'bg-gray-50 dark:bg-gray-800/50',
      dark: 'bg-gray-800/50 dark:bg-gray-50/50',
    },
    border: {
      light: 'border-gray-200 dark:border-gray-700',
      dark: 'border-gray-700 dark:border-gray-200',
    },
  },
  card: {
    background: {
      light: 'bg-white dark:bg-gray-800/50',
      dark: 'bg-gray-800/50 dark:bg-white/50',
    },
    hover: {
      light: 'hover:bg-gray-50 dark:hover:bg-gray-700/50',
      dark: 'hover:bg-gray-700/50 dark:hover:bg-gray-50/50',
    },
  },
  // Utility classes
  // Utility classes for dark/light mode
  utilities: {
    text: 'text-gray-900 dark:text-gray-100',
    background: 'bg-white dark:bg-gray-900',
    border: 'border-gray-200 dark:border-gray-700',
    hover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
  },
};
