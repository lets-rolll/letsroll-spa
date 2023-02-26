import styles from "./BlogArticle.module.scss";

interface ArticleProps {
  id: number;
  title: string;
  description: string;
  liked: boolean;
  toLikePost: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function BlogArticle({
  id,
  title,
  description,
  liked,
  toLikePost,
}: ArticleProps) {
  let like = liked ? "Да" : "Нет";

  return (
    <div key={id} className={styles.Article}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={toLikePost}>Like</button>
      {like}
    </div>
  );
}
