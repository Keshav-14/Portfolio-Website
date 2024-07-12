import React from 'react'

const Form = () => {
  return (
    <div class="max-w-[360px] w-full mx-auto bg-white rounded-lg shadow-xl p-4 shadow-green-500">
        <form>
            <div class="mb-4">
            <label class="block mb-2 text-black" for="name"> Name </label>
            <input
                placeholder="Your Name"
                class="w-full p-2 border-b-2 border-green-500 bg-transparent outline-none focus:border-b-2 focus:border-orange-950"
                type="text"
            />
            </div>
            <div class="mb-4">
            <label class="block mb-2 text-black" for="email"> Email </label>
            <input
                placeholder="Your Email"
                class="w-full p-2 border-b-2 border-green-500 bg-transparent outline-none focus:border-b-2 focus:border-orange-950"
                name="email"
                id="email"
                type="email"
            />
            </div>
            <div class="mb-4">
            <label class="block mb-2 black" for="message"> Message </label>
            <textarea
                placeholder="Your Message"
                class="w-full p-2 border-b-2 border-green-500 bg-transparent outline-none focus:border-b-2 focus:border-orange-950"
                rows="4"
                name="message"
                id="message"
            ></textarea>
            </div>
            <div class="mb-4">
            <button
                class="w-full bg-green-500 text-gray-700 font-semibold p-2 rounded transition-all hover:bg-white hover:border-2 hover:border-green-500"
                type="submit"
            >
                Submit
            </button>
            </div>
        </form>
    </div>
)
}

export default Form