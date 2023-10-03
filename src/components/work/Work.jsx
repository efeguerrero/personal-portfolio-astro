//Component Import
import ReactIcon from '@/assets/icons/ReactIcon';

const Work = ({ project }) => {
  return (
    <>
      <div className="shrink-0">
        <h2 className="text-[54px] leading-none font-bold text-neutral-300 capitalize">
          {project.name}
        </h2>

        <p className="max-w-[50ch] text-base my-8  text-neutral-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-4  items-center ">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-neutral-300 capitalize text-xs rounded-full px-3 py-1 bg-neutral-950/70"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-6 mt-8  items-center">
          <a href={project.demoURL} className="text-neutral-400">
            <ReactIcon icon="openInNew" className="w-6 h-6" />
          </a>
          {project.githubURL !== 'none' ? (
            <a href={project.githubURL} className="text-neutral-400">
              <ReactIcon icon="github" className="w-6 h-6" />
            </a>
          ) : null}
        </div>
      </div>
      <div className="my-8 ">
        <img
          className="grayscale max-w-[40rem] w-full aspect-square  "
          src={project.img}
          alt="Project Image"
        />
      </div>
    </>
  );
};

export default Work;
