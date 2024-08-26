from flask import Blueprint, jsonify, request
import pandas as pd
import os
from .models import predict_valuation
from flask_cors import CORS

main = Blueprint('main', __name__)
CORS(main)

data_path = os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'interim', 'unicorns_investors_01.csv')

df = pd.read_csv(data_path)
df.columns = df.columns.str.strip()
countries = df['Country'].unique().tolist()
industries = df['Industry'].unique().tolist()
investors = set(df[['Investor 1', 'Investor 2', 'Investor 3', 'Investor 4']].values.flatten())
unique_investors = sorted(set([inv for inv in investors if isinstance(inv, str) and inv.strip()]))

@main.route('/api/data-options', methods=['GET'])
def get_data_options():
    return jsonify({
        'countries': countries, 
        'industries': industries,
        'investors': unique_investors,
    })

@main.route('/api/submit', methods=['POST'])
def submit():
    data = request.json
    country = data.get('country')
    industry = data.get('industry')
    investors = data.get('investors')
    date_joined = data.get('dateJoined')

    #Update this after you've imported the model here
    prediction = predict_valuation(country, industry, investors, date_joined)

    return jsonify({'prediction': prediction})