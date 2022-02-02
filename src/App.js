import { Header, About, Projects, Contacts, Footer} from './containers';

import './App.scss'

function App() {
  return (
    <div className="App">
		<Header />
		<About />
		<Projects />
		<Contacts />
		<Footer />
    </div>
  );
}

export default App;
