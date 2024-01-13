function App() {
    return (
        <div>
            <div>
                <nav className="p-2 bg-red-400 flex items-center ">
                    <div>
                        <span className="text-white font-bold">KALVIUM</span>
                    </div>
                    <div className=" flex items-center justify-between w-full">
                        <div className="flex ml-5  text-sky-200 ">
                            <h3 className="mr-4 ">About us</h3>
                            <h3 className="mr-4 ">Contacts</h3>
                            <h3 className="mr-4 ">Courses</h3>
                        </div>
                        <div>
                            <button href=" " className="text-white border-white border rounded p-2 px-4">Login</button>
                        </div>
                    </div>
                </nav>
                <div className="p-4 px-10">
                    <button className="text-white active:bg-blue-400 p-2 bg-blue-500 text-xs font-bold rounded">Button one</button>
                    <div className="bg-red-100 border border-red-500 rounded text-red-600 px-5 py-2 my-4" role="alert">
                        <strong>Alert! </strong>
                        <span>This is awesome!</span>
                    </div>
                </div>
                <div className="p-6 max-w-md mx-auto bg-slate-000 rounded-xl shadow-xl flex items-center space-x-4">
                    <div className="shrink-0">
                        <img className="h-10 w-25" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">Kalvium Store</div>
                        <p className="text-slate-500">You have a new Course!</p>
                    </div>
                </div>
            </div>
            <footer className="bg-gray-200 text-center py-4">
                <div className="container mx-auto items-center">
                    <p>&copy; 2023 KALVIUM. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default App