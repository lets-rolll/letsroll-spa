import content from "./content.json";
import styles from "./BlogContent.module.scss";
import { BlogArticle } from "../BlogArticle/BlogArticle";
import { useState } from "react";
import { cloneDeep } from "lodash";

export function BlogContent() {
  const [blogArr, setLike] = useState(
    JSON.parse(localStorage.getItem("blogArticles") || JSON.stringify(content))
  );

  const toLikePost = (position: number): void => {
    const temp = cloneDeep(blogArr);
    temp.articles[position].liked = !temp.articles[position].liked;
    setLike(temp);

    localStorage.setItem("blogArticles", JSON.stringify(temp));
  };

  const blogArticles = blogArr.articles.map((article: any, position: any) => {
    return (
      <BlogArticle
        id={article.id}
        title={article.title}
        description={article.description}
        liked={article.liked}
        toLikePost={() => toLikePost(position)}
      />
    );
  });

  return (
    <div className={styles.Blog}>
      <div>{blogArticles}</div>
    </div>
  );
}
