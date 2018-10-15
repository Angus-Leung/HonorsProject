import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();
import musicNoteRoutes from './routes/musicNotesRoute';

app.use("/", musicNoteRoutes);
// import api from './api';

// app.use('/users', api.users);

app.listen(PORT, (err) => {
	if(err) throw err;

	console.log(`Server started on port ${PORT}`);
});
