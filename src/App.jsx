import Accordion from "./components/Accordion";

function App() {
  const faqData = [
    {
      id: 1,
      question: "What is this?",
      answer:
        "This is an accordion component - a way to show and hide content.",
    },
    {
      id: 2,
      question: "How does it work?",
      answer:
        "Click on any question to see its answer. You can also enable multiple expansions.",
    },
    {
      id: 3,
      question: "Can I collapse all items?",
      answer: "Yes! Just click the 'Collapse All' button at the top.",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-900 p-4 text-white md:p-8 flex justify-center items-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-500 mb-8 text-center">
          FAQ Accordion
        </h1>
        <Accordion data={faqData} />
      </div>
    </div>
  );
}

export default App;
