import React from "react";
import "./Content.scss";

function Content() {
  return (
    <div className="content">
      <div className="announcement">
        Due to the shelter-in-place, we are moving our classes online until
        further notice. We are currently adjusting to the new online system, and
        we will be reaching out to our current students soon. If you are
        interested in enrolling in any of our programs, please give us a call or
        send us an email.
      </div>
      <br />
      Questions? Reach us at team<code>@</code>jadebeautybarbercollege.com or at
      ‪‪(408) 641-8015‬.
      <br />
      <br />
      <a
        href="https://www.bppe.ca.gov/webapps/annual_report_2018.php?schoolCode=90323886"
        target="_blank"
      >
        BPPE Annual Report
      </a>
    </div>
  );
}

export default Content;
