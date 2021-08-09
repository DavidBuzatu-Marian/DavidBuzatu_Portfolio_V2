import React from 'react';
/* https://www.30secondsofcode.org/react/s/mailto */

const MailTo = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) {
    params += `subject=${encodeURIComponent(subject)}`;
  }
  if (body) {
    params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  }

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

export default MailTo;
