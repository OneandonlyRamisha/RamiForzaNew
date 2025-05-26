"use client";

import { useState, useRef } from "react";
import styles from "./faqSection.module.css";

const QUESTIONS = [
  {
    id: "questionOne",
    question: "Why Do I Even Need A Website?",
    answer:
      "A website is your 24/7 storefront. It builds trust—75% of people judge a company's credibility by its site—and gives you visibility anywhere, anytime. Without one, you miss leads, sales and brand growth.",
  },
  {
    id: "questionTwo",
    question: "How Or Where Are You Going To Build My Website?",
    answer:
      "We build it with Next.js for optimal SEO and performance, plus React, HTML, CSS and JavaScript for a fully custom, fast-loading site.",
  },
  {
    id: "questionThree",
    question: "How long does it take?",
    answer: "Typically 10–14 days, depending on scope and content readiness.",
  },
  {
    id: "questionFour",
    question: "Do I need a website if I already have social media?",
    answer:
      "Yes. Social media complements your site, but only a website gives full control, better SEO, and a professional hub for sales and leads.",
  },
  {
    id: "questionFive",
    question: "How do I track the progress?",
    answer:
      "You get regular updates via our Slack channel and demo builds in your review environment.",
  },
  {
    id: "questionSix",
    question: "Can you help me with domain registration and hosting setup?",
    answer:
      "Absolutely. We’ll register your domain, pick the right hosting plan, and handle all DNS and SSL setup.",
  },
  {
    id: "questionSeven",
    question: "Will my website be mobile-responsive?",
    answer:
      "Yes. Every Next.js site we build is fully responsive across devices and screen sizes.",
  },
  {
    id: "questionEight",
    question: "What SEO benefits come with Next.js?",
    answer:
      "Next.js offers server-side rendering, automatic sitemap generation and fast page loads, which boost search rankings and crawlability.",
  },
  {
    id: "questionNine",
    question: "How much does it cost?",
    answer:
      "Pricing varies by project. After we review your requirements, we’ll send a clear, itemized quote.",
  },
  {
    id: "questionTen",
    question: "What support do you offer after launch?",
    answer:
      "We provide 30 days of free bug fixes and platform updates, plus optional ongoing maintenance plans.",
  },
];

export default function FaqSection() {
  const [activeQuestion, setActiveQuestion] = useState("");
  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? "" : id);
  };

  return (
    <section className={styles.faqSection} id="faqId">
      <div className={styles.faqHeadersContainer}>
        <h2 className={styles.faqHeader}>FAQs</h2>

        <h4 className={styles.faqSubheader}>Frequently Asked Questions</h4>
      </div>

      <div className={styles.faqContainer}>
        {QUESTIONS.map(({ id, question, answer }) => (
          <QuestionContainer
            key={id}
            question={question}
            answer={answer}
            isActive={activeQuestion === id}
            onClickFunction={() => toggleQuestion(id)}
          />
        ))}
      </div>
    </section>
  );
}

function QuestionContainer({ question, answer, isActive, onClickFunction }) {
  const contentRef = useRef(null);

  return (
    <button
      className={styles.questionAnswerContainer}
      onClick={onClickFunction}
    >
      <div className={styles.question}>
        <h4 className={styles.questionText}>{question}</h4>
        <i className={`material-icons ${styles.plusIcon}`}>
          {isActive ? "remove" : "add"}
        </i>
      </div>

      <div
        className={styles.answerWrapper}
        style={{
          height: isActive ? contentRef.current.scrollHeight : 0,
          transition: "height 0.3s ease",
          overflow: "hidden",
        }}
      >
        <p className={styles.answer} ref={contentRef}>
          {answer}
        </p>
      </div>
    </button>
  );
}
