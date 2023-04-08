const {google} = require('googleapis');


// set up authentication client with credentials
const auth = new google.auth.GoogleAuth({
  keyFile: '../credentials.json', // path to your credentials file
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// create the Sheets API client
const sheets = google.sheets({version: 'v4', auth});

// specify the spreadsheet ID and range where you want to add rows
const spreadsheetId = '1zvDFIsf1ME-L4nAOCs1FgOKbWKCp5UKaGfJG0OgkD-Y';
const range = 'Sheet1!A1:F';

// define the rows you want to add to the spreadsheet

function addRowsToSheet(rows) {
    // set up authentication client with credentials
    const auth = new google.auth.GoogleAuth({
      keyFile: 'credentials.json', // path to your credentials file
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  
    // create the Sheets API client
    const sheets = google.sheets({version: 'v4', auth});
  
    try {
      // call the Sheets API to append the rows to the spreadsheet
      const response = sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: rows,
        },
      });
  
    } catch (err) {
      console.log(`The API returned an error: ${err}`);
    }
  }

module.exports.addRowsToSheet = addRowsToSheet