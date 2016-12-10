import React, { Component } from 'react';
import styled from 'styled-components';
import * as colors from './open-color';
import hero from './hero.jpg';
import * as breakpoints from './breakpoints'

const Container = styled.header`
  height: 80vh;
  min-height: 500px;
  width: 100%;
  background: url(${hero}) ${colors.gray9};
  background-size: cover;
  display: flex;
  align-items: stretch;
`

const Overlay = styled.div`
  flex: 1;
  background-color: rgba(73, 52, 26, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
`

const Band = styled.h1`
  font-size: 4rem;
  color: ${colors.gray0};
  margin: 0 0 1rem;
  ${breakpoints.forPhoneOnly(`
    font-size: 3rem;
  `)}
`

const Divider = styled.hr`
  width: 30%;
`

const NextConcert = styled.div`
  color: ${colors.yellow4};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const H4 = styled.h4`
  font-size: 1.2rem;
  margin: 2rem 0 0;
  font-weight: 300;
`

const Date = styled.h2`
  font-size: 3rem;
  margin: 0;
  font-weight: 400;
  ${breakpoints.forPhoneOnly(`
    font-size: 2rem;
  `)}
`

const Time = styled.h3`
  font-size: 2rem;
  margin: 0;
  font-weight: 400;
  ${breakpoints.forPhoneOnly(`
    font-size: 1.5rem;
  `)}
`

class Header extends Component {
  render() {
    return (
      <Container>
        <Overlay>
          <Band>Royal Ampire</Band>
          <Divider/>
          <NextConcert>
            <H4>Nächstes Konzert:</H4>
            <Date>21.01.2016</Date>
            <Time>20:00 Uhr</Time>
          </NextConcert>
        </Overlay>
      </Container>
    );
  }
}

export default Header;
