module.exports.normalizeString = function(s) {
  try {
    s = s.trim();
    s = s.toLowerCase();
    // replace spaces with dashes
    s = s.replace(/\s+/g, '-');
    // replace underscores with dashes
    s = s.replace(/_/g, '-');
    // remove non alphanumeric characters except spaces
    s = s.replace(/[^a-zA-Z\d\s:-]/g, '');
    // make sure there are no double dashes
    s = s.replace(/--/g, "-");
  }
  catch (err) {
    console.error(`Error normalizing string ${s}:`, err);
  }
  return s;
}
