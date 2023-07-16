import emailIcon from "./assets/email-icon.png";
import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

    const [state, handleSubmit] = useForm("xgejwkeb");

    state.succeeded ? alert("Thanks for submitting!") : <></>
    return <>
        <div className="container mx-auto py-6 md:mt-32 mt-16" id="contact">
            <div className="lg:w-2/3 mx-auto md:px-3 px-6 gap-8 md:flex items-center">
                <div className="md:w-1/2">
                    <div className="font-semibold mb-2 lg:text-5xl text-[#121111]/90 text-2xl">Let's discuss about</div>
                    <div className="font-semibold mb-10 lg:text-5xl text-[#121111]/90 text-2xl"> your project!</div>
                    <div className="flex gap-4 mt-8 items-center">
                        <div className="border bg-slate-200 p-2 rounded-full">
                            <img src={emailIcon} alt="email-icon" width={24} />
                        </div>
                        <div>
                            <h3 className="font-normal md:text-lg">Mail me at</h3>
                            <h3 className="font-semibold md:text-xl text-[16px]">zainhamid982@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:my-0 my-8">
                    <h3 className="font-semibold text-lg md:text-xl">Send me a message!</h3>
                    <div className="max-w-md mt-4">

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input type="text" id="name"
                                    name="name" placeholder="Name:"
                                    required
                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="mb-4">
                                <input type="email" id="email" required name="email" placeholder="Email"
                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="mb-6">
                                <textarea id="message" name="message"
                                    placeholder="Message" rows="5"
                                    required
                                    className="shadow resize-none appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" disabled={state.submitting} className="bg-[#121111] hover:bg-[#121111]/90 text-white w-full font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Submit</button>
                            </div>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    </>

}

export default Contact;