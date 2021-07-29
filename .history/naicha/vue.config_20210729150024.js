const path = require('path');
module.exports={
    pluginOptions:{
        "style-resources-loader":{
            preProcesor:"stylus",
            patterns:[[path.resolve(__dirname,"src/assets/stylus/index.sytl")]]
        }
    }
};
