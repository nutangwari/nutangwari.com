export default function Home() {
  return (
    <div className='h-full w-full'>
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
