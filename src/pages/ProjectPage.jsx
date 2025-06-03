const mainProjects = [
  {
    image: '/images/weather-app.jpg',
    title: 'Weather App',
    desc: 'Flutter + Firebase integration',
  },
  {
    image: '/images/todo_app.jpg',
    title: 'Todo List',
    desc: 'UseState + CRUD features',
  },
  {
    image: '/images/shoppimg-app.jpg',
    title: 'E-commerce',
    desc: 'React + Tailwind landing page',
  },
    {
    image: '/images/chat-app.jpg',
    title: 'Chat App',
    desc: 'React + Socket.io real-time messaging',
  },
  {
    image: '/images/portfolio.jpg',
    title: 'Portfolio Site',
    desc: 'Next.js + Tailwind CSS + Responsive design',
  },
  {
    image: '/images/blog-app.jpg',
    title: 'Blog App',
    desc: 'MERN stack + rich text editor',
  },
];


export default function ProjectsPage() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {mainProjects.map((proj, index) => (
          <div key={index} className="p-6 bg-white rounded-lg ">
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-fill rounded mb-3"
            />
            <h4 className="text-xl font-bold">{proj.title}</h4>
            <p className="text-gray-600">{proj.desc}</p>
          </div>
        ))}
      </div>

    
    </section>
  );
}
