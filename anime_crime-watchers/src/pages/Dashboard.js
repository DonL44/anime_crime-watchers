const Dashboard = ({ user }) => {
    return (
      <section className='section'>
        <h4>Hello, {user?.name}</h4>
      </section>
    );
  };

  // const Cards = () => {
  //   return (
  //     <div className='w-full py-[10rem] px-4 bg-white'>
  //       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
  //           <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
  //               {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
  //               <h2 className='text-2xl font-bold text-center py-8'> {user?.name}</h2>
                
  //               <div className='text-center font-medium'>
  //                   <p className='py-2 border-b mx-8 mt-8'>lorem</p>
  //                   <p className='py-2 border-b mx-8'>lorem</p>
  //                   <p className='py-2 border-b mx-8'>lorem</p>
  //               </div>
  //               <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> Contact</button>
  //           </div>
  //           </div>
  //           </div>
  export default Dashboard;