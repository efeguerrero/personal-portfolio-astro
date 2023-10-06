//Component Imports
import Container from '@/components/common/Container.jsx';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
];

const Nav = () => {
  return (
    <section className="absolute pb-8 pt-14 inset-x-0 top-0">
      <Container>
        <nav className=" w-full  bg-transparent">
          <div className="flex gap-8 justify-start md:justify-center items-center">
            {navigation.map((item, index) => {
              return (
                <a
                  aria-label={`Link to ${item.name} section`}
                  key={index}
                  className="text-neutral-200 font-light lowercase  text-lg  cursor-pointer hover:text-neutral-50 transition-colors duration-200 ease-in-out"
                  href={item.href}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </nav>
      </Container>
    </section>
  );
};

export default Nav;
