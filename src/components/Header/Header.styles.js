import tw from "tailwind-styled-components";
import  styled  from 'styled-components';

export const MainContainer = tw.div`
  block
  mt-0
  mx-auto
  relative
  w-full
  mb-[2.4rem]
`;

export const ImgMedia = styled.div`
  
  @media (min-width: 1400px) {
    width: 1340px;
    margin: auto;
  }
`;
export const ImagContainer = tw(ImgMedia)`
  bg-[#f2f3f5]
  relative
  z-[-1]

`;

export const Img = tw.img`
  block
  w-full
  h-[450px]
  md:h-[300px]
  object-cover
`;

