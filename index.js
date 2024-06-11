import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.use('/tweets', tweetsRouter);

app.get('/', (req, res) => {
    res.semd('Welcome to the API!');
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}.`));