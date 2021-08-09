import './App.css';
import {LoginPage} from "./components/LoginPage/LoginPage"
import {SignInPage} from "./components/SignInPage/SignInPage"
import {Feed} from "./components/Feed/Feed"
import { PostCard } from './components/PostCard/PostCard';
import {CommentCard} from  './components/CommentCard/CommentCard'
 export const App = () => {
  return (
    <div>
      <CommentCard/>
    </div>
  );
}

export default App;
