const {google} = require('googleapis');

// set up authentication client with credentials
const auth = new google.auth.GoogleAuth({
  keyFile: './credentials.json', // path to your credentials file
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// create the Sheets API client
const sheets = google.sheets({version: 'v4', auth});

// specify the spreadsheet ID and range where you want to add rows
const spreadsheetId = '1zvDFIsf1ME-L4nAOCs1FgOKbWKCp5UKaGfJG0OgkD-Y';
const range = 'Sheet1!A1:F';

// define the rows you want to add to the spreadsheet

async function addRowsToSheet(rows) {
  console.log("request made")

    // set up authentication client with credentials
    const auth = new google.auth.GoogleAuth({
      keyFile: 'credentials.json', // path to your credentials file
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  
    // create the Sheets API client
    const sheets = google.sheets({version: 'v4', auth});
  

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: rows,
      },
    });

    console.log(response)

    return response
}

module.exports.addRowsToSheet = addRowsToSheet