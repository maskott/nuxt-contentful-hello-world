#!/usr/bin/env node

require('dotenv').config();
const contentful = require("contentful");
const Axios = require("axios");
const fs = require("fs");
const IMG_DIR = './assets/contentful-images';

let client = contentful.createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CD_ACCESS_TOKEN
});

(async () => {

    if(!fs.existsSync(IMG_DIR)){
        fs.mkdirSync(IMG_DIR);
    }

    const { items } = await client.getAssets({ limit: 1000 });

    let images = items.filter(({ fields }) => fields.file && ['image/png', 'image/jpeg'].indexOf(fields.file.contentType) !== -1 )
                    .map(({ fields }) => ({
                        name: fields.file.fileName,
                        url:  fields.file.url
                    }));
    

    images.forEach(img => {
        let imgUrl = 'https:' + img.url;
        Axios({
            url: imgUrl,
            method: 'GET',
            responseType: 'stream'
        }).then(res => {
            let loc = IMG_DIR + '/' + img.name;
            return new Promise((resolve, reject) => {
                res.data.pipe(fs.createWriteStream(loc));
            });
        });
    });

})();
