from flask import Blueprint, jsonify, request
import pandas as pd
import os
from .models import predict_valuation

main = Blueprint('main', __name__)

data_path = os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'processed', 'unicorns_cleaned.csv')

df = pd.read_csv(data_path)
countries = df['Country'].unique().tolist()
investors = set(df[['Investor 1', 'Investor 2', 'Investor 3', 'Investor 4']].values.flatten())
investors = sorted([inv for inv in investors if isinstance(inv, str)])

@main.route('/api/data-options', methods=['GET'])
def get_data_options():
    return jsonify({'countries': countries, 'investors': investors})

@main.route('/api/submit', methods=['POST'])
def submit():
    data = request.json
    country = data.get('country')
    investors = data.get('investors')
    date_joined = data.get('dateJoined')

    #Update this after you've imported the model here
    prediction = predict_valuation([country, investors, date_joined])

    return jsonify({'prediction': prediction})