from flask import Flask,jsonify

app = Flask(__name__)

'''information_technology =/* [ {'name': "artificial-intelligence", 'code': "cse504", 'status': "beta} ,
    {'name' :"distributed-system", 'code': "cse501", 'status': "alpha},  
    {'name' :"software-metrics", 'code': "se511", 'status': "gama},
    ]'''

@app.route('/')

def index():
    return "information_technology: "



if __name__ == "__main__":
    app.run(debug=True)
