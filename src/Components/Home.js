const Home = () => {
  return (
    <main className="max-w-screen-xl mx-auto text-white flex justify-between items-center font-mono">
      <div className="w-5/12">
        <h1 className="text-4xl">
          Tarak is a <span className="text-orange-400">front-end developer</span>
        </h1>
        <p className="my-8">He crafts responsive websites where technologies meet creativity</p>
        <button className="border rounded-sm p-2 border-orange-400 font-semibold">Contact me!!</button>
      </div>
      <div className="flex flex-col my-10 items-center">
        <img className="h-96 w-96" alt="Image" src="" />
        <p className="font-semibold text-lg border border-white my-1 p-1 rounded-sm">🟠 Currently working of portfolio</p>
      </div>
    </main>
  );
};

export default Home;
