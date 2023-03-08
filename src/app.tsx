import type { CoursePart } from "./types";
import { assertNever } from "./utils";

function Header(props: { name: string }) {
  const { name } = props;

  return <h1>{name}</h1>;
}

function Part(props: { part: CoursePart }) {
  const { part } = props;

  switch (part.kind) {
    case "basic": {
      return (
        <p>
          <div>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </div>
          <div>
            <em>{part.description}</em>
          </div>
        </p>
      );
    }
    case "group": {
      return (
        <p>
          <div>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </div>
          <div>Project exercises: {part.groupProjectCount}</div>
        </p>
      );
    }
    case "background": {
      return (
        <p>
          <div>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </div>
          <div>
            <em>{part.description}</em>
          </div>
          <div>
            Submit to:{" "}
            <a href={part.backroundMaterial} target="_blank" rel="noreferrer">
              {part.backroundMaterial}
            </a>
          </div>
        </p>
      );
    }
    case "special": {
      return (
        <p>
          <div>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </div>
          <div>
            <em>{part.description}</em>
          </div>
          <div>Required skills: {part.requirements.join(", ")}</div>
        </p>
      );
    }
    default: {
      return assertNever(part);
    }
  }
}

function Content(props: { parts: CoursePart[] }) {
  const { parts } = props;

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  );
}

function Total(props: { count: number }) {
  const { count } = props;

  return (
    <p>
      Number of exercises: <strong>{count}</strong>
    </p>
  );
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
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special",
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
