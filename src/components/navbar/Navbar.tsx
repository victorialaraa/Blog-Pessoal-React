function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-gray-800 text-gray-50'>
                
                <div className="container flex justify-between text-lg pr-4 pl-4">
                    Blog pessoal

                    <div className='flex gap-4'>
                        Postagens
                        Temas
                        Cadastrar tema
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
