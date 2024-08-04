import Image from 'next/image';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-purple-500">
      <div className="flex flex-col items-center">
        <Image
          src="/images/11826861.png"
          alt='Logo de Cibrox'
          width={100}
          height={75}
        />
        
        <div className=" ">
          <h1 className="text-4xl font-bold">Cibrox</h1>
        </div>
      
        <div className="container flex items-center w-80 justify-center p-4  rounded-md
           hover:scale-110 transition-all border border-gray-300 mb-3 bg-white mt-8">
         <div className="box">Cibrox</div>
         </div>


      
         <div className="container flex items-center  w-80 justify-center p-4 rounded-md
           hover:scale-110 transition-all border border-gray-300 mb-3 bg-white">
         <div className="box">Cibrox</div>
         </div>

      
         <div className="container flex items-center w-80  justify-center p-4 rounded-md
           hover:scale-110 transition-all border border-gray-300 mb-3 bg-white">
         <div className="box">Cibrox</div>
         </div>

         <div className="mt-3" >
          <Image
            src="/images/facebook.png"
            alt='Logo de Facebook'
            width={40}
            height={20}
            style={{ float: 'left', marginRight: '10px' }}
          />
          
          <Image
            src="/images/github.png" 
            alt='Otra imagen'
            width={40}
            height={20}
            style={{ float: 'left', marginLeft: '10px' }}
          />

          <Image
            src="/images/linkedin.png" 
            alt='Otra imagen'
            width={40}
            height={20}
            style={{ float: 'left', marginLeft: '10px' }}
          />
         </div>
      
      </div>

    </main>
  );
};

export default Home;
