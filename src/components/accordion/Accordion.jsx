import React, { createContext, useContext, useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

const AccordionContext = createContext();

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  // ! Extra check to use this context when component is wrapped with Accordion component
  if (!context) {
    throw new Error(
      'Accordion-related components must be wrapped by the Accordion context',
    );
  }

  return context;
};

function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  const contextValue = {
    openItemId,
    toggleItem,
  };
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

export default Accordion;

// Item was added as a key to the Accordion function object
Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
