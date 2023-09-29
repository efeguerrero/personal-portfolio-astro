const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="container px-6 2xl:p-0">{children}</div>
    </div>
  );
};

export default Container;
