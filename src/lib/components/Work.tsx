'use client'

const projects = [
  {
    title: 'Notion for EFREI',
    description: 'Fullstack web app for creating blogs like the original Notion app',
    repoUrl: 'https://github.com/aymene01/notion-for-efrei',
  },
  {
    title: 'go-blockchain',
    description: 'A simple in memory blockchain implementation in Go',
    repoUrl: 'https://github.com/aymene01/blockchain-go',
  },
  {
    title: 'Rustfull API',
    description: 'CRUD API using Rust and PostgreSQL, deployed on flow with Docker',
    repoUrl: 'https://github.com/aymene01/rustfull-api',
  },
]

const openSourceContribution = [
  {
    title: 'Lagon',
    description:
      'Lagon is an open-source runtime and platform that allows developers to run TypeScript and JavaScript Serverless Functions close to users. Now aquired by Vercel',
    repoUrl: 'https://github.com/lagonapp/lagon',
  },
]

const ProjectCard = ({ title, body, repoUrl }: { title: string; body: string; repoUrl: string }) => {
  return (
    <div className="space-y-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 flex flex-col justify-between flex-grow">
      <h1 className="text-2xl font-extralight">{title}</h1>
      <p>{body}</p>
      <a href={repoUrl} className="block mb-2">
        <button className="text-white group border-2 px-3 py-1 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 font-light">
          View code here
        </button>
      </a>
    </div>
  )
}

export const Work = () => {
  return (
    <div id="work" className="w-full text-gray-300 bg-[#0a192f] py-4">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Projects</p>
        </div>
        <div className="flex flex-wrap justify-start items-stretch space-y-4 md:space-y-0 mt-3">
          {projects.map(project => (
            <ProjectCard body={project.description} repoUrl={project.repoUrl} title={project.title} />
          ))}
        </div>
        <div className="pb-8 pt-16">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Open Source Contributions
          </p>
        </div>
        <div className="flex flex-wrap justify-start items-stretch space-y-4 md:space-y-0 mt-3">
          {openSourceContribution.map(project => (
            <ProjectCard body={project.description} repoUrl={project.repoUrl} title={project.title} />
          ))}
        </div>
      </div>
    </div>
  )
}
