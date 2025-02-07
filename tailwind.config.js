/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brandprimary: "#00FFBB",
        brandaccent: "#8EFFA3",
        brandprimarydark: "#12615A",
        backcolor: "#001636",
        brandGrey: "#232323",
        brandStroke: "#7a7a7a",
        secondarybackcolor: "#1d304c",
      },
      fontFamily: {
        sans: ["RiftSoft-Regular", "system-ui", "sans-serif"],
        rift: ["RiftSoft-Regular", "system-ui", "sans-serif"],
        "rift-bold": ["RiftSoft-Bold", "system-ui", "sans-serif"],
        "rift-medium": ["RiftSoft-Medium", "system-ui", "sans-serif"],
        "rift-regular": ["RiftSoft-Regular", "system-ui", "sans-serif"],
        "rift-demi": ["RiftSoft-Demi", "system-ui", "sans-serif"],
        "rift-light": ["RiftSoft-Light", "system-ui", "sans-serif"],
        "roboto-regular": ["Roboto-Regular", "system-ui", "sans-serif"],
        "roboto-medium": ["Roboto-Medium", "system-ui", "sans-serif"],
        "montserrat-regular": ["Montserrat-Regular", "system-ui", "sans-serif"],
        "montserrat-medium": ["Montserrat-Medium", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
