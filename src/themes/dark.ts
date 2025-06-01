export default {
  colors: {
    white: '#ffffff', // Cor base para textos claros ou fundos claros
    black: '#000000', // Cor base para textos escuros ou fundos escuros
    primary: '#0adfe3', // Cor principal, usada apenas em botões ou componentes do tipo
    secondary: '#2e2e2e', // Cor secundária para fundos menos destacados
    tertiary: '#1e1e1e', // Cor terciária para componentes ou sombras
    textPrimary: '#ffffff', // Texto principal em fundos escuros
    textSecondary: '#b3b3b3', // Texto secundário ou descritivo
    hover: '#292929', // Cor genérica para estados de hover, adaptada ao tema dark
    error: '#ff4c4c', // Cor para mensagens de erro
    success: '#4caf50', // Cor para mensagens de sucesso
    border: '#2e2e2e', // Cor para bordas e divisores
    tecnoVesteCast: '#53d9b8', // Cor específica mantida
    backgroundPrimary: '#121212', // Fundo principal do tema dark
    backgroundSecondary: '#1e1e1e', // Fundo secundário para seções
    link: '#1ba27e', // Cor para links
    buttonText: '#1A1A1A', // Cor do texto de botões
    disabled: '#888888', // Cor para itens desabilitados
    active: '#4caf50', // Cor para elementos ativos (ex: botões pressionados)
  },
  fonts: {
    sizes: {
      mobile: {
        s: '12px',
        m: '14px',
        l: '16px',
      },
      desktop: {
        s: '14px',
        m: '16px',
        l: '20px',
        xl: '24px', // Tamanho extra grande
      },
    },
    weights: {
      regular: 400, // Peso normal
      bold: 700, // Peso negrito
      light: 300, // Peso leve
      semibold: 600, // Peso seminegrito
    },
  },
  spacing: {
    xs: '4px', // Espaçamento extra pequeno
    sm: '8px', // Espaçamento pequeno
    md: '16px', // Espaçamento médio
    lg: '24px', // Espaçamento grande
    xl: '32px', // Espaçamento extra grande
    xxl: '48px', // Espaçamento bem grande
  },
  borderRadius: {
    sm: '4px', // Borda arredondada pequena
    md: '8px', // Borda arredondada média
    lg: '16px', // Borda arredondada grande
    xl: '24px', // Borda arredondada extra grande
  },
  shadows: {
    sm: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Sombra leve
    md: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Sombra média
    lg: '0px 8px 16px rgba(0, 0, 0, 0.3)', // Sombra forte
    xl: '0px 16px 32px rgba(0, 0, 0, 0.4)', // Sombra extra forte
  },
  transitions: {
    fast: '0.3s ease', // Transição rápida
    medium: '0.5s ease', // Transição média
    slow: '0.8s ease', // Transição lenta
  },
  zIndex: {
    modal: 1000, // Modal e sobreposições
    overlay: 500, // Sobreposições
    dropdown: 200, // Dropdowns
    tooltip: 150, // Tooltips
    base: 10, // Padrão
  },
};
