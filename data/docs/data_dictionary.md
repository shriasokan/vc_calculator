Documents the accuracy metrics and runtime of different tested models. Not all tested models are included here, especially many
of the StackingRegressor Ensembles because they provided inaccurate metrics and took a long time to produce results

HyperParam GridSearch R-Squared = 0.041780309258948045
HyperParam GridSearch Mean Squared Error: 1.4042464970348447

HyperParam RandomSearch R-Squared = R-squared: 0.041780309258948045
HyperParam RandomSearch Mean Squared Error: 1.4042464970348447

XGBoost R-squared: -0.20068180128078228
XGBoost Mean Squared Error: 1.759568530884702

LightGBM R-squared: 0.06955032462204058
LightGBM Mean Squared Error: 1.3635502483843203
LightGBM Model Runtime: 2m 27.6s

LightGBM (Adjusted Polynomial Features and PCA) R-squared: -0.09514703985250517
LightGBM (Adjusted Polynomial Features and PCA) Mean Squared Error: 1.6049100319172511 

LightGBM (with Regularization and Higher Polynomial Degree) R-squared: 0.057077459085496884
LightGBM (with Regularization and Higher Polynomial Degree) Mean Squared Error: 1.3818289144427613
LightGBM (with Regularization and Higher Polynomial Degree) Model Runtime: 28m 46.3s

LightGBM (with Custom Wrapper for Early Stopping) R-squared: 0.07326590248586062
LightGBM (with Custom Wrapper for Early Stopping) Mean Squared Error: 1.3581051638696258
LightGBM (with Custom Wrapper for Early Stopping) Model Runtime: 7.6s

StackingRegressor Ensemble (RandomForest, GradientBoosting, LightGBM, XGBoost) R-squared: -0.12981834484937615
StackingRegressor Ensemble (RandomForest, GradientBoosting, LightGBM, XGBoost) Mean Squared Error: 1.6557199443620996

