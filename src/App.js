import Header from "./header/Header";
import { Route } from "react-router-dom";
import LearningContainer from "./learningContainer/LearningContainer";
import LearningPage from "./learningPage/LearningPage";

function App() {
  return (
    <>
      <Route path="/" exact component={Header} />
      <main>
        <Route path="/" exact component={LearningContainer} />
        <Route path="/learn" exact component={LearningPage} />
      </main>
    </>
  );
}
export default App;
