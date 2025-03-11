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
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 5000,
        }}
      />
    </>
  );
}

export default App;
