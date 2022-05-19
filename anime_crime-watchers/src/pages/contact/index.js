import Head from 'next/head';
import BreadCrumb from '../../../components/common/BreadCrumb';
import ContactArea from '../../../components/Contact/ContactArea';
import ContactFooter from '../../../components/Contact/ContactFooter';

import Header from '../../../components/Home/Header';

const Contact = () => {
   return (
      <>
      <Head>
         <title>Contact Page</title>
       </Head>

         <Header />
         <BreadCrumb title="Contact" subtitle="Contact" />
         <ContactArea />
        
         <ContactFooter />
      </>
   );
};

export default Contact;