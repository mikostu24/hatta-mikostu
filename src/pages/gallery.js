import React from "react";
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PageInfo from '../components/PageInfo/PageInfo';
import GalleryPrewiew from '../components/GalleryPreview/GalleryPrewiew'

const pageData = {
    title: 'Gallery',
    paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  padding-bottom: 50px;
`;

const GallaryPage = ({data}) => {
    
    const {
        allDatoCmsGallery: {nodes}
    } = data;
    return(
        <>
            <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
            <GalleryWrapper>
                {nodes[0].galleryContent.map(({id, imageData}) => (
                    <GalleryPrewiew 
                        image ={imageData.fluid} key={id}
                    />
                ))}
            </GalleryWrapper>
        </>
    );
};

export const query = graphql`
{
    allDatoCmsGallery {
        nodes {
            galleryContent {
                id
                imageData{
                    fluid(maxWidth: 500) {
                        ...GatsbyDatoCmsFluid_tracedSVG
                    }
                }
            }
        }
    }
}
`;

export default GallaryPage;