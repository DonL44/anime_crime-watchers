import Head from 'next/head';
import BreadCrumb from '../../components/common/BreadCrumb';
import Header from '../../components/Home/Header';



const Team = () => {
   return (
      <>
      <Head>
         <title>Team Page</title>
       </Head>

         <Header/>
         <BreadCrumb title="Our Team" subtitle="Team" />
         <TeamArea/>
    
      </>
   );
};

export default Team;