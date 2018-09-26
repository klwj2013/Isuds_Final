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
    { question: 'Are Self-Serve Taps legal?', answer: "Yes!- We’ve done all the heavy lifting and received approval from the majority of the States Liquor authorities. Additionally, You are only giving your customers access to 32 ounces of beer or 12 ounces of wine at a time. In order to get access to more beer, the customer will need to come back to the bar, where they can be observed by your employee. If the customer appears intoxicated, you can cut them off." },
    { question: 'How do Customers Use it?', answer: "Your customers wil come to the bar and secure an RFID card after giving you an ID to ensure age verification and a credit card to ensure payment. They can now either pre-pay for a dollar amount or open a tab to pay when they are done. We limit their consumption to 2 drinks (32 oz of beer or 12 oz of wine at a time) As they approach their limit, your staff can recharge the patrons' cards at our terminal." },
    { question: 'Why iSuds?', answer: "iSuds is one of the only companies that offers self-serve bar taps for multiple types of drinks- if it can be kegged, it can be tapped! Beyond beer, we have self-serve taps for wine, cocktail, cold brew and kombucha! Our systems are so simple to install, a 6 year old can do it.. We've never had our systems replaced by a competitor's. No one else can honestly say that. Our system easily integrates with many common POS systems such as Micros, Square and more. Once your system is installed, we're not done helping you. If you have any issues with the technology, you can contact our team 24/7 for help get you pouring again quickly. In short, our team and products are a cut above the rest and we are passionate about what we do." },
    { question: "What's the difference between mobile and built-in units?", answer: "A mobile wine/beer wall or beer table is a completely self-contained beer system including fobs, faucets, cooling as well as our technology embedded into the units. Mobile units are ideal for easy install requiring nothing more than a 110v plug and a cat5 connection coming from the units to the Beer Card Management system or Staff Controller (This is where Beer Tables and Beer Cards are activated so customers can access taps). Built-in beer walls are integrated in your space and cannot be easily moved. They typically require careful planning by our team. Many business owners choose to add a beer wall during a renovation or initial build, although we can also integrate a beer wall in your current restaurant, bar, hotel or stadium. Our Team is by far the most experienced at assisting in this process and want to make the process as easy as possible for you so that you can focus on what matters - increasing your bottom line" },
    { question: "Are the RFID Cards and Screens Customizable?", answer: "Our system is fully customizable for your business."},
    { question: "How Do I Keep Track of How Much Product Is Sold?", answer: "The Software behind the hardware tracks every oz of every pour. Business owners are able to track more product than ever before. Track how much product you sell each night, each hour, at each tap or table! No more wasted product or un-paid pours."},
    { question: "How much does a self-serve beer wall cost?", answer: "Our system is built for your business. It's completely custom to based on needs, budget, number of taps, etc. Request a free quote to get an evaluation for your business!"},
    { question: "Where are your products made?", answer: "Our hardware and software is owned and created by iSuds We chose to partner with a company in Austria on building the custom hardware and software so that we can build a system custom to each business. With continued growth, there are various elements of the product being made by several teams spread out around the United States and Austria."},
    { question: "How quickly can you deliver and install your mobile self-serve tap units?", answer: "Mobile units can be installed as quickly as 4-6 weeks from the receipt of deposit. The actual installation is typically a 2-3 hour process, followed by an hour of staff training."},
    { question: "What type of support do you provide after the taps are installed?", answer: "We are the only company in this industry to have an established service network and offices on the East and West Coasts (Headquartered in Chicago, IL). Our team provides your business with 24/7 technical support, where we can virtually log in to your system, and diagnose any technical issue as if we were onsite. We also offer a monthly software/ hardware/ warrantee that comes at a low monthly rate to ensure that your system is working at all times. If its not 100% working, your monthly rate is adjusted accordingly. We have a vested interest in it working 100% of the time."},
  ];

  constructor() { }

  ngOnInit() {
  }

}



