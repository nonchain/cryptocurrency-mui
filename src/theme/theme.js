export const customTheme = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: "#fafffa",
          title: "#171717",
          text: {
            "100": "#565857",
            "200": "#686867"
          },
        }
      : {
          // dark mode
        }),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: "0 3rem",
          backgroundColor: "#fff",
          boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
});
