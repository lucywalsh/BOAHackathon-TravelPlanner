from flask import Flask, request
import json
import requests
import os
app = Flask(__name__)

TOKEN_ENDPOINT = 'https://ob.sandbox.natwest.com/token'
CUSTOMER_DISCOVERY_ENDPOINT = 'https://ob.sandbox.natwest.com/zerocode/bankofapis.com/customer-discovery/v3/discovery/individual'


def get_access_token():
    request = {'grant_type':'client_credentials', 
               'client_id':os.getenv('CLIENT_ID'),
               'client_secret': os.getenv('CLIENT_SECRET')}
    headers = {'Content-Type':'application/x-www-form-urlencoded'}
    response=requests.post(TOKEN_ENDPOINT, data=request, headers=headers)
    json_response = response.json()
    return json_response['access_token']

@app.route("/hello")
def hello_world():
    return {'message':"Hello World!"};

@app.route("/customer-discovery", methods=["POST"])
def customer_discovery():
    data = json.dumps(request.json)

    access_token = get_access_token()

    auth='Bearer '+access_token
    headers = {'Authorization': auth,
               'Content-Type': 'application/json'}

    response=requests.post(CUSTOMER_DISCOVERY_ENDPOINT, headers=headers, data=data, verify=False)

    if(response.ok):
        app.logger.debug('RESPONSE OK')

        json_response = response.json()

        app.logger.debug(json_response)

        match_status = json_response['data']['match_status']

        if match_status == 'Match Pending':
            return {'match': True}
        else:
            return {'match': False}
    else:
        app.logger.debug(response, response.text)
        return {'match': 'false'}
    


