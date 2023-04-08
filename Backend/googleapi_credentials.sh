#!/bin/bash

if [[ -f credentials.json ]] ; then rm credentials.json ; fi

echo "{" >> credentials.json
echo "  \"type\": \"service_account\"," >> credentials.json
echo "  \"project_id\": \"scoutingapp2023\"," >> credentials.json
echo "  \"private_key_id\": \"${GAPI_PRIVATEKEYID}\"," >> credentials.json
echo "  \"private_key\": \"${GAPI_PRIVATEKEY}\"," >> credentials.json
echo "  \"client_email\": \"scoutingapp2023@scoutingapp2023.iam.gserviceaccount.com\"," >> credentials.json
echo "  \"client_id\": \"111133545601341528826\"," >> credentials.json
echo "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\"," >> credentials.json
echo "  \"token_uri\": \"https://oauth2.googleapis.com/token\"," >> credentials.json
echo "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\"," >> credentials.json
echo "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/scoutingapp2023%40scoutingapp2023.iam.gserviceaccount.com\"" >> credentials.json
echo "}" >> credentials.json