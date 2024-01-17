const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Assume you have the sheetName defined
const sheetName = 'Sheet1';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/report', async (req, res) => {
  try {
    const { userName, mobileNumber, crimeType, description } = req.body;

    // Save the report to Google Sheets using Apps Script
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbyezzpLzqFKaThdEp8VqNAW_3-1u4AHmBQLe9aLdsAJm-3d46chCbRUvrcmpBSQDgYg/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, mobileNumber, crimeType, description }),
      }
    );

    const data = await response.json();

    // Return the complaint ID
    res.json({ result: 'success', complaintId: data.complaintId });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ result: 'error', message: 'Internal server error' });
  }
});

app.get('/status/:complaintId', (req, res) => {
  // Implement logic to retrieve status from Google Sheets based on complaintId
  const { complaintId } = req.params;

  // For now, returning a sample status
  const sampleStatus = 'Pending';

  if (sampleStatus) {
    res.json({ result: 'success', status: sampleStatus });
  } else {
    res.status(404).json({ result: 'error', message: 'Complaint ID not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
