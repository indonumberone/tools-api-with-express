import {app, port} from './index.js';

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
