import React from "react";
import "./Content.scss";

function Content() {
  return (
    <div className="content">
      <div className="announcement">
        Jade Beauty and Barber College is now open for hybrid learning. Students
        can learn theory online and come in person for practical lessons. We
        follow Covid-19 safety protocols and cleaning methods in our school,
        which all students must adhere to if they enter school premises. If you
        are interested in enrolling in any of our programs, the best way to
        reach us is by calling.
      </div>
      <br />
      Questions? Reach us at team<code>@</code>jadebeautybarbercollege.com or at
      ‪‪(408) 641-8015‬.
      <br />
      <br />
      <a
        href="https://www.bppe.ca.gov"
        target="_blank"
        rel="noopener noreferrer"
      >
        BPPE Website
      </a>
      <br />
      <a
        href="https://www.bppe.ca.gov/webapps/annual_report_2018.php?schoolCode=90323886"
        target="_blank"
        rel="noopener noreferrer"
      >
        BPPE Annual Report
      </a>
      <br />
      <a
        href="/2021 Jade School's Catalogue.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        School Catalogue
      </a>
      <br />
      <div className="title">Brochures</div>
      <ul>
        <li>
          <a
            href="/brochures/Cosmetology Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cosmetology Brochure
          </a>
        </li>
        <li>
          <a
            href="/brochures/Barber Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Barber Brochure
          </a>
        </li>
        <li>
          <a
            href="/brochures/Nail Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nail Care Brochure
          </a>
        </li>
        <li>
          <a
            href="/brochures/Esthethician Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skin Care Brochure
          </a>
        </li>
      </ul>
      <div className="title">Performance Sheets</div>
      <ul>
        <li>
          <a
            href="/performance sheets/2019 COSMETOLOGY performance sheet.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cosmetology Performance Sheet
          </a>
        </li>
        <li>
          <a
            href="/performance sheets/2019 BARBER performance sheet.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Barber Performance Sheet
          </a>
        </li>
        <li>
          <a
            href="/performance sheets/2019 NAIL CARE performance sheet.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nail Care Performance Sheet
          </a>
        </li>
        <li>
          <a
            href="/performance sheets/2019 SKIN CARE performance sheet.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skin Care Performance Sheet
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Content;
