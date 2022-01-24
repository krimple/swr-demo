const express = require('express')
const app = express()
const port = 4000
const randomMessages = [
  'No matter where you go, there you are -- Buckaroo Bonzai',
  'Pair up in threes - Yogi Berra',
  'I\'m not superstitious, but I\'m a little stitious -- Michael Scott, The Office',
  'If life gives you lemons, make some kind of fruity juice -- Conan O\'Brien',
  'Why do they call it rush hour when nothing moves? -- Robin Williams',
  'When people agree with me I always feel that I must be wrong -- Oscar Wilde'
];
app.get('/', (req, res) => {
  res.send('Hello People!')
})

app.get('/cms/demo', async (req, res) => {
  const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
  const time = new Date().toLocaleTimeString();
  setTimeout(() => {
    const num = Math.random();
    if (num > 0.7) {
      // send incomplete json
      res.contentType('application/json');
      res.send('{ "data": "ddd"');
    } else if (num > 0.5) {
      res.status(500).send(new Error('Failed randomly'));
    } else {
      res.send({data: `<h1>Random Quote</h1><p><em>Time: ${time}</em></p><blockquote>${randomMessage}</blockquote>`});
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
