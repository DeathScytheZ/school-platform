require('dotenv').config({path: require('path').resolve(__dirname, '../../.env')});
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const systemAdminRoutes = require('./routes/systemAdminRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const parentRoutes = require('./routes/parentRoutes');
const childRoutes = require('./routes/childRoutes');

app.use(cors({
    origin : 'http://localhost:5173',
    credentials: true,
    methods : ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());
app.use(cookieParser());

app.use('/uploads', express.static('uploads'));
app.use('/api/auth', authRoutes);
app.use('/api/system-admin-dashboard', systemAdminRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/parent', parentRoutes);
app.use('/api/child', childRoutes);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
