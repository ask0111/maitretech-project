// server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

const JSON_FILE_PATH = './data.json';
const CARDS_FILE_PATH = './cards.json';



app.post('/post-data', (req, res) => {
  const newData = req.body;

  fs.readFile(JSON_FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data file:', err);
      return res.status(500).json({ message: 'Error reading data file' });
    }

    const jsonData = JSON.parse(data);
    jsonData.push(newData);

    fs.writeFile(JSON_FILE_PATH, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error('Error writing data to file:', err);
        return res.status(500).json({ message: 'Error writing data to file' });
      }
      res.json({ message: 'Data posted successfully' });
    });
  });
});

app.get('/get-data', (req, res) => {
    fs.readFile(JSON_FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading data file:', err);
        return res.status(500).json({ message: 'Error reading data file' });
      }
  
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    });
  });


app.post('/post-cards', (req, res) => {
    const newData = req.body;
  
    fs.readFile(CARDS_FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading data file:', err);
        return res.status(500).json({ message: 'Error reading data file' });
      }
  
      const jsonData = JSON.parse(data);
      jsonData.push(newData);
  
      fs.writeFile(CARDS_FILE_PATH, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
          console.error('Error writing data to file:', err);
          return res.status(500).json({ message: 'Error writing data to file' });
        }
        res.json({ message: 'Data posted successfully' });
      });
    });
  });

app.get('/get-cards', (req, res) => {
    fs.readFile(CARDS_FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading data file:', err);
        return res.status(500).json({ message: 'Error reading data file' });
      }
  
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    });
  });

  app.put('/update-cards', (req, res) => {
    
      fs.readFile(CARDS_FILE_PATH, 'utf8', (err, data)=>{
        if(err){
          console.error('Error reading data file:', err);
        return res.status(500).json({ message: 'Error reading data file' });
        }
        const jsonData = JSON.parse(data);
        jsonData.map((user) => {
          if (user.name === req.body.name) {
            user.name = req.body.name;
            user.price = req.body.price;
            user.count = req.body.count;
          }
        });
        
        fs.writeFile(CARDS_FILE_PATH, JSON.stringify(jsonData, null, 2), (err)=>{
          if (err) {
            console.error('Error writing data to file:', err);
            return res.status(500).json({ message: 'Error writing data to file' });
          }
          res.status(200).json({ message: 'Data updated successfully!' });
        });
      });
  });



const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
