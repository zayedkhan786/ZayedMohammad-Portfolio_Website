import React from 'react';
import './Projects.css';

function Certification() {
    return (
        <div className="about-container">
            <h1>Certifications</h1>
            <section className="about-section">
                <h2>Career Essentials in Data Analysis by Microsoft</h2>
                <ul>
                    <li>Data Analysis Fundamentals: <br></br> - Understanding the basics of data analysis, including the types of data, data collection methods, and the importance of data accuracy and integrity. <br></br>
                    - Learning how to clean, preprocess, and prepare data for analysis.</li>
                    <li>Statistical Analysis and Interpretation: <br></br>- Gaining knowledge of core statistical concepts and techniques such as mean, median, mode, standard deviation, correlation, and regression analysis. <br></br>
                    - Developing the ability to interpret statistical results and draw meaningful insights from data.</li>
                    <li>Data Visualization:<br></br>- Learning how to create effective data visualizations using tools like Excel, Power BI, or Tableau. <br></br>
                    - Understanding best practices for designing charts, graphs, and dashboards that effectively communicate data insights.</li>
                    <li>Excel for Data Analysis: <br></br> - Mastering Excel functions and tools commonly used in data analysis, such as pivot tables, VLOOKUP, INDEX & MATCH, and data analysis toolpak. <br></br>
                    - Automating tasks and improving efficiency with Excel macros and VBA.
                    </li>
                </ul>
            </section>
            <section className="about-section">
                <h2>Machine Learning Specialization by Stanford University </h2>
                <ul>
                <li>
                    Supervised Learning: <br />
                    - Understanding the basics of supervised learning, including regression and classification techniques. <br />
                    - Learning various algorithms such as linear regression, logistic regression, support vector machines, and neural networks. <br />
                    - Mastering techniques to evaluate and validate models, including cross-validation and performance metrics.
                </li>
                <li>
                    Unsupervised Learning: <br />
                    - Exploring unsupervised learning techniques such as clustering and dimensionality reduction. <br />
                    - Learning algorithms like k-means clustering, hierarchical clustering, and principal component analysis (PCA). <br />
                    - Understanding how to apply these techniques to discover patterns and insights from unlabeled data.
                </li>
                <li>
                    Neural Networks and Deep Learning: <br />
                    - Gaining in-depth knowledge of neural networks, including the architecture of deep learning models. <br />
                    - Learning to implement neural networks using frameworks like TensorFlow or Keras. <br />
                    - Understanding backpropagation, activation functions, and optimization techniques like gradient descent.
                </li>
                <li>
                    Practical Machine Learning Applications: <br />
                    - Applying machine learning algorithms to real-world problems such as image recognition, natural language processing, and recommender systems. <br />
                    - Learning to preprocess data, handle missing values, and perform feature engineering to improve model performance. <br />
                    - Understanding the ethical implications and considerations in machine learning applications.
                </li>
                <li>
                    Model Optimization and Regularization: <br />
                    - Learning techniques to optimize and regularize machine learning models to prevent overfitting and improve generalization. <br />
                    - Understanding concepts such as regularization (L1 and L2), dropout, and early stopping. <br />
                    - Exploring hyperparameter tuning methods like grid search and random search to enhance model performance.
                </li>
            </ul>
            </section>
        </div>
    );
}

export default Certification;
