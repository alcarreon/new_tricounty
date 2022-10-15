module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getBook: (req, res) => {
    res.render("book-tow.ejs");
  },
  getContact: (req, res) => {
    res.render("contact.ejs");
  },
  getService: (req, res) => {
    res.render("services.ejs");
  },
  getInventory: (req, res) => {
    res.render("inventory.ejs");
  },
};
