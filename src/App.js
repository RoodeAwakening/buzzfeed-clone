import { useState, useEffect } from "react";
import Title from "./components/Title";

const App = () => {

  const [quizData, setQuiz] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/quiz");
      const data = await response.json();
      setQuiz(data);
      console.log("Quiz Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Quiz Data in App:", quizData);

  return (
    <div>
      <Title 
      title={quizData?.title}
      subtitle={quizData?.subtitle}
      />
    </div>
  );
}

export default App;
