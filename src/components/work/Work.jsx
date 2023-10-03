//Component Import
import ReactIcon from '@/assets/icons/ReactIcon';

const Work = ({ project }) => {
  return (
    <>
      <div className="shrink-0">
        <h2 className="lg:text-[54px] text-3xl lg:text-4xl  leading-none font-semibold lg:text-neutral-300 text-neutral-400 capitalize">
          {project.name}
        </h2>

        <p className="max-w-[50ch] text-base my-8  text-neutral-400 lg:text-neutral-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 lg:gap-3 max-w-[80%] items-center ">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-neutral-300 capitalize text-sm rounded-full px-3 py-1 bg-neutral-950/70"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-6 mt-8 items-center">
          <a
            target="_blank"
            href={project.demoURL}
            className="text-neutral-400"
          >
            <ReactIcon icon="openInNew" className="w-7 h-7" />
          </a>
          {project.githubURL !== 'none' ? (
            <a
              target="_blank"
              href={project.githubURL}
              className="text-neutral-400"
            >
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
