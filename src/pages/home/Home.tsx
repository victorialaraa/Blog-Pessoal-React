function Home() {
  return (
    <>
      <div className="bg-gray-50 flex justify-center h-px">
        <div className="container grid grid-cols-2 text-gray-800">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-sans font-bold">Seja Bem-vindo!</h2>
            <p className="text-xl font-sans">
              Expresse aqui seus pensamentos e opniões
            </p>

            <div className="flex justify-around gap-4">
              <div
                className="rounded text-gray-800
                   border-gray-800 border-solid border-2 py-2 px-4 hover:bg-gray-100
                  transition-colors cursor-pointer"
              >
                Nova Postagem
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://imgur.com/a/ReLtimK"
              alt="Imagem Página Home"
              className="mb-5 mt-20 w-2/3 rounded-lg shadow-lg brightness-90"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;