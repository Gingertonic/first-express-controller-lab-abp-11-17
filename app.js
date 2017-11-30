var express = require('express')
var app = express()

const SiteController = require"SiteController.js"

app.get("/", SiteController.Index )

app.get("/about", SiteController.About)

app.get("/contact", SiteController.Contact)

module.exports = app
