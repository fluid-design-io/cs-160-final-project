import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl font-bold underline mb-8">Hello world!</div>
      <h3 className="text-primary-default text-2xl font-logo">{name}</h3>
      <p>
        is a great place to start. Start with Ionic{" "}
        <a
          className="text-tertiary-default mt-4"
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
