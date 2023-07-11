export default function Home() {
  return (


    <div className='h-full w-full'>

      <div className="absolute ">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#333333" d="M56,-33.4C68.7,-10.3,72.5,16.9,61.7,32.9C50.9,48.9,25.5,53.7,6.2,50.1C-13,46.5,-26,34.5,-38.6,17.4C-51.3,0.4,-63.6,-21.7,-57.1,-41.3C-50.6,-60.9,-25.3,-77.9,-1.9,-76.9C21.6,-75.8,43.2,-56.6,56,-33.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <section className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-[3rem] font-bold bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent tracking-tighter">@nutangwari</h1>

        <div className="flex justify-between items-center text-lg">
          <span className="text-cyan-500">Frontend Engineer</span>
          {/* <span className="block h-2 w-2 mx-12 bg-cyan-400 rounded-full"></span>
          <span className="text-green-400">Generative Artrist</span> */}
          {/* <span className="block h-2 w-2 mx-12 bg-green-400 rounded-full"></span>
          <span className="text-green-500">Speaker</span> */}

          {/* <p>
            I write about frontend technologies, Hire M
          </p> */}
        </div>
      </section>
    </div>
  );
}
