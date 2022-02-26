import FeatureFlagForm from './components/feature-flag-form';
import formSchema from "./formSchema";

function App() {
  return (
    <div className="App">
     <FeatureFlagForm data={formSchema}/>
    </div>
  );
}

export default App;
