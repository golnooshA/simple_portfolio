const projects = [
  { image:'/images/weather-app.jpg', title: 'Weather App', desc: 'Flutter + Firebase integration' },
  { image:'/images/todo_app.jpg',title: 'Todo List', desc: 'UseState + CRUD features' },
  { image:'/images/shoppimg-app.jpg', title: 'E-commerce', desc: 'React + Tailwind landing page' },
];

export default function Projects() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-semibold text-center">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {projects.map((proj, index) => (
          <div key={index} className="p-6 bg-white">
            <img 
            src={proj.image}
          alt="My Projects"
          className="w-[500px] h-auto rounded-lg mb-2"/>
              <h3 className="text-xl font-bold">{proj.title}</h3>
                  <p className="mt-2 text-gray-600">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
