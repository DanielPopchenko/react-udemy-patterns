import React from 'react';
import { useAccordionContext } from './Accordion';
import { useAccordionTitleContext } from './AccordionItem';

const AccordionContent = ({ className, children }) => {
  const { openItemId } = useAccordionContext();
  const id = useAccordionTitleContext();
  return (
    <div
      className={
        openItemId === id ? `${className ?? ''} open` : `${className ?? ''} close`
      }
    >
      {children}
    </div>
  );
};

export default AccordionContent;
