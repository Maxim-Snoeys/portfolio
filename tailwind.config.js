module.exports = {
    purge: {
        enabled: false,
        content: [
            './dist/*.html',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                '3xl': '2000px',
            },
            backgroundImage: theme => ({
                'home': "url('../assets/img/laptop-backlight-dark.jpg')",
            }),
            colors: {
                'palette1': '#F798E5',
                'palette2': '#AE83A5',
                'palette3': '#4D3A4D',
                'palette4': '#e7e7e7',
            },
            borderColor: theme => ({
                'palette1': '#F798E5',
                'palette2': '#AE83A5',
                'palette3': '#4D3A4D',
                'palette4': '#e7e7e7',
            }),
            maxWidth: {
                'xxs': '15rem',
                '8xl': '85rem'
            },
            minHeight: {
                '50': '50vh'
            }
        },
        fontFamily: {
            'titel': ['Staatliches', 'cursive'],
            'titelklein': ['Tourney', 'cursive']
        }
    },
    variants: {
        extend: {
            borderWidth: ['hover', 'focus', 'active', 'visited'],
        },
    },
    plugins: [
        // ...
        require('tailwindcss'),
        require('autoprefixer'),
        require('@tailwindcss/forms'),
        // ...
    ]
}
