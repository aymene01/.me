'use client'

const ProjectCard = ({ title, body, repoUrl }: { title: string; body: string; repoUrl: string }) => {
  return (
    <div className="space-y-5 w-1/5 flex flex-col justify-around maz">
      <h1 className="text-2xl font-extralight">{title}</h1>
      <p>{body}</p>
      <a href={repoUrl} className="block">
        <button className="text-white group border-2 px-3 py-1 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
          View code here
        </button>
      </a>
    </div>
  )
}

const Work = () => {
  const projects = [
    {
      title: 'KLAT',
      description: 'Fullstack web and mobile app using latest technologies',
      repoUrl: 'https://github.com/aymene01/klat',
    },
    {
      title: 'Notion for EFREI',
      description: 'Fullstack web app for creating blogs like the original Notion app',
      repoUrl: 'https://github.com/aymene01/notion-for-efrei',
    },
    {
      title: 'V9',
      description: 'The next Google V8 engine written in Rust (just started)',
      repoUrl: 'https://github.com/aymene01/v9',
    },
  ]

  return (
    <div id="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Current Projects</p>
        </div>
        <div className="flex flex-wrap justify-between mt-4">
          {projects.map(project => (
            <ProjectCard body={project.description} repoUrl={project.repoUrl} title={project.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
