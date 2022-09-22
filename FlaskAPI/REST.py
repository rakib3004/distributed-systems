from flask import Flask
from flask_restful import Resource, Api, reqparse
import pandas as pd
import ast
app = Flask(__name__)
api = Api(app)

#git test


class Helloworld(Resource):

	def __init__(self):

		pass

	def get(self):

		return {

			"Hello": "World"

		}

api.add_resource(Helloworld, '/')

if __name__ == '__main__':

	app.run(debug=True)