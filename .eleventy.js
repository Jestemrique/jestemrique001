const {EleventyI18nPlugin} = require('@11ty/eleventy');

module.exports = eleventyConfig => {

    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: 'es',
        errorMode: 'allow-fallback'
    });

    eleventyConfig.addCollection("languageCollection", function (collection) {
        return collection.getAll().filter((post) => post.data.lang);
      });



    eleventyConfig.addFilter("debug", (content) => `${JSON.stringify(content, null , 4)}`);

    return {
        dir: {
            input: 'src',
            output: 'dist'
        },
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk'
    };
};