export default function Contact() {
  return (
    <section className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>

      <form
        className="w-full max-w-md bg-white p-6 rounded-lg "
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message submitted!");
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FCC24B] text-white py-2 px-4 rounded hover:bg-[#3e4491] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
