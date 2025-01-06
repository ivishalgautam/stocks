import { rupee } from "@/hooks/Intl";
import {
  ChartCandlestick,
  ChartNoAxesCombined,
  Clock2,
  Headset,
  ReceiptIndianRupee,
  ShieldCheck,
  SirenIcon,
  UserRoundCheck,
} from "lucide-react";

export const whyChooseUs = [
  {
    title: "Real-Time Alerts",
    icon: SirenIcon,
    description:
      "Stay ahead of the market with instant notifications on price changes, trends, and breaking news.",
  },
  {
    title: "User-Friendly Platform",
    icon: UserRoundCheck,
    description:
      "Enjoy a clean, intuitive interface that makes buying and selling stocks simple, even for beginners.",
  },
  {
    title: "Advanced Analytics",
    icon: ChartNoAxesCombined,
    description:
      "Access powerful tools like charts, market trends, and insights to optimize your investment strategies.",
  },
  {
    title: "Secure Transactions",
    icon: ShieldCheck,
    description:
      "Trade with confidence knowing that your data and funds are protected by industry-leading security measures.",
  },
  {
    title: "24/7 Support",
    icon: Clock2,
    description:
      "Our dedicated team is available around the clock to assist with any questions or concerns.",
  },
  {
    title: "Custom Stock Alerts",
    icon: ChartCandlestick,
    description:
      "Set custom alerts based on your preferences, ensuring you never miss a valuable trading opportunity.",
  },
  {
    title: "Low Fees",
    icon: ReceiptIndianRupee,
    description:
      "Enjoy competitive transaction fees, so you keep more of what you earn in every trade.",
  },
  {
    title: "Expert Insights",
    icon: Headset,
    description:
      "Access market analysis and tips from experienced traders to sharpen your skills and strategies.",
  },
];

export const testimonials = [
  {
    content:
      'The platform has helped our team at Harmony save countless hours in stock analysis and trading decisions. "It\'s an indispensable tool for any trader."',
    author: "John, Portfolio Manager at Harmony",
    imgAlt: "John",
  },
  {
    content:
      '"I love how the platform adapts to my stock trading strategy. It feels like having a personal analyst right by my side!"',
    author: "James, Stock Trader at Sage",
    imgAlt: "James",
  },
  {
    content:
      "Traders report an average 20% boost in trade accuracy and portfolio performance using this platform.",
    author: "Peter, Investor",
    imgAlt: "Peter",
  },
  {
    content:
      '"The platform has simplified our stock tracking and allowed us to make quicker, smarter trading decisions!"',
    author: "Laura, Senior Analyst at Apex Trading",
    imgAlt: "Laura",
  },
  {
    content:
      '"With this platform, we’ve automated our stock alerts and analysis, enabling us to capitalize on every opportunity."',
    author: "Mike, Equity Trader at Tech Innovations",
    imgAlt: "Mike",
  },
  {
    content:
      '"The data insights provided by the platform are invaluable for making informed decisions in today\'s fast-paced stock market."',
    author: "Sarah, Day Trader at Bright Investments",
    imgAlt: "Sarah",
  },
  {
    content:
      '"Thanks to this platform, we’ve seen better results with our stock picks and quicker trade executions."',
    author: "David, Investment Analyst at FinTech Traders",
    imgAlt: "David",
  },
  {
    content:
      '"The stock tracking and analysis tools available have greatly improved our decision-making process for investments."',
    author: "Emily, Portfolio Manager at Global Ventures",
    imgAlt: "Emily",
  },
  {
    content:
      '"With this platform, I can stay updated on stock trends and make smarter, quicker buy/sell decisions."',
    author: "Samantha, Active Investor at InnovateTech",
    imgAlt: "Samantha",
  },
  {
    content:
      '"The platform has transformed my stock trading strategy with its real-time alerts and portfolio tracking features."',
    author: "Chris, Swing Trader at Peak Markets",
    imgAlt: "Chris",
  },
  {
    content:
      '"The insights and tools provided by the platform have allowed me to consistently make profitable trades."',
    author: "Kelly, Professional Trader at Visionary Capital",
    imgAlt: "Kelly",
  },
  {
    content:
      '"The predictive analytics on this platform have helped me identify profitable stock trends I would have otherwise missed."',
    author: "Alex, Trader at Digital Investments",
    imgAlt: "Alex",
  },
];

export const faqs = [
  {
    question: "What is a stock trading platform?",
    answer:
      "A stock trading platform is a digital tool that allows investors and traders to buy, sell, and track stocks and other financial instruments. It provides real-time data, analytics, and tools to help make informed trading decisions.",
  },
  {
    question: "How do I get started with the platform?",
    answer:
      "Simply sign up for an account on our website, complete the necessary verification process, and fund your account. Once you're set up, you can start tracking stocks, setting alerts, and executing trades.",
  },
  {
    question: "Is the platform suitable for beginners?",
    answer:
      "Yes, our platform is designed for both beginners and experienced traders. It offers easy-to-use features, educational resources, and customer support to guide you through the process of trading stocks.",
  },
  {
    question: "Can I trade stocks in real-time?",
    answer:
      "Yes, our platform provides real-time stock data, so you can monitor market movements and make timely trading decisions. You’ll receive immediate alerts based on your preferences for price changes and trends.",
  },
];

export const stocks = [
  {
    icon: "/icons/amazon.svg",
    title: "Amazon",
    price: rupee.format(763),
    isUp: Math.random() > 0.5,
  },
  {
    icon: "/icons/apple.svg",
    title: "Apple Inc.",
    price: rupee.format(826),
    isUp: Math.random() > 0.5,
  },
  {
    icon: "/icons/dribbble.svg",
    title: "Dribbble",
    price: rupee.format(815),
    isUp: Math.random() > 0.5,
  },
  {
    icon: "/icons/facebook.svg",
    title: "Facebook",
    price: rupee.format(432),
    isUp: Math.random() > 0.5,
  },
  {
    icon: "/icons/github.svg",
    title: "Github",
    price: rupee.format(451),
    isUp: Math.random() > 0.5,
  },
  {
    icon: "/icons/linkedin.svg",
    title: "Linkedin",
    price: rupee.format(981),
    isUp: Math.random() > 0.5,
  },
  {
    icon: "/icons/paypal.svg",
    title: "Paypal",
    price: rupee.format(341),
    isUp: Math.random() > 0.5,
  },
  {
    icon: "/icons/pinterest.svg",
    title: "Pinterest",
    price: rupee.format(469),
    isUp: Math.random() > 0.5,
  },
];
