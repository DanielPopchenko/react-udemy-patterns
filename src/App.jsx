// ! COMPOUNED COMPONENTS
import Accordion from './components/accordion/Accordion';
import SearchableList from './components/searchableList/SearchableList';

import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from './components/searchableList/Place';

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function App() {
  return (
    <main>
      {/* Accordion stuff */}
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
      {/* Searchable stuff */}
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {/* Render props */}
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={['item-1', 'item-2']} itemKeyFn={(item) => item}>
          {/* Render props */}
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
