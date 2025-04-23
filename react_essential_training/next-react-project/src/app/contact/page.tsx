export default function Page() {
  return (
    <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md text-black">
      <h1 className="text-2xl font-bold text-center mb-6">Contact Us:</h1>
      <form action="" className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white-700"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border-black-300 focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white-700"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={4}
            className="border-black-300 focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500"
          ></textarea>
        </div>
        <button type="submit" className="text-white bg-blue-600 rounded-md p-3">
          Send Message
        </button>
      </form>
    </main>
  );
}
