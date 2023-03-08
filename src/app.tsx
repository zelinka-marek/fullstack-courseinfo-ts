function Header(props: { name: string }) {
  const { name } = props;

  return <h1>{name}</h1>;
}

type CoursePart = {
  name: string;
  exerciseCount: number;
};

function Content(props: { parts: CoursePart[] }) {
  const { parts } = props;

  return (
    <div>
      {parts.map((part) => (
        <p key={part.name}>
          {part.name} {part.exerciseCount}
        </p>
      ))}
    </div>
  );
}

function Total(props: { count: number }) {
  const { count } = props;

  return <p>Number of exercises {count}</p>;
}

export function App() {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
    },
  ];
  const totalExercises = courseParts.reduce(
    (total, part) => total + part.exerciseCount,
    0
  );

  return (
    <div>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total count={totalExercises} />
    </div>
  );
}
