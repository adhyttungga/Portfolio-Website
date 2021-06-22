import favicon from './favicon.ico'
import appleTouch from './apple-touch-icon.png'

export default ({markup, css}) => {
    return `<!doctype html>
      <html lang="en">
        <head>
        <meta charset="utf-8">
        <link rel="icon" href=${favicon} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        >
        <link rel="apple-touch-icon" href=${appleTouch} />
        <title>Adhytia Tungga, BS</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

        </head>
        <body>
          <div id="root">${markup}</div>
          <style id="jss-server-side">${css}</style>
          <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
      </html>`
}
