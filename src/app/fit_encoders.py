import joblib
import os
import pandas as pd
from sklearn.preprocessing import LabelEncoder

data_path = os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'processed', 'unicorns_cleaned.csv')
df = pd.read_csv(data_path)

country_encoder = LabelEncoder()
country_encoder.fit(df['Country'].unique())

industry_encoder = LabelEncoder()
industry_encoder.fit(df['Industry'].unique())

investors = df[['Investor 1', 'Investor 2', 'Investor 3', 'Investor 4']].values.flatten()
investors = [inv for inv in investors if isinstance(inv, str)]
investor_encoder = LabelEncoder()
investor_encoder.fit(investors)

joblib.dump(country_encoder, os.path.join(os.path.dirname(__file__), '..', '..', 'models', 'country_encoder.joblib'))
joblib.dump(industry_encoder, os.path.join(os.path.dirname(__file__), '..', '..', 'models', 'industry_encoder.joblib'))
joblib.dump(investor_encoder, os.path.join(os.path.dirname(__file__), '..', '..', 'models', 'investor_encoder.joblib'))

print("Encoders fitted and saved successfully")