module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("icon");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("image_web");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("popups_vimeo");
    eleventyConfig.addPassthroughCopy("sass");
};