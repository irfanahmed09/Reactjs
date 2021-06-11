import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import Components
import showResumeList from "../src/components/showResumeList";
import showResumeDetails from "../src/components/showResumeDetails";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={showResumeList} />
        <Route path="/show-resume/:email" component={showResumeDetails} />
      </div>
    </Router>
  );
}

export default App;
