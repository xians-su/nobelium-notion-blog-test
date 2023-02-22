import Layout from "@/layouts/layout";
import { getAllPosts, getPostBlocks } from "@/lib/notion";
import BLOG from "@/blog.config";
import { createHash } from "crypto";
import Container from "@/components/Container";
import Error from "@/components/Error";

const BlogPost = ({ post, blockMap, emailHash }) => {
  if (!post) {
    return (
      <Container>
        <Error errCode={400} title={"頁面不存在."} />
      </Container>
    );
  }
  return (
    <Layout
      blockMap={blockMap}
      frontMatter={post}
      emailHash={emailHash}
      fullWidth={post.fullWidth}
    />
  );
};

export async function getStaticPaths() {
  const posts = await getAllPosts({ includePages: true });
  return {
    paths: posts.map((row) => `${BLOG.path}/${row.slug}`),
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getAllPosts({ includePages: true });
  const post = posts.find((t) => t.slug === slug) ?? null;
  const blockMap = post ? await getPostBlocks(post.id) : null;
  const emailHash = createHash("md5")
    .update(BLOG.email)
    .digest("hex")
    .trim()
    .toLowerCase();

  return {
    props: { post, blockMap, emailHash },
    revalidate: 1,
  };
}

export default BlogPost;
