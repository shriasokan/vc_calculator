# Machine Learning Venture Capital Calculator
This repository contains a **Venture Capital Valuation Predictor** application built using a Flask backend and a React frontend. The goal of this application is to provide an estimation of a 
startup's valuation based on specific inputs such as country, industry, and investors. The backend model was trained using machine learning techniques to predict valuations using historical 
data.

# Project Structure
The project is organized into two main parts:
1. **Backend** (Flask)
2. **Frontend** (React)

## Backend
The backend is implemented using Flask and is responsible for handling requests, processing inputs, and returning predictions from the machine learning model.
### Key Files
* `main.py`: The entry point of the Flask application.
* `app/__init__.py`: Initializes the Flask app and registers the routes.
* `app/routes.py`: Contains the routes for handling API requests.
* `app/models.py`: Loads the machine learning model and encoders, processes the inputs, and returns predictions.
* `models/valuation_predictor_01.joblib`: The trained machine learning model.
* `models/country_encoder.joblib`, `models/industry_encoder.joblib`, `models/investor_encoder.joblib`: Encoders for the categorical features.

### API Endpoints
* **GET** `/api/data-options`: Returns the available options for countries, industries, and investors.
* **POST** `/api/submit`: Accepts input data and returns a predicted valuation or an error message.

## Frontend
The frontend is developed using React and is responsible for providing a user-friendly interface for inputting data and displaying the predicted valuations.
### Key Files
* `src/pages/ValuationPredictor.tsx`: The main interface for the valuation prediction tool.
* `src/Styles.tsx`: Contains the styled components used across the frontend.

## Future Development
The frontend is currently in development, with the core functionality of the **Valuation Predictor** operational. Additional calculators and features are planned for future updates.
Instructions for running the code and using the model will be included once the frontend is complete.
