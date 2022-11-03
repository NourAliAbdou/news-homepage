const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        "@components":
            "src/components/index.ts"
        ,
        "@components/*":
            "src/components/*"
        ,
        "@constants":
            "src/constants/index.ts"
        ,
        "@constants/*":
            "src/constants/*"
        ,
        "@styles":
            "src/styles/index.ts"
        ,
        "@styles/*":
            "src/styles/*"
        ,

    })(config);

    return config;
};