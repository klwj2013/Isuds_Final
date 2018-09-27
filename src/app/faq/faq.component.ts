import { fade } from './../animations';
import { Component, OnInit } from '@angular/core';

export interface QuestionAnswer {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  animations: [fade]
})
export class FAQComponent implements OnInit {

  panelOpenState = false;

  questionAnswerList: QuestionAnswer[] = [
    { question: 'How Does The System Comply With State Alcohol Laws?', answer: "Absolutely! Customers have to check in and are required to show ID verification as well as a credit or debit card to ensure payment. The customer is issued an RFID card that is equipped with an algorithm that shuts off after the number of ounces consumed has been reached by the consumer, typically 32oz.  Once the limit has been reached the customer must check in again to reload the card." },
    { question: 'Why iSuds?', answer: "Our dedication to fine tuning the self-serve beer technology sets us a part from the rest. Aside from the ease of use and 24/7 customer support, we have fabricated a totally customizable product, one that can be used in businesses of any size. No matter your needs or budget, iSuds can help bring your business to the next level." },
    { question: 'What’s the Difference between “Plug & Play” Units and Beer Walls?', answer: "Our “Plug & Play” unit is a self-contained system containing the cooling, faucets, and our iSuds hardware . It’s easy to install and requires nothing more than an electrical outlet and an internet cable. This option is perfect for a business who don’t have time for renovations or don’t have enough wall space. There is no down time with this all-in-one unit. Our built in beer walls are masterfully designed with your space in mind. Because they cannot be easily moved, our team of experts with work with you to ensure your vision matches ours. We can integrate our system in any venue;  bar, stadium, or restaurant. From New build, to renovations, or even in existing spaces, iSuds can turn your space into a beer garden." },
    { question: 'Does the system keep track of how much product I sold? ', answer: "Our software tracks every ounce of beer, every day, in real time. Never again lose money on wasted beer. Know which beers are selling, and how much your profiting.  Statistics have shown an increase in revenue of more than 40% when self-serve taps have been implemented. That’s lot of profit!" },
    { question: 'Can the RFID cards and screens be customized?', answer: "Most definitely! Both the RFID cards and the screens are completely customizable. iSuds is the only company that allows you, the business owner to advertise on each screen. You can promote events, specials, other products and even sell ad space for additional revenue." },
    { question: 'How long is the process from conception to installation?', answer: "Plug & Play” Units can be delivered and installed in as little as 6-8 weeks. The wall units require more time. Because no two businesses are alike, we cannot gauge how long it would take to install them. Please call us for more info." },
    { question: 'Do you provide technical support?', answer: "Headquartered in Richmond, VA, our team is here 24/7 to assist you with any questions, concerns or diagnostics. " },
  ];

  constructor() { }

  ngOnInit() {
  }

}



