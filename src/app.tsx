import type { CoursePart } from "./types";

function Header(props: { name: string }) {
  const { name } = props;

  return <h1>{name}</h1>;
}

function Part(props: { course: CoursePart }) {
  const { course } = props;

  switch (course.kind) {
    case "basic": {
      return (
        <p>
          <div>
            <strong>
              {course.name} {course.exerciseCount}
            </strong>
          </div>
          <div>
            <em>{course.description}</em>
          </div>
        </p>
      );
    }
    case "group": {
      return (
        <p>
          <div>
            <strong>
              {course.name} {course.exerciseCount}
            </strong>
          </div>
          <div>project exercises {course.groupProjectCount}</div>
        </p>
      );
    }
    case "background": {
      return (
        <p>
          <div>
            <strong>
              {course.name} {course.exerciseCount}
            </strong>
          </div>
          <div>
            <em>{course.description}</em>
          </div>
          <div>
            submit to{" "}
            <a href={course.backroundMaterial} target="_blank" rel="noreferrer">
              {course.backroundMaterial}
            </a>
          </div>
        </p>
      );
    }
  }
}

function Content(props: { parts: CoursePart[] }) {
  const { parts } = props;

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.name} course={part} />
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
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group",
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic",
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backroundMaterial:
        "https://type-level-typescript.com/template-literal-types",
      kind: "background",
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
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
