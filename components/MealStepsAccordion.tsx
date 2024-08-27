import { MealStepsAccordionProps } from "../types/ComponentPropsTypes";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTrigger,
  ChevronDownIcon,
  ChevronUpIcon,
  Text,
} from "@gluestack-ui/themed";

const MealStepsAccordion: React.FC<MealStepsAccordionProps> = ({ meal }) => {
  return (
    <Accordion variant="unfilled">
      <AccordionItem value={meal.id}>
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <Text fontSize="$lg" fontWeight="bold">
                    Steps
                  </Text>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} ml="$3" />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} ml="$3" />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          {meal.steps.map((step, index) => (
            <Text style={{ margin: "3%" }} key={index}>
              {index + 1}. {step}
            </Text>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MealStepsAccordion;
