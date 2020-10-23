import React from 'react';
import Link from 'next/link'

function ContactPage() {
  return(
    <>
    <h1>Contact page!</h1>

    <Link href='/'>
      <a>Back</a>
    </Link>
    </>
  );
}

export default ContactPage;