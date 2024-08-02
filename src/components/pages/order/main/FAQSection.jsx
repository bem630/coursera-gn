import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Comment m'inscrire à une formation ?",
      answer: "Pour vous inscrire, rendez-vous sur la page des formations, sélectionnez celle qui vous intéresse et suivez les instructions.",
    },
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer: "Nous acceptons les paiements par carte bancaire, PayPal, et virement bancaire.",
    },
    {
      question: "Puis-je annuler ou reporter une formation ?",
      answer: "Oui, les conditions d'annulation et de report sont précisées dans nos conditions générales de vente.",
    },
    {
      question: "Y a-t-il un support pour les apprenants ?",
      answer: "Oui, notre équipe est disponible pour vous accompagner tout au long de votre formation.",
    },
  ];

  return (
    <FAQSectionWrapper>
      <h2>Questions Fréquentes</h2>
      <FAQList>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
              <IconWrapper>
                {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </IconWrapper>
            </Question>
            {activeIndex === index && <Answer>{faq.answer}</Answer>}
          </FAQItem>
        ))}
      </FAQList>
    </FAQSectionWrapper>
  );
};

const FAQSectionWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: #333;
  }
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 2rem;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
`;

const Question = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  padding: 1rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const Answer = styled.p`
  font-size: 1rem;
  padding: 1rem 1.5rem;
  color: #555;
  line-height: 1.6;
  background-color: #f1f1f1;
  transition: max-height 0.3s ease-out;
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
`;

export default FAQSection;
