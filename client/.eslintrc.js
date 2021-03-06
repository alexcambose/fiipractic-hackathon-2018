module.exports = {
    "extends": "airbnb",
    "rules": {
        "import/no-extraneous-dependencies": "off",
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "indent": ["error", 4, {"ignoredNodes": ["JSXElement *"], "SwitchCase": 1}]
    },
};