const { DateTime } = require("luxon");

module.exports = eleventyConfig => {
    //Date filters
    // eleventyConfig.addFilter("epDate", dateObj => {
    //     // return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    //     return DateTime.fromJSDate(dateObj).setLocale("en").toLocaleString(DateTime.DATE_MED)
    // });

    eleventyConfig.addFilter("epDate", (dateObj, locale="en") => {
        // return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
        return DateTime.fromJSDate(dateObj).setLocale(locale).toLocaleString(DateTime.DATE_MED)
    });
}