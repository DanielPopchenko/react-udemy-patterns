import React, { createContext, useContext } from 'react';
import { useAccordionContext } from './Accordion';

const AccordionTitleContext = createContext();

export const useAccordionTitleContext = () => {
  const context = useContext(AccordionTitleContext);

  if (!context) {
    throw new Error(
      'AccordionItem-related components should be wrapped by <Accordion.Item>',
    );
  }

  return context;
};

function AccordionItem({ id, className, children }) {
  return (
    <AccordionTitleContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionTitleContext.Provider>
  );
}

export default AccordionItem;
