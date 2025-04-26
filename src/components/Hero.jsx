function Hero() {
    return (
      <main
      className="w-full h-[40vh] flex flex-col items-center justify-center p-8 bg-cover bg-center"
        style={{
            width: "100%",
          backgroundImage: "url('/assets/coesamuseIMGM7449.JPG')",
        }}
      >
        <section className="flex flex-col items-center justify-center text-center py-20 font-baseRegular">
          <div
            className="p-4 mb-6 rounded-lg bg-opacity-80"
            style={{ backgroundColor: "#E3EFF5" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Felicita Festival
            </h1>
            <p className="text-lg md:text-2xl max-w-xl">
              Un festival magique organisé par des potes, pour des potes ❤️
            </p>
          </div>
        </section>
      </main>
    );
  }
  
  export default Hero;
  