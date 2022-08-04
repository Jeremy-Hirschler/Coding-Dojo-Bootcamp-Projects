require('./Config/mongoose.config');
const express = require('express');
const app = express();
const PORT = 8000;


app.use(express.json(), express.urlencoded({extended: true}));

const AllRoutes = require('./Routes/jokes.routes');
AllRoutes(app);
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));