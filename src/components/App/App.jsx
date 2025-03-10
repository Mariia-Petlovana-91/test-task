import css from '../App/App.module.css';
import { Toaster } from 'react-hot-toast';

import Section from '../Section/Section';
import Container from '../Container/Container';
import Quiz from '../Quiz/Quiz';

function App() {
  return (
    <>
      <Section>
        <Container>
          <Quiz />
        </Container>
      </Section>
      <Toaster />
    </>
  );
}

export default App;
