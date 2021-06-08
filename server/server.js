import path from 'path'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { MongoClient } from 'mongodb'
import template from './../template'
require('dotenv').config()

//comment out before building for production
// import devBundle from './devBundle'

// modules for server side rendering
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MainRouter from './../client/MainRouter'
import { StaticRouter } from 'react-router-dom'

import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import theme from './../client/theme'
// end

const app = express()

//comment out before building for production
// devBundle.compile(app)

// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('*', (req, res) => {
  const sheets = new ServerStyleSheets()
  const context = {}
  const markup = ReactDOMServer.renderToString(
    sheets.collect(
      <StaticRouter location={req.url} context={context}>
        <CssBaseline/>
        <ThemeProvider theme={theme}>
          <MainRouter/>
        </ThemeProvider>
      </StaticRouter>
    )
  )
  if (context.url) {
    return res.redirect(303, context.url)
  }
  const css = sheets.toString()
  res.status(200).send(template({
    markup: markup,
    css: css
  }))
})

let port = process.env.PORT || 2080
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})

// Database Connection URL
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolioWebsite'

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },(err, db)=>{
  console.log("Connected successfully to mongodb server")
  db.close()
})
