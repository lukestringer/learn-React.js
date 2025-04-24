export default function Page() {
  async function submitForm(formData: FormData) {
    "use server"; //server side function which can be called from client side code
    const formFields = {
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };
    console.log(formFields); //NB: this will show in the terminal as it's a server action
    return formFields;
  }
  return (
    <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md text-black">
      <h1 className="text-2xl font-bold text-center mb-6">Contact Us:</h1>
      <form action={submitForm} className="space-y-4">
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
