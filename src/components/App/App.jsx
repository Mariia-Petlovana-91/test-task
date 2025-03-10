import css from '../App/App.module.css';
import toast, { Toaster } from 'react-hot-toast';
import Form from '../Form/Form';

function App() {
  return (
    <>
      <Form />
      <Toaster />
    </>
  );
}

export default App;
