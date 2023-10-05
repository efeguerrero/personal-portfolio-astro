//Component Import
import ReactIcon from '@/assets/icons/ReactIcon';

const Work = ({ project }) => {
  return (
    <>
      <div class="flex w-full items-center mb-4 justify-between">
        <h2 className="text-lg font-semibold  text-neutral-300 capitalize">
          {project.name}
        </h2>
        <div className="flex items-center gap-6 justify-between">
          <a
            target="_blank"
            href={project.demoURL}
            className="text-neutral-300"
          >
            <ReactIcon icon="openInNew" className="w-7 h-7" />
          </a>
          {project.githubURL !== 'none' ? (
            <a
              target="_blank"
              href={project.githubURL}
              className="text-neutral-300"
            >
              <ReactIcon icon="github" className="w-6 h-6" />
            </a>
          ) : null}
        </div>
      </div>
      <p className="text-neutral-400 text-base my-4 ">{project.description}</p>
      <div className="flex flex-wrap gap-x-3 gap-y-2 my-4 items-center ">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-neutral-300 capitalize text-xs rounded-full px-4 py-1 bg-neutral-800/90 lg:bg-neutral-900/80"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );
};

export default Work;
