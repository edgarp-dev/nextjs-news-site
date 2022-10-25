import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "../../Breadcrumbs";
import { Post } from "../../../shared/types";
import { Title, Figure, Content, Meta } from "./style";

type PostBodyProps = {
  post: Post;
};

export const PostBody = ({ post }: PostBodyProps) => {
  return (
    <div>
      <Breadcrumbs post={post} />
      <Title>{post.title}</Title>
      <Figure>
        <Image
          alt={post.title}
          src={post.image}
          loading="lazy"
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          width={960}
          height={340}
        />
      </Figure>
      <Content dangerouslySetInnerHTML={{ __html: post.content }} />
      <Meta>
        <span>{post.date}</span>
        <span>&middot;</span>
        <Link href={`category/${post.category}`}>
          <a>{post.category}</a>
        </Link>
        <span>&middot;</span>
        <a href={post.source}>Source</a>
      </Meta>
    </div>
  );
};
