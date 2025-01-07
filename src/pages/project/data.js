import eno from './images/e-note.png'
import bbj from './images/babji.png'
import dia from "./images/diabetes.jpg"
import emo from './images/emotiondetect.jpg'
import fwi from './images/fwii.png'
import vrksha from './images/vruksha.jpg'
const projects = [
    {
      id: "1",
      title: "E-Notes App",
      image: `${eno}`,
      description:
        "A comprehensive digital notebook designed for organizing and managing notes efficiently. It allows users to create, edit, and categorize notes with a modern and user-friendly interface. The app supports rich text editing, seamless synchronization, and data storage for quick accessibility.",
      technologies: ["React", "Node.js", "Tailwind-CSS"],
    },
    {
      id: "2",
      title: "VrukshaDarshan",
      image:`${vrksha}`,
      description:
        "An advanced plant identification system that leverages machine learning and image processing techniques. This project utilizes the DeepForest model and a curated Kaggle dataset to accurately identify plants from images. The platform provides users with plant names, scientific classifications, and additional details, aiding research and environmental awareness.",
      technologies: ["Python", "Flask", "DeepForest", "Kaggle Dataset"],
    },
    {
      id: "3",
      title: "Babaji",
      image:`${bbj}`,
      description:
        "A Python-based library developed to provide predictions using pre-trained machine learning models. The project integrates a .pkl file hosted on GitHub for seamless model deployment. Babaji simplifies predictions by offering an easy-to-use interface for developers and data scientists.",
      technologies: ["Python", "Flask", "Pickle"],
    },
    {
      id: "4",
      title: "FWI Prediction",
      image: `${fwi}`,
      description:
        "A machine learning solution aimed at predicting the Fire Weather Index (FWI), a critical parameter for assessing wildfire risks. By analyzing environmental and weather data, the project helps authorities prepare for potential fire outbreaks. Key features include advanced data visualization, model performance metrics, and real-time predictions.",
      technologies: ["Python", "Scikit-learn", "Matplotlib", "Pandas"],
    },
    {
      id: "5",
      title: "Diabetes Prediction",
      image:
        `${dia}`,
      description:
        "A healthcare project designed to predict the likelihood of diabetes in individuals based on key health indicators such as glucose levels, BMI, and insulin levels. The project uses Logistic Regression and features data cleaning, exploratory data analysis, and hyperparameter optimization for improved accuracy.",
      technologies: ["Python", "Logistic Regression", "Scikit-learn", "Flask"],
    },
    {
      id: "6",
      title: "Emotion Detection",
      image: `${emo}`, 
      description:
        "An image and video processing system to detect human emotions in real time. The project uses facial recognition and emotion classification techniques powered by deep learning models. Suggested activities tailored to detected emotions make it ideal for mental health and entertainment applications.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras"],
    },
    {
      id: "7",
      title: "Movie Rating Prediction",
      image:
        "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80&w=1000",
      description:
        "A data-driven project that predicts movie ratings by analyzing historical movie data. It considers features like genre, director, and cast to build machine learning models that estimate ratings accurately. The project showcases techniques like data preprocessing, feature engineering, and hyperparameter tuning.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    },
  ];

  export default projects