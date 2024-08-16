import joblib
import numpy as np
import os

model_path = os.path.join(os.path.dirname(__file__), '..', '..', 'models', 'valuation_predictor_01.joblib')
model = joblib.load(model_path)

def predict_valuation(country, investors, date_joined):
    #Might need to process these inputs and format them before using them as inputs for the prediction
    input_data = np.array([country, investors, date_joined]).reshape(1, -1)
    prediction = model.predict(input_data)
    return prediction[0] #double check what prediction is in the jupyter notebooks file to figure out how to return it