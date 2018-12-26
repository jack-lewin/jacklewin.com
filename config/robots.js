const allow = {
  policy: [{ userAgent: '*', disallow: ['/admin/'] }],
};

const disallow = {
  policy: [{ userAgent: '*', disallow: ['/'] }],
  sitemap: null,
  host: null,
};

module.exports = {
  allow,
  disallow,
};
