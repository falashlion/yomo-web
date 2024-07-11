import React from 'react';

const EmailLink = () => {
  const email = 'hello@yo-mo.net';
  const subject = 'Hello';
  const body = 'I wanted to reach out to you regarding...';

  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className="text-blue-600 hover:underline">
      hello@yo-mo.net
    </a>
  );
};

export default EmailLink;
