import app from "./app";

const port = 8080

app.listen(port, () => {
  console.log();
  console.log('Listening on port', port);
  console.log('CRTL + Clique em http://localhost:' + port);
})
