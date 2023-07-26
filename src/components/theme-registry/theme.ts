import {
  ThemeOptions,
  createTheme,
  SimplePaletteColorOptions,
  PaletteOptions,
} from "@mui/material/styles";
import { fiFI } from "@mui/material/locale";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h0: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h0?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h0: true;
  }
}

interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
}
const createPalette = (): DefaultPaletteOptions => {
  return {
    mode: "light",
    primary: {
      main: "#CECFDA",
      light: "#F4F7FA",
    },
    secondary: {
      main: "#1122AA",
      dark: "#124",
      light: "#F4FAFA",
      contrastText: "#FFF",
    },
    text: {
      primary: "#112244",
      secondary: "#6C6E7D",
    },
    grey: {
      700: "#494B57",
      600: "#6C6E7D",
    },
  };
};

export const palette = createPalette();

interface DefaultThemeOptions extends ThemeOptions {
  palette: DefaultPaletteOptions;
}

const apexTheme: DefaultThemeOptions = createTheme(
  {
    palette,
    typography: {
      fontFamily: "inherit",
      h0: {
        fontWeight: "700",
        fontSize: "3rem",
        lineHeight: "125%",
      },
      h1: {
        fontWeight: "700",
        fontSize: "2rem",
        lineHeight: "125%",
      },
      h2: {
        fontWeight: "700",
        fontSize: "1.25rem",
        lineHeight: "140%",
      },
      subtitle1: {
        fontWeight: "500",
        fontSize: "1.25rem",
        lineHeight: "160%",
      },
      body1: {
        fontWeight: "400",
        fontSize: "1rem",
        lineHeight: "150%",
      },
      button: {
        textTransform: "none",
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h0: "h1",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: "#FFFFFF",
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${palette.primary?.main} !important`,

              "&.Mui-focused": {
                border: `1px solid ${palette.primary?.main} !important`,
              },
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "&:hover fieldset": {
              border: `1px solid ${palette.primary?.main} !important`,
            },
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "#051389",
            },
          },
        },
      },

      MuiToolbar: {
        styleOverrides: {
          root: {
            padding: "2rem 6.5rem",
            "@media (min-width: 600px)": {
              padding: "2rem 6rem 2rem 6.5rem",
            },
          },
        },
      },
    },
  },
  fiFI
);

export default apexTheme;
