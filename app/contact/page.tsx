"use client";
import { showToast } from "react-next-toast";

export default function ContactPage() {
    //@ts-expect-error event type 
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    event.target.reset()
    

    const response = await fetch("/api/mail", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    if (result.success) {
      console.log(result);
      showToast.success('Email sent!');
    }
  }
//add bg pic behind form?
  return (
    <section className="bg-background h-screen pt-6 sm:pt-0">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-text2">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-text2h sm:text-xl">
          Got a question? Want to send feedback about out products? Need details
          about a product? Let us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="text-logo shadow-sm bg-secondary border border-text2 text-sm rounded-lg focus:ring-primary-500 placeholder-primary  focus:border-primary-500 block w-full p-2.5 "
              placeholder="your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="text-logo shadow-sm bg-secondary border border-text2 text-sm rounded-lg focus:ring-primary-500 placeholder-primary  focus:border-primary-500 block w-full p-2.5 "
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="text-logo block p-3 w-full text-sm  bg-secondary rounded-lg border border-text2 shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-primary text-primary"
              placeholder="Let us know how we can help you"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-text2"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="block p-2.5 w-full text-sm text-primary bg-secondary rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-bold text-center text-primary rounded-lg bg-secondary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
