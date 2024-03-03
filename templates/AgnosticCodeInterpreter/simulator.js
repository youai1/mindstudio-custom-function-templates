environment = {
  config: {
    url_file: 'https://youai-cdn.s3.us-west-2.amazonaws.com/images/d83bf0b7-ffc0-442f-a7a2-efb97a670708_1706690474118.xlsx',
    outputVar: 'imageUrl',
    outputVarText: 'text',
    python_script :"import matplotlib.pyplot as plt\n\
import seaborn as sns\n\
from sklearn.linear_model import LinearRegression\n\
import numpy as np\n\
# Metrics\n\
max_score = df['Scores'].max()\n\
students_max_score = df[df['Scores'] == max_score].index.tolist()\n\
total_students = df.shape[0]\n\
average_score = df['Scores'].mean()\n\
# Print metrics\n\
print(f'Maximum score achieved by a student: {max_score}')\n\
print(f'List of students who have achieved the maximum score: {students_max_score}')\n\
print(f'Total number of students: {total_students}')\n\
print(f'Average score achieved by students: {average_score}')\n\
# Scatter plot\n\
plt.figure(figsize=(10, 8))\n\
sns.scatterplot(data=df, x='Hours', y='Scores', hue='Scores')\n\
# Regression line\n\
X = df['Hours'].values.reshape(-1,1)\n\
Y = df['Scores'].values.reshape(-1,1)\n\
regression_model = LinearRegression()\n\
regression_model.fit(X, Y)\n\
Y_pred = regression_model.predict(X)\n\
plt.plot(df['Hours'], Y_pred, color='red')\n\
plt.title('Scores vs Hours Studied')\n\
plt.xlabel('Hours Studied')\n\
plt.ylabel('Scores')\n\
# Save the figure\n\
fig1 = plt.gcf()\n\
fig2 = plt.gcf()\n\
figures=[fig1,fig2]",
  },
}
