function setNoCache(res) {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  res.setHeader("Expires", date.toUTCString());
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Cache-Control", "public, no-cache");
}

function setLongTermCache(res) {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  res.setHeader("Expires", date.toUTCString());
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
}

const CACHE_OPTIONS = {
  extensions: ["html"],
  setHeaders(res, path) {
    if (path.match(/(\.html|\/sw\.js)$/)) {
      setNoCache(res);
      return;
    }

    if (path.match(/\.(js|css|png|jpeg|webp|woff)$/)) {
      setLongTermCache(res);
    }
  },
}

exports.setNoCache = setNoCache;
exports.setLongTermCache = setLongTermCache;
exports.CACHE_OPTIONS = CACHE_OPTIONS;