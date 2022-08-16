import React from "react";
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

export const query = graphql`
query MyQuery ($id: String){
  datoCmsArticle(id: {eq: $id}){
    title
    image {
      fixed(width: 500) {
        ...GatsbyDatoCmsFixed_tracedSVG
      }
    }
    author
    paragraph {
      ... on DatoCmsArticleImage {
        id
        imageData {
          fixed(width: 500) {
            ...GatsbyDatoCmsFixed_tracedSVG
          }
        }
      }
      ... on DatoCmsHedding {
        id
        hedingContent
      }
      ... on DatoCmsParagraphContent {
        id
        paragraphContent
      }
}
}
}`


const PostLayout = ({data}) => {
    return (
      <div>
        <h1>{data.datoCmsArticle.title}</h1>
        <p>{data.datoCmsArticle.author}</p>
        {<Image fixed={data.datoCmsArticle.image.fixed} />}
        <div>{data.datoCmsArticle.paragraph.map(item => {
          const itemKey = Object.keys(item)[1];
          
          console.log(itemKey);
          switch (itemKey) {
            case 'paragraphContent':
              return <p key={item.id}>{item[itemKey]}</p>;
            case 'hedingContent':
              return <h2 key={item.id}>{item[itemKey]}</h2>;
            case 'imageData':
              return <Image key={item.id} fixed={item[itemKey].fixed} />;
            default:
              return null;
          }
          
        })}
        </div>
      </div>
    );
  };
  
  export default PostLayout;