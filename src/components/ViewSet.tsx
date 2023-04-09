interface ViewSetProps {
  title: string;
  author: string;
  termsCount: number;
}

export function ViewSet({ title, author, termsCount }: ViewSetProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        {author} | {termsCount}
      </p>
    </div>
  );
}
