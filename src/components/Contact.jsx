export default function Contact() {
  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-xl font-semibold">Contact Me</h2>
      <p className="mt-4 text-sm">📧 {''}
        <a
          href="https://mail.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline">
        myemail@example.com</a>
      </p>


      
      <p className="mt-2 text-sm">
        💼{' '}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </p>
    </section>
  );
}
