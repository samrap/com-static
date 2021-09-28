module.exports = {
    purge: ["./public/**/*.html"],
    theme: {
        extend: {
            colors: {
                gray: {
                    '50':  '#f7f3f2',
                    '100': '#e5e0df',
                    '200': '#cac5c4',
                    '300': '#ada8a8',
                    '400': '#8f8b8b',
                    '500': '#726e6e',
                    '600': '#565151',
                    '700': '#3c3838',
                    '800': '#272525',
                    '900': '#171414',
                  },
            },
        },
        fontFamily: {
            'body': ['Roboto', 'sans-serif'],
        },
    },
    variants: {},
    plugins: [],
};
