import React from "react";
import PageInfo from '../components/PageInfo/PageInfo';
import { graphql } from 'gatsby';
import AboutPrewiew from '../components/AboutPreview/AboutPreview'

const pageData = {
    title: 'About',
    paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}

const AboutPage = ({data}) => {
    
    return(
        <>
            <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
            <AboutPrewiew 
                paragraph={data.datoCmsAbout.paragraph}
                podpis={data.datoCmsAbout.podpis}
                image={data.datoCmsAbout.image.fluid}
            />
        </>
    );
};

export const query = graphql`
{
    datoCmsAbout{
        paragraph
        podpis
        image{
            fluid(maxWidth: 1200, maxHeight: 1600) {
                ...GatsbyDatoCmsFluid_tracedSVG
            }
        }
    }
}
`;

export default AboutPage;