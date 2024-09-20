import GenderCheckbox from "./GenderCheckbox"

const Signup = () => {
    return (
        <div className="flex flex-col items-center 
        justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 
            bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

                <h1 className="text-center font-extrabold text-4xl btn-accent">

                    Signup

                </h1>

                <form className="mt-6 space-y-6">
                    <div>
                        <div>
                            <label className="label p-2" >
                                <span className="text-base label-text"> Full Name</span>
                            </label>
                            <input type="text" placeholder="Enter Full Name" id="fullname" className="text-base label-text w-full px-4 py-2 mt-2 input-bordered h-10"></input>
                        </div>
                        <div>
                            <label className="label p-2" >
                                <span className="text-base label-text"> Username</span>
                            </label>
                            <input type="text" placeholder="Enter Username" id="username" className="text-base label-text w-full px-4 py-2 mt-2 input-bordered h-10"></input>
                        </div>
                        <div>
                            <label htmlFor="password" className="label p-2">
                                Password
                            </label>
                            <input type="password" placeholder="Enter Password" id="password" className=" text-base label-text w-full px-4 py-2 mt-2 
                        text-gray-700 rounded-lg focus:outline-none" />
                        </div>
                        <div>
                            <label htmlFor="password" className="label p-2">
                                Confirm Password
                            </label>
                            <input type="password" placeholder="Confirm Password" id="password" className=" text-base label-text w-full px-4 py-2 mt-2 
                        text-gray-700 rounded-lg focus:outline-none" />
                        </div>
                        <div>
                            <GenderCheckbox />
                        </div>

                    </div>
                    <a href="#" className="text-sm text-blue-600 hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</a>

                    <div>
                        <button className="btn btn-neutral btn-block mt-2">Signup</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signup

//Starter code
// export default Signup


// import GenderCheckbox from "./GenderCheckbox"

// const Signup = () => {
//     return (
//         <div className="flex flex-col items-center
//         justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400
//             bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

//                 <h1 className="text-center font-extrabold text-4xl btn-accent">

//                     Signup

//                 </h1>

//                 <form className="mt-6 space-y-6">
//                     <div>
//                         <div>
//                             <label className="label p-2" >
//                                 <span className="text-base label-text"> Full Name</span>
//                             </label>
//                             <input type="text" placeholder="Enter Full Name" id="fullname" className="text-base label-text w-full px-4 py-2 mt-2 input-bordered h-10"></input>
//                         </div>
//                         <div>
//                             <label className="label p-2" >
//                                 <span className="text-base label-text"> Username</span>
//                             </label>
//                             <input type="text" placeholder="Enter Username" id="username" className="text-base label-text w-full px-4 py-2 mt-2 input-bordered h-10"></input>
//                         </div>
//                         <div>
//                             <label htmlFor="password" className="label p-2">
//                                 Password
//                             </label>
//                             <input type="password" placeholder="Enter Password" id="password" className=" text-base label-text w-full px-4 py-2 mt-2
//                         text-gray-700 rounded-lg focus:outline-none" />
//                         </div>
//                         <div>
//                             <label htmlFor="password" className="label p-2">
//                                 Confirm Password
//                             </label>
//                             <input type="password" placeholder="Confirm Password" id="password" className=" text-base label-text w-full px-4 py-2 mt-2
//                         text-gray-700 rounded-lg focus:outline-none" />
//                         </div>
//                         <div>
//                             <GenderCheckbox />
//                         </div>

//                     </div>
//                     <a href="#" className="text-sm text-blue-600 hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</a>

//                     <div>
//                         <button className="btn btn-neutral btn-block mt-2">Signup</button>
//                     </div>
//                 </form>

//             </div>
//         </div>
//     )
// }


