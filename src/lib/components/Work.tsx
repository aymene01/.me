'use client'

import { SimpleGrid, Card, CardHeader, Heading, CardBody, Text, Button, CardFooter } from '@chakra-ui/react'

const Work = () => {
  const projects = [
    {
      title: 'KLAT',
      description: 'Fullstack web and mobile app using latest technologies',
      repoUrl: 'https://github.com/aymene01/klat',
    },
    {
      title: 'V9 engine',
      description: 'The next Google V8 engine written in Rust',
      repoUrl: 'https://github.com/aymene01/v9',
    },
    {
      title: 'SteelVolt',
      description: 'Database Engine written in Rust',
      repoUrl: 'https://github.com/aymene01/SteelVault',
    },
  ]

  return (
    <div id="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Current Projects</p>
        </div>
        <SimpleGrid className="left-4" spacing={3} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
          {projects.map((project, index) => (
            <Card key={index} className="-space-y-5">
              <CardHeader>
                <Heading size="md">{project.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{project.description}</Text>
              </CardBody>
              <CardFooter>
                <a href={project.repoUrl}>
                  <button className="text-white group border-2 px-3 py-1 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                    View code here
                  </button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </div>
    </div>
  )
}

export default Work
