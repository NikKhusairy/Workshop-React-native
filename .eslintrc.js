module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
        "comma-dangle": [2, "never"],
        "react/prop-types": "off",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"]}]
    },
    "no-use-before-define": [
        "error",
        { functions: true, classes: true, variables: false }
    ]
};