import joblib
import numpy as np
import os
import pandas as pd
from sklearn.preprocessing import LabelEncoder

model_path = os.path.join(os.path.dirname(__file__), '..', '..', 'models', 'valuation_predictor_01.joblib')
model = joblib.load(model_path)

models_dir = os.path.join(os.path.dirname(__file__), '..', '..', 'models')

country_encoder = joblib.load(os.path.join(models_dir, 'country_encoder.joblib'))
industry_encoder = joblib.load(os.path.join(models_dir, 'industry_encoder.joblib'))
investor_encoder = joblib.load(os.path.join(models_dir, 'investor_encoder.joblib'))

def predict_valuation(country, industry, investors, date_joined):
    #Might need to process these inputs and format them before using them as inputs for the prediction
    try:
        country_encoded = country_encoder.transform([country.strip()])[0]
    except ValueError as e:
        print(f"Error encoding country: {country}, error: {e}")
        
    try:
        industry_encoded = industry_encoder.transform([industry.strip()])[0]
    except ValueError as e:
        print(f"Error encoding industry: {industry}, error: {e}")

    try:
        investors_encoded = [investor_encoder.transform([investor.strip()])[0] for investor in investors]
    except ValueError as e:
        print(f"Error encoding investors: {investors}, error: {e}")

    # print(f"Encoded Country: {country_encoded}, Industry: {industry_encoded}, Investors: {investors_encoded}")

    date_numeric = pd.to_datetime(date_joined).timestamp()
    input_data = [country_encoded, industry_encoded, len(investors), date_numeric] + investors_encoded
    input_data = np.array(input_data).reshape(1, -1)


    prediction = model.predict(input_data)
    return prediction[0] #double check what prediction is in the jupyter notebooks file to figure out how to return it