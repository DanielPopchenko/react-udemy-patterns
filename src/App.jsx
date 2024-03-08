import Accordion from './components/accordion/Accordion';

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className="accordion">
          {/* It will work the same as <AccordionItem/> but now
              it is more obvious that we should use them together
          */}
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We have got 20 years work experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
                  voluptatibus perspiciatis accusantium animi eaque. Commodi delectus
                  dicta voluptatibus obcaecati officia quis soluta, beatae dolore ullam
                  nam? Totam minus ullam voluptatem!
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item id="local-guides" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We are working with local guides
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>We offer highly planned trips from our guides</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident porro
                  recusandae dicta commodi consequatur facilis, corporis perferendis odio
                  ea voluptatibus, incidunt quibusdam iusto repellat, explicabo officia
                  necessitatibus nemo aut autem!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
                  voluptatibus perspiciatis accusantium animi eaque. Commodi delectus
                  dicta voluptatibus obcaecati officia quis soluta, beatae dolore ullam
                  nam? Totam minus ullam voluptatem!
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
