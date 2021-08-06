module.exports = {
    // purge: {
    //     enabled: true,
    //     content: [
    //         './dist/*.html',
    //         './dist/error/*.html',
    //     ],
    // },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                '3xl': '2000px',
            },
            backgroundImage: theme => ({
                'home': "url('../assets/img/laptop-backlight-dark.jpg')",
            }),
            maxWidth: {
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
