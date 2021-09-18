import logo from './logo.svg';
import './App.css';
import { 
   BrowserRouter as Router,
   Switch,
   Route } from 'react-router-dom';
import AboutPage from './components/about_page/AboutPage';
import HomePage from './components/home_page/HomePage'; 
import NotFound from './components/NotFound';
import ContactPage from './components/contact_page/ContactPage';
import NewStoryPage from './components/new_story_page/NewStoryPage';
import StoryThankYou from './components/thank_you/StoryThankYou';
import ContactThankYou from './components/thank_you/ContactThankyou';
import EducationalPage from './components/educational/EducationalPage';
import EduStory1Full from './components/educational/educational_stories/EduStory1Full';
import EduStory2Full from './components/educational/educational_stories/EduStory2Full';
import EduStory3Full from './components/educational/educational_stories/EduStory3Full';
import InspirationalPage from './components/inspirational/InspirationalPage';
import InsStory1Full from './components/inspirational/inspirational_stories/InsStory1Full';
import InsStory2Full from './components/inspirational/inspirational_stories/InsStory2Full';
import InsStory3Full from './components/inspirational/inspirational_stories/InsStory3Full';
import InsStory4Full from './components/inspirational/inspirational_stories/InsStory4Full';
import TermsOfUse from './components/TermsOfUse';

function App() {
  return (
    
    <div>
<Router>
  <Switch>
    <Route exact path="/about">
      <AboutPage />
    </Route>
    <Route exact path="/contact">
      <ContactPage />
    </Route>
    <Route exact path="/new">
      <NewStoryPage />
    </Route>
    <Route exact path="/thankyou_story">
      <StoryThankYou />
    </Route>
    <Route exact path="/thankyou_contact">
      <ContactThankYou />
    </Route>
    <Route exact path="/educational_stories">
      <EducationalPage />
    </Route>
    <Route exact path="/educational_stories/story1">
      <EduStory1Full />
    </Route>
    <Route exact path="/educational_stories/story2">
      <EduStory2Full />
    </Route>
    <Route exact path="/educational_stories/story3">
      <EduStory3Full />
    </Route>
    <Route exact path="/inspirational_stories">
      <InspirationalPage />
    </Route>
    <Route exact path="/inspirational_stories/story1">
      <InsStory1Full />
    </Route>
    <Route exact path="/inspirational_stories/story2">
      <InsStory2Full />
    </Route>
    <Route exact path="/inspirational_stories/story3">
      <InsStory3Full />
    </Route>
    <Route exact path="/inspirational_stories/story4">
      <InsStory4Full />
    </Route>
    <Route exact path="/terms_of_use">
      <TermsOfUse />
    </Route>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
</Router>
    </div>
  );
}

export default App;
