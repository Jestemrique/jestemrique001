module.exports = {
  lang: 'es',
  permalink: function (data) {
    // Slug override for localized URL slugs
    if (data.slugOverride) {
      debugger;
      return `/${data.lang}/${this.slugify(data.slugOverride)}/`;
    }
  }
};