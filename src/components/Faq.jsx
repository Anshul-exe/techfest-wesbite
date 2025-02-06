import { useState } from 'react';

const FAQ = () => {
  const faqs = [
    { question: 'How to create an account?', answer: 'Click sign-up, fill details, and verify email.' },
    { question: 'Have any trust issue?', answer: 'We ensure secure and seamless content management.' },
    { question: 'How can I reset my password?', answer: 'Use forgot password link to reset it securely.' },
    { question: 'What is the payment process?', answer: 'Payments are processed securely through our gateway.' }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="max-w-screen-md mx-auto py-10 text-[#ef1897]">
      <h2 className="text-[80px] font-bold text-center font-['Doto'] mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#ef1897] pb-2">
            <button 
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full text-left text-lg font-medium flex justify-between text-[#ef1897]"
            >
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div 
              className={`transition-all overflow-hidden ${activeIndex === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="mt-2 text-white">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
