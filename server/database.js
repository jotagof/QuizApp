import mongoose from 'mongoose'
mongoose.connect('mongodb+srv://quizappuser:LXLRTo5oK86zvglK@cluster0.ytek1.mongodb.net/quizapp')

const bdobject = mongoose.connection

bdobject.on('connected', ()=> {console.log('DB Connected')});
bdobject.on('error', ()=> {console.log('DB Error')});


export default mongoose