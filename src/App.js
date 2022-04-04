import { Header, About, Projects, Contacts, Footer} from './containers';
import data from './assets/data/data.json'
import { Navbar } from './components';

import './App.scss'

function App() {
  return (
    <div className="App">
		<Navbar data={data.navbar} />
		<Header data={data.header} />
		<About data={data.about} />
		<Projects data={data.projects} />
		<Contacts data={data.contacts} />
		<Footer data={data.footer} />
    </div>
  );
}

export default App;
