import React from 'react';
import './style.css';


export default function Footer() {
  
  const FooterSection = ({ title, items }) => {
    return (
      <div>
        <h4>{title}</h4>
        {items.map((item, index) => (
          <p key={index}><a href="#">{item}</a></p>
        ))}
      </div>
    )
  }

  const sections = [
    { title: 'SNEAKER HEADS', items: ['Company', 'LEGAL', 'FAQ', 'Payment Methods']},
    { title: 'Our Partnerships', items: ['DHL', 'UPS', 'DPF', 'FEDEX']},
    { title: 'COMPANY', items: ['About Us', 'Career', 'Partnerships', 'Blog']},
    { title: 'CONTACT', items: ['SNEAKER HEADS', 'ShoeRd. 187', 'Sneaker City', 'sneakerheads@info.com', 'Tel: 000-111-222']},
    { title: 'SOCIAL', items: ['Facebook', 'Instagram', 'Twitter']}
  ]
  
  return (
    <footer>
      {sections.map((section, index) => (
        <FooterSection key={index} title={section.title} items={section.items} />
      ))}
    </footer>
  )
}