import React, { Fragment } from 'react';
import styled from 'styled-components';
import Triangle from '../components/Triangle';
import Particles from 'react-particles-js';
// import '../styles/_particles.scss'

const t1 = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  z-index: -2;

  ${props => {
    const color = props.theme.colors[props.color] || props.color;
    const border = `${props.height[0]} solid ${color};`;
    return props.invertY
      ? `border-bottom: ${border}; bottom: 0;`
      : `border-top: ${border};`;
  }}
  /* prettier stop */
  ${props => {
    const border = `${props.width[0]} solid transparent;`;
    return props.invertX
      ? `border-left: ${border}; right: 0;`
      : `border-right: ${border};`;
  }}


  @media only screen and (min-width: 768px) {
    ${props => {
      const height = props.height[1];
      return props.invertY
        ? `border-bottom-width: ${height};`
        : `border-top-width: ${height};`;
    }}
    /* prettier stop */
    ${props => {
      const width = props.width[1];
      return props.invertX
        ? `border-left-width: ${width};`
        : `border-right-width: ${width};`;
    }};
  }
`;

const particlesStyles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #FF00FF;
  z-index: -1;
`

const Background = () => (
  <div>
    <Triangle
      color="NN1"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    {/* <Triangle
      color="NN2"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="NN3"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="NN4"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    /> */}
  </div>
);

const Particle = () => {
  return (
    <>
      <Triangle 
      color="NN1"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
      ></Triangle>
        sdfsdfdsfsfd
        sdfsdfdsfsfdsdfsdf
        sdfsdf
        <Particles className="part" />
        
        
    </>
  )
}

export default Particle